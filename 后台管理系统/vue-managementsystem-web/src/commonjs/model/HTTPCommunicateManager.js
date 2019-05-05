/**
 * 反射对象将对象的属性使用json对应的属性赋值
 * mengyu 2018-06-08 version:V1.0.0.0
 */
class HTTPCommunicateManager {
  /**
   * 设置入口通讯对象
   * @param value 入口通讯对象
   */
  set enterHTTPCommunicate (value) {
    this.enterHTTPCommunicateTemp = value
  }

  /**
   * 获取入口通讯对象
   * @returns {*} 入口通讯对象
   */
  get enterHTTPCommunicate () {
    return this.enterHTTPCommunicateTemp
  }

  /**
   * 设置业务通讯对象
   * @param value 业务通讯对象
   */
  set httpCommunicate (value) {
    this.httpCommunicateTemp = value
  }

  /**
   * 获取业务通讯对象
   * @returns {*} 业务通讯对象
   */
  get httpCommunicate () {
    return this.httpCommunicateTemp
  }
}

export default HTTPCommunicateManager
