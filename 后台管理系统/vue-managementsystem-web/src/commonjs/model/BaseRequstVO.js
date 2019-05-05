import { getUserID, getSessionID } from '@/store/sessionstorage/index.js'

/**
 * 请求包父类
 * mengyu 2018-06-08 version:V1.0.0.0
 *  存储针对用户信息、协议名等
 */
class BaseRequstVO {
  constructor (protocolName) {
    this.U = getUserID()
    this.SI = getSessionID()
    this.PTN = protocolName
  }

  toString () {
    return JSON.stringify(this)
  }
}

export default BaseRequstVO
