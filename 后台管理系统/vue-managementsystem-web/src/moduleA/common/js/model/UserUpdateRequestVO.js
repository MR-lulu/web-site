import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 修改用户信息协议请求包
 */
class UserUpdateRequestVO extends BaseRequstVO {
  /**
   * 设置model对象
   * @param value
   */
  set modelInfo (value) {
    this.MODEL = value
  }

  /**
   * 获取model对象实例
   * @returns {LogonInfo}
   */
  get logonInfo () {
    return new LogonInfo()
  }
}

/**
 * model类
 */
class LogonInfo {
  /**
   * 设置ID
   * @param value
   * @constructor
   */
  set logonID (value) {
    this.ID = value
  }

  /**
   * 设置登录类型
   * @param value
   * @constructor
   */
  set logonType (value) {
    this.LT = value
  }

  /**
   * 设置登录结果
   * @param value
   * @constructor
   */
  set result (value) {
    this.R = value
  }

  /**
   * 设置登录时间
   * @param value
   */
  set createTime (value) {
    this.CT = value
  }
}
export default UserUpdateRequestVO
