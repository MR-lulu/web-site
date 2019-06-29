import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class BackgroundimgAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setCommonInfoId(value) {
    this.commonInfoId = value;
  }

  /**
   * 设置背景图片地址
   * @param value
   */
  set setBgUrl(value) {
    this.bgUrl = value;
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

export default BackgroundimgAddOrModifyRequestVO
