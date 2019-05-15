import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class PartsResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为Parts
    this.RESULTLISTType = Parts
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data
  }
}

class Parts {
  /**
   * 获取点击量
   * @return {*}
   */
  get getClick() {
    return this.click;
  }

  /**
   * 获取超链接
   */
  get getHyperlinks() {
    return this.hyperlinks;
  }

  /**
   * 获取图片链接
   * @return {*}
   */
  get getImageUrl() {
    return this.imageUrl;
  }

  /**
   * 获取所属模块ID
   * @return {*}
   */
  get getModulesId() {
    return this.modulesId;
  }

  /**
   * 获取名称
   * @return {*}
   */
  get getName() {
    return this.name;
  }

  /**
   * 获取其它
   * @return {*}
   */
  get getOther() {
    return this.other;
  }

  /**
   * 获取ID
   * @return {*}
   */
  get getPartsId() {
    return this.partsId;
  }

  /**
   * 获取零件种类ID
   * @return {*}
   */
  get getPartsTypeId() {
    return this.partsTypeId;
  }

  /**
   * 获取优先级
   * @return {*}
   */
  get getPriority() {
    return this.priority;
  }

  /**
   * 获取标题
   * @return {*}
   */
  get getTitle() {
    return this.title;
  }

  /**
   * 获取文本信息
   * @return {*}
   */
  get getTxt() {
    return this.txt;
  }

  /**
   * 获取资源1
   * @return {*}
   */
  get getResource1() {
    return this.resource1;
  }

  /**
   * 获取资源2
   * @return {*}
   */
  get getResource2() {
    return this.resource2;
  }

  /**
   * 获取资源3
   * @return {*}
   */
  get getResource3() {
    return this.resource3;
  }

  /**
   * 获取资源4
   * @return {*}
   */
  get getResource4() {
    return this.resource4;
  }

  /**
   * 获取资源5
   * @return {*}
   */
  get getResource5() {
    return this.resource5;
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

export default PartsResponseVO
