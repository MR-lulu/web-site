import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class ModulesByIdRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setId(value) {
    this.id = value;
  }
}

export default ModulesByIdRequestVO
