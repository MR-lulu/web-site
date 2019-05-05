/**
 * 翻译工具
 * mengyu 2018-06-08 version:V1.0.0.0
 * 传入消息码，args参数获取消息内容（支持国际化）
 */
import Vue from 'vue'
import util from 'util'

/**
 * 根据消息代码翻译
 * @param messageID 消息代码
 * @param args  占位符对应的变量数组
 * @returns {*} 翻译后结果
 */
export function translate (messageID, args) {
  var message = Vue.prototype.i18n.t(`${messageID}`)
  return getReturnMsgByArgs(message, args)
}

/**
 * 获取返回码内容
 * @param returnMsg 返回码内容
 * @param args 参数信息
 * @returns {*} 返回码内容
 */
function getReturnMsgByArgs (returnMsg, args) {
  if (args && args.length > 0) {
    for (let index of args.keys()) {
      returnMsg = util.format(returnMsg, args[index])
    }
  }
  return returnMsg
}
