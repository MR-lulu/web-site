import LogonResponseVO from '@/framework/common/js/model/LogonResponseVO.js'
import RegisterResponseVO from '@/framework/common/js/model/RegisterResponseVO.js'

/**
 * 协议内容
 * @type
 */
export const FrameWorkProtocolContent = {
  logon: 'P102101',
  register: 'P101202'
}
/**
 * 框架协议配置协议名称以及返回包对象
 * @type
 */
export const FrameWorkProtocolConfig = {
  'P102101': {name: 'logon', responseVO: new LogonResponseVO()}, // 用户登录
  'P101202': {name: 'Register', responseVO: new RegisterResponseVO()} // 用户注册
}
