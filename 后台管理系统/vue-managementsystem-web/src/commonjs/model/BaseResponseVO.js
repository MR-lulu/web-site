import { translate } from '../util/translateUtil'

/**
 * 返回包父类
 * mengyu 2018-06-08 version:V1.0.0.0
 * 封装获取协议名称、返回码、返回信息、占位符数组等方法
 */
class BaseResponseVO {
  /**
   * 获取协议名称
   * @returns {*}
   */
  get protocolName () {
    return this.PTN
  }

  /**
   * 获取业务返回码
   * @returns {*}
   */
  get result () {
    return this.RETURNRESULT.RESULT
  }

  /**
   * 获取信息返回码
   * @returns {*}
   */
  get returnCode () {
    return this.RETURNRESULT.RETCODE
  }

  /**
   * 获取信息返回字符串的占位符数组
   * @returns {*} 获取信息返回字符串的占位符数组
   */
  get args () {
    // 服务端返回的args是以|分割的字符串
    let argsStr = this.RETURNRESULT.ARGS
    let args = null
    if (!argsStr) {
      args = argsStr.split('|')
    }
    return args
  }

  /**
   * 获取返回的信息内容
   * @returns {*}
   */
  get returnMessage () {
    return translate(this.returnCode, this.args)
  }
}

export default BaseResponseVO
