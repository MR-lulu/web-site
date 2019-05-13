import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 登录协议请求包
 */
class LoginRequestVO extends BaseRequstVO {
  /**
   * 设置用户名
   * @param value
   * @constructor
   */
  set setUserName(value) {
    this.userName = value;
  }

  /**
   * 设置用户密码
   * @param value
   */
  set setPassword(value) {
    this.password = value;
  }
}

export default LoginRequestVO
