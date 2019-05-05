import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 登录协议返回包
 * lyl 2018-06-10 Version:F1.0.0.0
 */
class LogonResponseVO extends BaseResponseVO {
  /**
   * 获取用户代码
   * @returns {*}
   */
  get userNO () {
    return this.RETURNRESULT.UNO
  }
}
export default LogonResponseVO
