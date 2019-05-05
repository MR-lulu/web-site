import { translate } from './translateUtil'
import { MessageBox } from 'element-ui'

/**
 * 翻译支持国际化的弹出框封装类
 * mengyu 2018-06-06 version:V1.0.0.0
 * 通过传入json中的key值，经过国际化转换成需要的语言，调用弹出框弹出
 */
class MessageBoxTranslate {
  /**
   * 声明构造
   * @param i18n 国际化对象
   */
  constructor (i18n) {
    this.i18n = i18n
  }

  /**
   * 弹出确认框
   * @param messageID 信息编号
   * @param title 标题
   * @param args 占位符对应的变量数组
   * @param callbackFunc 回调方法
   * @param buttonText 确认按钮文字
   */
  alert (messageID, title, args, callbackFunc, buttonText) {
    let message = translate(messageID, args)
    MessageBox.alert(message, title, {
      confirmButtonText: buttonText,
      callback: callbackFunc
    })
  }

  /**
   * 弹出对话框
   * @param messageID 信息编号
   * @param title 标题
   * @param args 占位符对应的变量数组
   * @param confirmCallback 确认按钮回调方法
   * @param cancelCallback 取消按钮回调方法
   * @param confirmButtonText 确认按钮的文字
   * @param cancelButtonText 取消按钮的文字
   */
  confirm (messageID, title, args, confirmCallback, cancelCallback, confirmButtonText, cancelButtonText) {
    let message = translate(messageID, args)
    MessageBox.confirm(message, title, {
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText
    }).then(confirmCallback)
      .catch(cancelCallback)
  }

  /**
   * 弹出警告提示框
   * @param messageID 信息编号
   * @param title 标题
   * @param args 占位符对应的变量数组
   * @param callbackFunc 回调方法
   * @param buttonText 确认按钮文字
   */
  warning (messageID, title, args, callbackFunc, buttonText) {
    let message = translate(messageID, args)
    MessageBox.alert(message, title, {
      confirmButtonText: buttonText,
      type: 'warning',
      callback: callbackFunc
    }
    )
  }

  /**
   * 弹出错误提示框
   * @param messageID 信息编号
   * @param title 标题
   * @param args 占位符对应的变量数组
   * @param callbackFunc 回调方法
   * @param buttonText 确认按钮文字
   */
  error (messageID, title, args, callbackFunc, buttonText) {
    let message = translate(messageID, args)
    MessageBox.alert(message, title, {
      confirmButtonText: buttonText,
      type: 'error',
      callback: callbackFunc
    }
    )
  }

  /**
   * 弹出成功提示框
   * @param messageID 信息编号
   * @param title 标题
   * @param args 占位符对应的变量数组
   * @param callbackFunc 回调方法
   * @param buttonText 确认按钮文字
   */
  success (messageID, title, args, callbackFunc, buttonText) {
    let message = translate(messageID, args)
    MessageBox.alert(message, title, {
      confirmButtonText: buttonText,
      type: 'success',
      callback: callbackFunc
    }
    )
  }
}

export default MessageBoxTranslate
