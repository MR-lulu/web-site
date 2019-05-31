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
  set userName(value) {
    this.userName = value;
  }

  /**
   * 设置用户密码
   * @param value
   */
  set password (value) {
    this.password = value;
  }
}

export default LoginRequestVO
