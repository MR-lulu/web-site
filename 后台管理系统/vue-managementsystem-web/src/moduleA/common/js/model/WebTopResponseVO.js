import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class WebTopResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为WebTop
    this.RESULTLISTType = WebTop
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data
  }
}

class WebTop {
  /**
   * 获取logo图片地址
   * @return {*}
   */
  get getLogoUrl() {
    return this.logoUrl;
  }

  /**
   * 获取导航个数
   * @return {*}
   */
  get getNavCount() {
    return this.navCount;
  }

  /**
   * 获取联系电话
   * @return {*}
   */
  get getPhone() {
    return this.phone;
  }

  /**
   * 获取网站名称
   * @return {*}
   */
  get getWebName() {
    return this.webName;
  }

  /**
   * 获取ID
   * @return {*}
   */
  get getWebTopId() {
    return this.webTopId;
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


export default WebTopResponseVO
