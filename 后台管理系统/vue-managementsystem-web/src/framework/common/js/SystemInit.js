import Vue from 'vue'
import VueI18n from 'vue-i18n'
import util from 'util'
import MessageBoxTranslate from '@/commonjs/util/MessageBoxTranslate.js'
import Config from '@/framework/common/config/Config.js'
import MemoryData from '@/commonjs/model/MemoryData.js'
import HTTPCommunicateManager from '@/commonjs/model/HTTPCommunicateManager.js'
import HTTPCommunicate from '@/commonjs/util/HTTPCommunicate.js'
import LocalStorage from '@/store/localstorage/index.js'
import store from '@/store/vuex/index.js'
import BaseInfo from '@/commonjs/model/BaseInfo.js'
import { changeLanguage } from '@/commonjs/util/languageSet.js'
import IntervalInit from './IntervalInit'
import { ProtocolContent } from '@/protocolConfig/protocolConfig.js'
import $ from 'jquery'

/**
 * 系统初始化类
 */
class SystemInit {
  constructor () {
    Vue.config.productionTip = false

    Vue.use(VueI18n)

    this.i18n = new VueI18n()

    // 本地存储
    this.localStorage = new LocalStorage()

    // 初始化内存对象
    this.memoryData = new MemoryData()

    // 通讯管理对象
    this.communicateManger = new HTTPCommunicateManager()

    // 初始化入口通讯类
    this.enterHTTPCommunicate = new HTTPCommunicate(Config.enterURL, 0)

    // interval初始化对象，负责定时执行任务
    this.intervalInit = new IntervalInit()
  }

  /**
   * 异步初始化
   */
  async initAsync () {
    // 初始化系统基础系统
    let initBaseInfoResult = await this.initBaseInfo()
    // 如果初始化失败
    if (!initBaseInfoResult) {
      // TODO 需要修改为使用封装的弹出框弹出提示信息 跳转到错误提示页面
      alert('系统初始化失败（错误码XXXXXXXXX4），请联系客服人员')
      return
    }

    // 声明i18n
    Vue.prototype.i18n = this.i18n
    // 声明内存对象
    Vue.prototype.memoryData = this.memoryData
    // 声明localStorage
    Vue.prototype.localStorage = this.localStorage
    Vue.prototype.ProtocolContent = ProtocolContent
    // 声明通讯的管理类
    Vue.prototype.communicateManger = this.communicateManger

    // *生成Promise对象时请求已经发送到服务端，所以使用一下方式服务端并行处理请求数据 */

    // 初始化语言信息
    let initLanguageInfoPromise = this.initLanguageInfo()

    // 初始化Common文件信息结果
    await initLanguageInfoPromise

    // 初始化主题
    this.initTheme()

    // 声明带翻译功能的弹出框
    Vue.prototype.messageBox = new MessageBoxTranslate(this.i18n)

    this.intervalInit.init()
  }

  /**
   * 初始化基础信息
   * @returns {Promise<boolean>}
   */
  async initBaseInfo () {
    //let baseInfo = await this.enterHTTPCommunicate.getObject(Config.enterFileName, BaseInfo)
    let baseInfo = this.enterHTTPCommunicate.getJsonObject(Config.initCinfig, BaseInfo)
    console.log(baseInfo)
    if (!baseInfo) {
      return false
    }
    this.memoryData.baseInfo = baseInfo
    this.memoryData.langs = baseInfo.languageInfo

    // 从localStorage获取语言
    let lang = this.localStorage.getLanguage()
    // 如果本地没有存储语言则获取浏览器语言作为默认语言
    if (!lang) {
      // 获取当前浏览器语言
      let browserLang = navigator.language || navigator.userLanguage // 常规浏览器语言和IE浏览器
      // 通过关系转换浏览器语言为可识别的语言
      browserLang = Config.browserLangTOLang.get(browserLang) || browserLang
      if (this.memoryData.langs.find((value) => value.dirName === browserLang)) {
        lang = browserLang
      } else {
        // 如果没有匹配上浏览器语言则设置为语言列表中的第一个语言
        lang = this.memoryData.langs[0].dirName
      }
    }
    this.memoryData.lang = lang
    // 如果系统状态为0则跳转到系统维护页面
    if (baseInfo.systemStaus === '0') {
      // TODO 使用语言替换baseInfo.maintainURL中的占位符
      window.location.href = util.format(baseInfo.maintainURL, lang)
    }

    // 拓展系统前置机地址
    let expandURL = baseInfo.expandURLArr
    // 获取拓展系统通讯地址
    if (!expandURL) {
      return false
    }
    // 如果拓展系统前置机地址大于1个则随机选择一个地址
    if (expandURL.size > 1) {
      expandURL = expandURL[this.random(expandURL.size - 1, 0)]
    } else {
      expandURL = expandURL[0]
    }
    // 业务通讯对象
    this.communicateManger.httpCommunicate = new HTTPCommunicate(expandURL, 5000)
    this.communicateManger.enterHTTPCommunicate = this.enterHTTPCommunicate

    return true
  }

  /**
   * 初始化语言信息
   * @returns {Promise<void>}
   */
  async initLanguageInfo () {
    // 从loalstorage中获取客户端本地资源文件版本
    let localResourceVer = this.localStorage.getLocalResourceVer()
    // 如果没有版本信息或者版本信息低于服务器端版本信息则删除localStorage中存储的所有语言的本地资源数据
    if (!localResourceVer || localResourceVer < Config.resourceVer) {
      // 删除loalstorage客户端本地资源文件信息
      this.localStorage.removeItem(this.localStorage.localResourceVerItem)
      this.localStorage.removeItem(this.localStorage.localResourceFileItem)
    }

    // 从loalstorage中获取服务端资源文件版本
    let serverResourceVer = this.localStorage.getServerResourceVer()
    if (!serverResourceVer || serverResourceVer < this.memoryData.baseInfo.resourceFileVersion) {
      // 删除loalstorage服务端资源文件信息
      this.localStorage.removeItem(this.localStorage.serverResourceVerItem)
      this.localStorage.removeItem(this.localStorage.serverResourceFileItem)
    }

    // 调用languageSet设置当前语言
    await changeLanguage(this.memoryData.lang)
  }

  /**
   * 初始化主题
   */
  initTheme () {
    // 从localStorage中获取主题
    let theme = this.localStorage.getTheme('default')
    // TODO 设置主题 需要移到其他地方
    var style = document.getElementById('pc_style')
    style.href = `assets/theme/pc/${theme}/framework/css/style.css`
    // 将主题存储到vuex
    store.commit('changeTheme', theme)
    // 将主题存储到localStorage
    this.localStorage.setTheme(theme)
  }

  /**
   * 返回一个指定范围内的随机数
   * @param max 最大值
   * @param min 最小值
   * @returns {number} 随机数
   */
  random (max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}
export default SystemInit
