import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class WebModuleTreeResponseVO extends BaseResponseVO {
  /**
   * 获取列表信息
   * @return {*}
   */
  get resultList() {
    return this.data;
  }

  /**
   * 获取导航信息
   * @return {*}
   */
  get getNavigationDtoList() {
    return this.data.navigationDtoList;
  }

  /**
   * 获取页尾信息
   * @return {*}
   */
  get getWebBottom() {
    return this.data.webBottom;
  }

  /**
   * 获取网站信息
   * @return {webInfo|{lastModified}}
   */
  get getWebInfo() {
    return this.data.webInfo;
  }

  /**
   * 获取页头信息
   * @return {*}
   */
  get getWebTop() {
    return this.data.webTop;
  }
}

export default WebModuleTreeResponseVO
