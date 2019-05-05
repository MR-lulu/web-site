import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 注册协议返回包
 * lyl 2018-06-10 Version:F1.0.0.0
 */
class RegisterResponseVO extends BaseResponseVO {
  /**
   * 获取用户代码
   * @returns {*}
   */
  get userNO () {
    return this.RETURNRESULT.UNO
  }
  /**
   * 获取国家
   * @returns {*}
   */
  get country () {
    return this.RETURNRESULT.CTY
  }
}
export default RegisterResponseVO
