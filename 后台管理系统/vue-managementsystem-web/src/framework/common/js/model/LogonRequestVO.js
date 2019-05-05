import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 登录协议请求包
 */
class LogonRequestVO extends BaseRequstVO {
  /**
   * 设置用户代码
   * @param value
   * @constructor
   */
  set userNO (value) {
    this.userNOTemp = value
  }

  /**
   * 设置密码
   * @param value
   * @constructor
   */
  set password (value) {
    this.passwordTemp = value
  }

  /**
   * 设置推荐码
   * @param value
   * @constructor
   */
  set authCode (value) {
    this.authCodeTemp = value
  }

  /**
   * 设置设备号
   * @param value
   * @constructor
   */
  set deviceID (value) {
    this.deviceIDTemp = value
  }
}
export default LogonRequestVO
