import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 注册协议请求包
 */
class RegisterRequestVO extends BaseRequstVO {
  /**
   * 声明构造
   * @param protocolName 协议名称
   * @param userNO 用户代码
   * @param password 密码
   * @param authCode 验证码
   * @param deviceID 设备号
   */
  constructor (protocolName, userNO, password, authCode, deviceID) {
    super(protocolName)
    this.userNO = userNO
    this.password = password
    this.authCode = authCode
    this.deviceID = deviceID
  }

  /**
   * 设置用户代码
   * @param value
   */
  set userNO (value) {
    this.userNOTemp = value
  }

  /**
   * 设置密码
   * @param value
   */
  set password (value) {
    this.passwordTemp = value
  }

  /**
   * 设置验证码
   * @param value
   */
  set authCode (value) {
    this.authCodeTemp = value
  }

  /**
   * 设置设备号
   * @param value
   */
  set deviceID (value) {
    this.deviceIDTemp = value
  }
}
export default RegisterRequestVO
