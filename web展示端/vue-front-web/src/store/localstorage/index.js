/**
 *  浏览器缓存工具
 *  存放和获取用户信息、主题、风格等
 *  警告：所有要存入到localStorage和从localStorage中获取值，都需要在此类中增加响应的方法，不允许私自使用
 *
 */
/**
 * 本地存储类
 */
class LocalStorage {
  constructor () {
    // 定义主题的存储key值
    this.themeItem = 'themeItem'
    // 定义语言的存储key值
    this.languageItem = 'languageItem'
    // common文件版本号key值
    this.commonFileVerItem = 'commonFileVerItem'
    // common文件存储key值 存储内容baseDictionaryInfo
    this.commonFileItem = 'commonFileItem'
    // 本地资源文件版本存储key值
    this.localResourceVerItem = 'localResourceVerItem'
    // 本地资源文件存储key值
    this.localResourceFileItem = 'localResourceFileItem'
    // 服务器资源文件版本号key值
    this.serverResourceVerItem = 'serverResourceVerItem'
    // 服务端资源文件存储key值 存储内容为Map key：语言标示 value：Map（key：健值 value：字符串）
    this.serverResourceFileItem = 'serverResourceFileItem'
  }

  /**
   * 存储当前语言
   * @param value 语言
   */
  setLanguage (value) {
    window.localStorage.setItem(this.languageItem, value)
  }

  /**
   * 获取当前语言
   * @returns {string | null} 语言
   */
  getLanguage () {
    return window.localStorage.getItem(this.languageItem)
  }

  /**
   * 存储PC主题的方法
   * @param value 主题名
   */
  setTheme (value) {
    window.localStorage.setItem(this.themeItem, value)
  }

  /**
   * 获取PC主题名称
   * @param defaultValue 默认值
   * @returns {string | null}
   */
  getTheme (defaultValue) {
    return window.localStorage.getItem(this.themeItem) || defaultValue
  }

  /**
   * 存储common文件版本号
   * @param value common文件版本号
   */
  setCommonFileVer (value) {
    window.localStorage.setItem(this.commonFileVerItem, value)
  }

  /**
   * 获取common文件版本号
   * @returns {string | null} common文件版本号
   */
  getCommonFileVer () {
    return window.localStorage.getItem(this.commonFileVerItem)
  }

  /**
   * 存储本地资源文件版本号
   * @param value 本地资源文件版本号
   */
  setLocalResourceVer (value) {
    window.localStorage.setItem(this.localResourceVerItem, value)
  }

  /**
   * 获取本地资源文件版本号
   * @returns {string | null} 本地资源文件版本号
   */
  getLocalResourceVer () {
    return window.localStorage.getItem(this.localResourceVerItem)
  }

  /**
   * 存储服务器资源文件版本号
   * @param value 服务器资源文件版本号
   */
  setServerResourceVer (value) {
    window.localStorage.setItem(this.serverResourceVerItem, value)
  }

  /**
   * 获取服务器资源文件版本号
   * @returns {string | null} 服务器资源文件版本号
   */
  getServerResourceVer () {
    return window.localStorage.getItem(this.serverResourceVerItem)
  }

  /**
   * 存储common文件(baseDictionaryInfo)
   * @param value common文件(baseDictionaryInfo)
   */
  setBaseDictionaryInfo (value) {
    window.localStorage.setItem(this.commonFileItem, JSON.stringify(value))
  }

  /**
   * 获取common文件(baseDictionaryInfo)
   * @returns {string | null} common文件(baseDictionaryInfo)
   */
  getBaseDictionaryInfo () {
    let temp = window.localStorage.getItem(this.commonFileItem)
    if (!temp) {
      return null
    }
    return JSON.parse(temp)
  }

  /**
   * 存储本地资源文件
   * @param value 本地资源文件 存储内容为Map key：语言标示 value：Map（key：健值 value：字符串）
   */
  setLocalResourceFile (value) {
    window.localStorage.setItem(this.localResourceFileItem, JSON.stringify(value))
  }

  /**
   * 获取本地资源文件
   * @returns {string | null} 本地资源文件 存储内容为Map key：语言标示 value：Map（key：健值 value：字符串）
   */
  getLocalResourceFile () {
    let temp = window.localStorage.getItem(this.localResourceFileItem)
    if (!temp) {
      return null
    }
    return JSON.parse(temp)
  }

  /**
   * 存储服务端资源文件
   * @param value 服务端资源文件 存储内容为Map key：语言标示 value：Map（key：健值 value：字符串）
   */
  setServerResourceFile (value) {
    window.localStorage.setItem(this.serverResourceFileItem, JSON.stringify(value))
  }

  /**
   * 获取服务端资源文件
   * @returns {string | null} 服务端资源文件 存储内容为Map key：语言标示 value：Map（key：健值 value：字符串）
   */
  getServerResourceFile () {
    let temp = window.localStorage.getItem(this.serverResourceFileItem)
    if (!temp) {
      return null
    }
    return JSON.parse(temp)
  }

  /**
   * 通过Item移除数据
   * @param item
   * */
  removeItem (item) {
    window.localStorage.removeItem(item)
  }
}

export default LocalStorage
