import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class RegistersInfoResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为Parts
    this.RESULTLISTType = RegistersInfo;
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data.list;
  }

  /**
   * 获取页数
   */
  get getPage() {
    return this.data.page;
  }

  /**
   * 获取每页条数
   * @return {*}
   */
  get getRows() {
    return this.data.rows;
  }

  /**
   * 获取总的条数
   * @return {*}
   */
  get getTotal() {
    return this.data.total;
  }
}

class RegistersInfo {
  /**
   * 获取联系方式
   * @return {*}
   */
  get getContact() {
    return this.contact;
  }

  /**
   * 获取留言信息
   * @return {*}
   */
  get getLeaveMsg() {
    return this.leaveMsg;
  }

  /**
   * 获取姓名
   * @return {*}
   */
  get getName() {
    return this.name;
  }

  /**
   * 获取联系电话
   * @return {*}
   */
  get getPhone() {
    return this.phone;
  }

  /**
   * 获取ID
   * @return {*}
   */
  get getRegistersInfoId() {
    return this.registersInfoId;
  }

  /**
   * 获取状态
   * @return {*}
   */
  get getStatus() {
    return this.status;
  }

  /**
   * 获取备注
   * @return {*}
   */
  get getRemarks() {
    return this.remarks;
  }

  /**
   * 获取创建时间
   * @return {*}
   */
  get getServerCreateTime() {
    return this.serverCreateTime;
  }

  /**
   * 获取修改时间
   * @return {*}
   */
  get getServerUpdateTime() {
    return this.serverUpdateTime;
  }

  /**
   * 获取扩展字段1
   * @return {*}
   */
  get getExtra1() {
    return this.extra1;
  }

  /**
   * 获取扩展字段2
   * @return {*}
   */
  get getExtra2() {
    return this.extra2;
  }
}


export default RegistersInfoResponseVO
