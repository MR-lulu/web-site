import UserListResponseVO from '@/moduleA/common/js/model/UserListResponseVO.js'
import UserUpdateResponseVO from '@/moduleA/common/js/model/UserUpdateResponseVO.js'
import UserDelResponseVO from '@/moduleA/common/js/model/UserDelResponseVO.js'
import UserAddResponseVO from '@/moduleA/common/js/model/UserAddResponseVO.js'

/**
 * 协议内容
 * @type
 */
export const ModuleAProtocolContent = {
  list: 'P101901',
  add: 'P101902',
  update: 'P101903',
  delete: 'P101904'
}
/**
 * 模块A协议配置协议名称以及返回包对象
 * @type
 */
export const ModuleAProtocolConfig = {
  'P101901': {name: 'list', responseVO: new UserListResponseVO()}, // 列表查询
  'P101902': {name: 'add', responseVO: new UserAddResponseVO()}, // 列表添加
  'P101903': {name: 'update', responseVO: new UserUpdateResponseVO()}, // 列表修改
  'P101904': {name: 'delete', responseVO: new UserDelResponseVO()} // 列表删除
}
