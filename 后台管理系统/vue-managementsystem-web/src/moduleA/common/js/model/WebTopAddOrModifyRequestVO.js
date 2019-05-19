import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class WebTopAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setWebTopId(value) {
    this.webTopId = value;
  }

  /**
   * 设置网站名称
   * @param value
   */
  set setWebName(value) {
    this.webName = value;
  }

  /**
   * 设置联系电话
   * @param value
   */
  set setPhone(value) {
    this.phone = value;
  }

  /**
   * 设置导航数量
   * @param value
   */
  set setNavCount(value) {
    this.navCount = value;
  }

  /**
   * 设置logo地址
   * @param value
   */
  set setLogoUrl(value) {
    this.logoUrl = value;
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

export default WebTopAddOrModifyRequestVO
