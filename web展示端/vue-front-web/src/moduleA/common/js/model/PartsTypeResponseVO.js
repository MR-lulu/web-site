import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class PartsTypeResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为PartsType
    this.RESULTLISTType = PartsType;
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

class PartsType {
  /**
   * 获取ID
   * @return {*}
   */
  get getPartsTypeId() {
    return this.partsTypeId;
  }

  /**
   * 获取零件名
   * @return {*}
   */
  get getName() {
    return this.name;
  }

  /**
   * 获取零件资源
   * @return {*}
   */
  get getResource() {
    return this.resource;
  }

  /**
   * 获取零件可见状态
   * @return {*}
   */
  get getWatch() {
    return this.watch;
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

export default PartsTypeResponseVO
