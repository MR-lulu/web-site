import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class CommonInfoResponseVO extends BaseResponseVO{
  constructor() {
    super()
    // 设置resultListType对应的类型为CommonInfo
    this.RESULTLISTType = CommonInfo;
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data;
  }
}

class CommonInfo {
  /**
   * 获取ID
   * @return {*}
   */
  get getCommonInfoId() {
    return this.commonInfoId;
  }

  /**
   * 获取背景图片地址
   * @return {*}
   */
  get getBgUrl() {
    return this.bgUrl;
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

export default CommonInfoResponseVO
