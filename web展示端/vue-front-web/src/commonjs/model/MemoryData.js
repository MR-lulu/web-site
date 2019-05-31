/**
 * 内存数据对象
 */
class MemoryData {
  /**
   * 获取当前语言
   * @returns {*}
   */
  get lang () {
    return this.langTemp
  }

  /**
   * 设置当前语言数组 类型为LanguageType
   * @param value 当前语言
   */
  set lang (value) {
    this.langTemp = value
  }

  /**
   * 获取系统支持的语言数组 类型为LanguageType
   * @returns {*} 系统支持的语言数组 类型为LanguageType
   */
  get langs () {
    return this.langsTemp
  }

  /**
   * 设置系统支持的语言数组
   * @param value 系统支持的语言数组
   */
  set langs (value) {
    this.langsTemp = value
  }

  /**
   * 设置基础信息
   * @param value
   */
  set baseInfo (value) {
    this.baseInfoTemp = value
  }

  /**
   * 获取基础信息
   */
  get baseInfo () {
    return this.baseInfoTemp
  }

  /**
   * 设置服务端基础字典信息
   * @param value
   */
  set baseDictionaryInfo (value) {
    this.baseDictionaryInfoTemp = value
  }

  /**
   * 获取服务端基础字典信息
   */
  get baseDictionaryInfo () {
    return this.baseDictionaryInfoTemp
  }
}

export default MemoryData
