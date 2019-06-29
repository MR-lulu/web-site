import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class PartAddOrModifyRequestVO extends BaseRequstVO {
  /**
   * 设置点击量
   * @param value
   */
  set setClick(value) {
    this.click = value;
  }

  /**
   * 设置超链接
   * @param value
   */
  set setHyperlinks(value) {
    this.hyperlinks = value;
  }

  /**
   * 设置图片链接
   * @param value
   */
  set setImageUrl(value) {
    this.imageUrl = value;
  }

  /**
   * 设置所属模块ID
   * @param value
   */
  set setModulesId(value) {
    this.modulesId = value;
  }

  /**
   * 设置名称
   * @param value
   */
  set setName(value) {
    this.name = value;
  }

  /**
   * 设置其它
   * @param value
   */
  set setOther(value) {
    this.other = value;
  }

  /**
   * 设置ID
   * @param value
   */
  set setPartsId(value) {
    this.partsId = value;
  }

  /**
   * 设置零件种类ID
   * @param value
   */
  set setPartsTypeId(value) {
    this.partsTypeId = value;
  }

  /**
   * 设置优先级
   * @param value
   */
  set setPriority(value) {
    this.priority = value;
  }

  /**
   * 设置标题
   * @param value
   */
  set setTitle(value) {
    this.title = value;
  }

  /**
   * 设置文本信息
   * @param value
   */
  set setTxt(value) {
    this.txt = value;
  }

  /**
   * 设置资源1
   * @param value
   */
  set setResource1(value) {
    this.resource1 = value;
  }

  /**
   * 设置资源2
   * @param value
   */
  set setResource2(value) {
    this.resource2 = value;
  }

  /**
   * 设置资源3
   * @param value
   */
  set setResource3(value) {
    this.resource3 = value;
  }

  /**
   * 设置资源4
   * @param value
   */
  set setResource4(value) {
    this.resource4 = value;
  }

  /**
   * 设置资源5
   * @param value
   */
  set setResource5(value) {
    this.resource5 = value;
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

export default PartAddOrModifyRequestVO
