import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

/**
 * 登录协议请求包
 */
class UserInfoRequestVO extends BaseRequstVO {
  /**
   * 设置用户ID
   * @param value
   * @constructor
   */
  set setUserId(value) {
    this.userId = value;
  }

}

export default UserInfoRequestVO
