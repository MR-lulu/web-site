/**
 * 系统初始化需要的基础信息 从云服务器获取
 */
class BaseInfo {
  constructor () {
    // 设置lt对应的类型为LanguageType
    this.ltType = LanguageType
  }

  /**
   * 获取拓展系统前置机地址数组
   * @returns {*} 拓展系统前置机地址数组
   */
  get expandURLArr () {
    return this.eu
  }

  /**
   * 获取系统状态
   * @returns {*} 系统状态 :0：系统维护中 1：系统正常
   */
  get systemStaus () {
    return this.eu
  }

  /**
   * 获取系统维护中地址
   * @returns {*} 系统维护地址 格式http://IP:PORT/XXXX/%s/index.html(%s需要用语言中的zf标签替换)
   */
  get maintainURL () {
    return this.eu
  }

  /**
   * 获取时区信息
   * @returns {*} 时区信息
   */
  get timeZone () {
    return this.tz
  }

  /**
   * 获取语言信息
   * @returns {*} 语言信息
   */
  get languageInfo () {
    return this.lt
  }

  /**
   * 获取common文件版本号
   * @returns {*} common文件版本号
   */
  get commonFileVersion () {
    return this.cv
  }

  /**
   * 获取resource文件版本号
   * @returns {*} resource文件版本号
   */
  get resourceFileVersion () {
    return this.rv
  }
}

/**
 * 语言类型
 */
class LanguageType {
  /**
   * 获取语言类型ID
   * @returns {*}语言类型ID
   */
  get languageID () {
    return this.id
  }

  /**
   *获取语言名称
   * @returns {*}语言名称
   */
  get name () {
    return this.n
  }

  /**
   *获取语言对应的文件夹目录
   * @returns {*}语言对应的文件夹目录
   */
  get dirName () {
    return this.t
  }

  /**
   *获取语言对应的zendesk文件目录
   * @returns {*}语言对应的zendesk文件目录
   */
  get zendeskFileName () {
    return this.zf
  }

  /**
   *获取语言对应的法币编号
   * @returns {*}语言对应的法币编号
   */
  get legalCurrencyID () {
    return this.lc
  }
}

export default BaseInfo
