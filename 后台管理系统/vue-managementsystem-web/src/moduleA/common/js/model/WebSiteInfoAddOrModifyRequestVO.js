import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class WebSiteInfoAddOrModifyRequestVO extends BaseRequstVO{
  /**
   * 设置ID
   * @param value
   */
  set setWebInfoId(value) {
    this.webInfoId = value;
  }

  /**
   * 设置网站地址
   * @param value
   */
  set setWebAddress(value) {
    this.webAddress = value;
  }

  /**
   * 设置联系电话
   * @param value
   */
  set setPhone(value) {
    this.phone = value;
  }

  /**
   * 设置网站简介
   * @param value
   */
  set setWebShortInfo(value) {
    this.webShortInfo = value;
  }

  /**
   * 设置所有者名称
   * @param value
   */
  set setOwner(value) {
    this.owner = value;
  }

  /**
   * 设置所有者简介
   * @param value
   */
  set setOwnerShortInfo(value) {
    this.ownerShortInfo = value;
  }

  /**
   * 设置网站邮箱
   * @param value
   */
  set setEmail(value) {
    this.email = value;
  }

  /**
   * 设置联系方式
   * @param value
   */
  set setContact(value) {
    this.contact = value;
  }

  /**
   * 设置应用方向
   * @param value
   */
  set setApplication(value) {
    this.application = value;
  }

  /**
   * 设置联系地址
   * @param value
   */
  set setAddress(value) {
    this.address = value;
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

export default WebSiteInfoAddOrModifyRequestVO
