import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 登录协议返回包
 * lyl 2018-06-10 Version:F1.0.0.0
 */
class LoginResponseVO extends BaseResponseVO {
  /**
   * 获取token
   * @return {*|token|CancelToken}
   */
  get getToken() {
    return this.data.token;
  }

  /**
   * 获取用户信息
   * @returns {*}
   */
  get getUser() {
    return this.data.user;
  }
}
export default LoginResponseVO
