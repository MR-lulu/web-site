/**
 * 返回包父类
 * lyl 2018-06-08 version:V1.0.0.0
 * 封装获取协议名称、返回码、返回信息、占位符数组等方法
 */
class BaseResponseVO {
  /**
   * 获取协议名称
   * @returns {*}
   */
  get ptn() {
    return this.ptn;
  }

  /**
   * 获取返回消息
   * @return {*}
   */
  get msg() {
    return this.msg;
  }

  /**
   * 获取返回状态
   * @return {*}
   */
  get status() {
    return this.status;
  }

  /**
   * 获取返回消息ID
   * @return {*}
   */
  get msgId() {
    return this.msgId;
  }
}

export default BaseResponseVO
