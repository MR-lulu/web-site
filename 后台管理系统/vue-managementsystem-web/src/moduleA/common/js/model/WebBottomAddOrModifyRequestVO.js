import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class WebBottomAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setWebBottomId(value) {
    this.webBottomId = value;
  }

  /**
   * 设置自定义信息
   * @param value
   */
  set setSelfInfo(value) {
    this.selfInfo = value;
  }

  /**
   * 设置备案
   * @param value
   */
  set setRecord(value) {
    this.record = value;
  }

  /**
   * 设置联系电话
   * @param value
   */
  set setPhone(value) {
    this.phone = value;
  }

  /**
   * 设置联系方式
   * @param value
   */
  set setcontact(value) {
    this.contact = value;
  }

  /**
   * 底部图片地址
   * @param value
   */
  set setBottomUrl(value) {
    this.bottomUrl = value;
  }

  /**
   * 设置地址
   * @param value
   */
  set setAddress(value) {
    this.address = value;
  }

  /**
   * 设置关于我们
   * @param value
   */
  set setAbout(value) {
    this.about = value;
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

export default WebBottomAddOrModifyRequestVO
