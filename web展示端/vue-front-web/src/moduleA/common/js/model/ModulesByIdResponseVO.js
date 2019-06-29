import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class ModulesByIdResponseVO extends BaseResponseVO {
  /**
   * 获取对象
   * @param
   */
  get getData() {
    return this.data;
  }
}

export default ModulesByIdResponseVO
