import WebTopResponseVO from '@/moduleA/common/js/model/WebTopResponseVO.js'
import WebButtomResponseVO from '@/moduleA/common/js/model/WebButtomResponseVO.js'
import RegistersInfoResponseVO from '@/moduleA/common/js/model/RegistersInfoResponseVO.js'
import LeaveMsgResponseVO from '@/moduleA/common/js/model/LeaveMsgResponseVO.js'
import RegistersInfoDeleteListResponseVO from "../moduleA/common/js/model/RegistersInfoDeleteListResponseVO";
import LeaveMsgDeleteListResponseVO from "../moduleA/common/js/model/LeaveMsgDeleteListResponseVO";



/**
 * 协议内容
 * @type
 */
export const ModuleAProtocolContent = {
  webtop: 'webtop',
  webbuttom: 'webbuttom',
  registersInfo: 'registersInfo',
  registersInfoDelete: 'registersInfoDelete',
  leaveMsg: 'leaveMsg',
  leaveMsgDelete: 'leaveMsgDelete',

}
/**
 * 模块A协议配置协议名称以及返回包对象
 * @type
 */
export const ModuleAProtocolConfig = {
  'webtop': {name: 'webtop', responseVO: new WebTopResponseVO()},  // 获取页头
  'webbuttom': {name: 'webbuttom', responseVO: new WebButtomResponseVO()},  // 获取页尾
  'registersInfo': {name: 'registersInfo', responseVO: new RegistersInfoResponseVO()},  // 获取用户登记信息
  'registersInfoDelete': {name: 'registersInfoDelete', responseVO: new RegistersInfoDeleteListResponseVO()},  // 删除用户留言信息
  'leaveMsg': {name: 'leaveMsg', responseVO: new LeaveMsgResponseVO()},  // 获取用户留言信息
  'leaveMsgDelete': {name: 'leaveMsgDelete', responseVO: new LeaveMsgDeleteListResponseVO()},  // 删除用户留言信息
}
