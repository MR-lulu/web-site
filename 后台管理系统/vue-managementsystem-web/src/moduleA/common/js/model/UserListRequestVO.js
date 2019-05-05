import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 用户查询登录信息协议请求包
 */
class UserListRequestVO extends BaseRequstVO {
  /**
   * 设置当前页码
   * @param value
   */
  set pageNumber (value) {
    this.PN = value
  }

  /**
   * 设置分页大小
   * @param value
   */
  set pageSize (value) {
    this.PS = value
  }
}
export default UserListRequestVO
