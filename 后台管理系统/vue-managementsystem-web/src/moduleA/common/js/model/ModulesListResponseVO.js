import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class ModulesListResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为Module
    this.RESULTLISTType = Module;
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data;
  }
}

class Module {
  /**
   * 获取ID
   * @return {*}
   */
  get getModulesId() {
    return this.modulesId;
  }

  /**
   * 获取name
   */
  get getName() {
    return this.name;
  }

  /**
   * 获取导航id
   * @return {*}
   */
  get getNavigationId() {
    return this.navigationId;
  }

  /**
   * 获取零件种类id
   * @return {*}
   */
  get getPartsTypeId() {
    return this.partsTypeId;
  }

  /**
   * 获取序号
   * @return {*}
   */
  get getPriority() {
    return this.priority;
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


export default ModulesListResponseVO
