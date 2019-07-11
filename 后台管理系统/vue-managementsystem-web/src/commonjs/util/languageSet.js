/**
 * 设置语言工具
 */
import Vue from 'vue'
import LocalStorage from '@/store/localstorage/index.js'
import Config from '../../assets/Config.js'

// 存放已经加载的语言类型
const loadedLanguages = ['']
// 本地存储
let localStorage = new LocalStorage()

/**
 * 动态加载语言
 * @param lang 语言种类
 * @returns {Promise<void>}
 */
export async function changeLanguage (lang) {
  // 如果设置的语言为空或者目标语言与当前语言一样则直接返回
  if (!lang || lang === Vue.prototype.i18n.lang) {
    return
  }
  // 如果目标语言没有加载则动态加载
  if (!loadedLanguages.includes(lang)) {
    // 从localStorage获取本地资源文件信息
    let localResource = localStorage.getLocalResourceFile()
    console.log('localResource')
    console.log(localResource)
    let localResourcePromise = null
    // 如果localStorage中没有本地资源文件信息或者没有当前语言资源文件信息
    if (!localResource || !localResource[lang]) {
      // 加载当前语言的本地资源文件
      localResourcePromise = import(`@/locale/lang/${lang}/resources.js`)
    }

    if (localResourcePromise) {
      let curLocalResource = await localResourcePromise
      // 当前语言和资源文件转换为Json对象
      let curLocalResourceJson = JSON.parse(`{"${lang}": ${JSON.stringify(curLocalResource)}}`)
      if (!localResource) {
        localResource = curLocalResourceJson
      } else {
        Object.assign(localResource, curLocalResourceJson)
      }
      localStorage.setLocalResourceFile(localResource)
      localStorage.setLocalResourceVer(Config.resourceVer)
    }

    let resource = localResource[lang]
    console.log('resource')
    console.log(resource)
    Vue.prototype.i18n.setLocaleMessage(lang, resource)
    loadedLanguages.push(lang)
  }
  Vue.prototype.i18n.locale = lang
  // 将语言更新到内存
  Vue.prototype.memoryData.lang = lang
  localStorage.setLanguage(lang)
}
