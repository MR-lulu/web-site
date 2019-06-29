import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class WebButtomResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为WebTop
    this.RESULTLISTType = WebButtom
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data
  }
}

class WebButtom {
  /**
   * 获取关于我们
   * @return {*}
   */
  get getAbout() {
    return this.about;
  }

  /**
   * 获取联系地址
   * @return {*}
   */
  get getAddress() {
    return this.address;
  }

  /**
   * 获取底部图片地址
   * @return {*}
   */
  get getBottomUrl() {
    return this.bottomUrl;
  }

  /**
   * 获取联系方式
   * @return {*}
   */
  get getContact() {
    return this.contact;
  }

  /**
   * 获取联系电话
   * @return {*}
   */
  get getPhone() {
    return this.phone;
  }

  /**
   * 获取备案信息
   * @return {*}
   */
  get getRecord() {
    return this.record;
  }

  /**
   * 获取自定义信息
   * @return {*}
   */
  get getSelfInfo() {
    return this.selfInfo;
  }

  /**
   * 获取ID
   * @return {*}
   */
  get getWebBottomId() {
    return this.webBottomId;
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

export default WebButtomResponseVO
