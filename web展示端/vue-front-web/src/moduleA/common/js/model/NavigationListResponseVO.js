import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class NavigationListResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为Navigation
    this.RESULTLISTType = Navigation;
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data;
  }
}

class Navigation {
  /**
   * 获取id
   * @return {*}
   */
  get getNavigationId() {
    return this.navigationId;
  }

  /**
   * 获取导航地址
   * @return {*}
   */
  get getNavigationUrl() {
    return this.navigationUrl;
  }

  /**
   * 获取序号
   * @return {*}
   */
  get getPriority() {
    return this.priority;
  }

  /**
   * 获取所属站点
   * @return {*}
   */
  get getSite() {
    return this.site;
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


export default NavigationListResponseVO
