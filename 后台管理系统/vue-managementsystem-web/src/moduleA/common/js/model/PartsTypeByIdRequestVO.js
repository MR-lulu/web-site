import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class PartsTypeByIdRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setId(value) {
    this.id = value;
  }
}

export default PartsTypeByIdRequestVO
