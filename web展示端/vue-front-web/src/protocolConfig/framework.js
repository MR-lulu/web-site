import LoginResponseVO from '@/framework/common/js/model/LoginResponseVO.js'

/**
 * 协议内容
 * @type
 */
export const FrameWorkProtocolContent = {
  logon: 'login',
}
/**
 * 框架协议配置协议名称以及返回包对象
 * @type
 */
export const FrameWorkProtocolConfig = {
  'login': {name: 'login', responseVO: new LoginResponseVO()}, // 用户登录
}
