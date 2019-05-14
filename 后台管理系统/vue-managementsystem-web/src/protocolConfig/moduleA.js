import WebTopResponseVO from '@/moduleA/common/js/model/WebTopResponseVO.js'
import WebButtomResponseVO from '@/moduleA/common/js/model/WebButtomResponseVO.js'

/**
 * 协议内容
 * @type
 */
export const ModuleAProtocolContent = {
  webtop: 'webtop',
  webbuttom: 'webbuttom',
}
/**
 * 模块A协议配置协议名称以及返回包对象
 * @type
 */
export const ModuleAProtocolConfig = {
  'webtop': {name: 'webtop', responseVO: new WebTopResponseVO()},  // 获取页头
  'webbuttom': {name: 'webbuttom', responseVO: new WebButtomResponseVO()},  // 获取页尾
}
