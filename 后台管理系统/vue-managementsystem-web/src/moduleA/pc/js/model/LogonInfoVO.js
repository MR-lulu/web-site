/**
 * 登录信息VO
 */
class LoginInfoVO {
  /**
   * 获取编号
   * @returns {*}
   * @constructor
   */
  get ID () {
    return this.IDTemp
  }

  /**
   * 设置编号
   * @param value
   * @constructor
   */
  set ID (value) {
    this.IDTemp = value
  }

  /**
   * 获取登录类型
   * @returns {*}
   */
  get logonType () {
    return this.logonTypeTemp
  }

  /**
   * 设置登录类型
   * @param value
   */
  set logonType (value) {
    this.logonTypeTemp = value
  }

  /**
   * 获取登录结果
   * @returns {*}
   */
  get result () {
    return this.resultTemp
  }

  /**
   * 设置登录结果
   * @param value
   */
  set result (value) {
    this.resultTemp = value
  }

  /**
   * 获取登录时间
   * @returns {*}
   */
  get createTime () {
    return this.createTimeTemp
  }

  /**
   * 设置登录时间
   * @param value
   */
  set createTime (value) {
    this.createTimeTemp = value
  }
}
export default LoginInfoVO
