import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class LeavelMsgAddOrModifyResponseVO extends BaseResponseVO {
  /**
   * 获取返回结果码
   * @return {*}
   */
  get getResultCode() {
    return this.data;
  }
}

export default LeavelMsgAddOrModifyResponseVO
