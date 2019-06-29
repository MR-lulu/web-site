import BaseRequstVO from '@/commonjs/model/BaseRequstVO'

class PartsDeleteRequestVO extends BaseRequstVO {
  /**
   * 设置ID
   * @param value
   */
  set setId(value) {
    this.id = value;
  }
}

export default PartsDeleteRequestVO
