import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class NavigationAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setNavigationId(value) {
    this.navigationId = value;
  }

  /**
   * 设置导航名称
   * @param value
   */
  set setName(value) {
    this.name = value;
  }

  /**
   * 设置导航链接
   * @param value
   */
  set setNavigationUrl(value) {
    this.navigationUrl = value;
  }

  /**
   * 设置优先级
   * @param value
   */
  set setPriority(value) {
    this.priority = value;
  }

  /**
   * 设置模块序号
   * @param valus
   */
  set setModuleNum(valus) {
    this.moduleNum = value;
  }

  /**
   * 设置所属站点
   * @param value
   */
  set setSite(value) {
    this.site = value;
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

export default NavigationAddOrModifyRequestVO
