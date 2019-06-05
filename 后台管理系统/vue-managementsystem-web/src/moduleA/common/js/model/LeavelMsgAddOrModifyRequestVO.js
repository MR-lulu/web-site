import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class LeavelMsgAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置id
   * @param value
   */
  set setLeaveMsgId(value) {
    this.leaveMsgId = value;
  }

  /**
   * 设置留言内容
   * @param value
   */
  set setMsgContent(value) {
    this.msgContent = value;
  }

  /**
   * 设置用户ip
   * @param value
   */
  set setUserIp(value) {
    this.userIp = value;
  }

  /**
   * 设置用户id
   * @param value
   */
  set setuserId(value) {
    this.userId = value;
  }

  /**
   * 设置状态
   * @param value
   */
  set setStatus(value) {
    this.status = value;
  }

  /**
   * 设置备注
   * @param value
   */
  set setRemarks(value) {
    this.remarks = value;
  }

  /**
   * 设置创建时间
   * @param value
   */
  set setServerCreateTime(value) {
    this.serverCreateTime = value;
  }

  /**
   * 设置修改时间
   * @param value
   */
  set setServerUpdateTime(value) {
    this.serverUpdateTime = value;
  }

  /**
   * 设置扩展字段1
   * @param value
   */
  set setExtra1(value) {
    this.extra1 = value;
  }

  /**
   * 设置扩展字段2
   * @param value
   */
  set setExtra2(value) {
    this.extra2 = value;
  }
}

export default LeavelMsgAddOrModifyRequestVO
