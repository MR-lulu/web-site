import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 删除用户信息协议请求包
 */
class UserDelRequestVO extends BaseRequstVO {
  /**
   * 设置编号
   * @param value
   * @constructor
   */
  set ID (value) {
    this.IDTemp = value
  }
}
export default UserDelRequestVO
