import {getToken} from '@/store/sessionstorage/index.js'

/**
 * 请求包父类
 * lyl 2018-06-08 version:V1.0.0.0
 *  存储针对用户信息、协议名等
 */
class BaseRequstVO {
  constructor(ptn) {
    /**
     * token
     */
    this.token = getToken();
    /**
     * 协议名
     */
    this.ptn = ptn
  }

  toString () {
    return JSON.stringify(this)
  }
}

export default BaseRequstVO
