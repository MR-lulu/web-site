import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class UpdateUserInfoRequestVO extends BaseRequstVO {
  /**
   * 设置用户ID
   * @param value
   */
  set setUserId(value) {
    this.userId = value;
  }

  /**
   * 设置用户电话
   * @param value
   */
  set setPhone(value) {
    this.phone = value;
  }

  /**
   * 设置邮箱
   * @param value
   */
  set setMail(value) {
    this.mail = value;
  }

  /**
   * 设置密码
   * @param value
   */
  set setPassword(value) {
    this.password;
  }
}

export default UpdateUserInfoRequestVO
