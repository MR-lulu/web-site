import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class LeaveMsgRequestVO extends BaseRequstVO {
  /**
   * 设置开始日期
   * @param value
   */
  set setStartDate(value) {
    this.startDate = value;
  }

  /**
   * 设置结束日期
   * @param value
   */
  set setEndDate(value) {
    this.endDate = value;
  }

  /**
   * 设置页数（第几页）
   * @param value
   */
  set setPage(value) {
    this.page = value;
  }

  /**
   * 设置每页条数
   * @param value
   */
  set setRows(value) {
    this.rows = value;
  }
}

export default LeaveMsgRequestVO
