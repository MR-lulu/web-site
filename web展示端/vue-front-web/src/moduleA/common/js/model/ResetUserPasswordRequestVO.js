import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class ResetUserPasswordRequestVO extends BaseRequstVO {
  /**
   * 设置用户ID和密码
   * @param value
   */
  set setSubUserList(value) {
    this.subUserList = value;
  }
}

export default ResetUserPasswordRequestVO
