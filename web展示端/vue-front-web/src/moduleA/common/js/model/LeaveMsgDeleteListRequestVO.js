import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class LeaveMsgDeleteListRequestVO extends BaseRequstVO {
  /**
   * 设置id数组
   * @param value
   */
  set setIds(value) {
    this.ids = value;
  }
}

export default LeaveMsgDeleteListRequestVO
