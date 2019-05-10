import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 登录协议返回包
 * lyl 2018-06-10 Version:F1.0.0.0
 */
class LoginResponseVO extends BaseResponseVO {
  /**
   * 获取token
   * @returns {*}
   */
  get token() {
    return this.token;
  }
}

export default LoginResponseVO
