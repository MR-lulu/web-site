import WebTopResponseVO from '@/moduleA/common/js/model/WebTopResponseVO.js'
import WebButtomResponseVO from '@/moduleA/common/js/model/WebButtomResponseVO.js'
import RegistersInfoResponseVO from '@/moduleA/common/js/model/RegistersInfoResponseVO.js'
import LeaveMsgResponseVO from '@/moduleA/common/js/model/LeaveMsgResponseVO.js'
import RegistersInfoDeleteListResponseVO from "../moduleA/common/js/model/RegistersInfoDeleteListResponseVO";
import LeaveMsgDeleteListResponseVO from "../moduleA/common/js/model/LeaveMsgDeleteListResponseVO";
import UpdateUserInfoResponseVO from "../moduleA/common/js/model/UpdateUserInfoResponseVO";
import UserInfoResponseVO from "../moduleA/common/js/model/UserInfoResponseVO";
import UserInfoListResponseVO from "../moduleA/common/js/model/UserInfoListResponseVO";
import ResetUserPasswordResponseVO from "../moduleA/common/js/model/ResetUserPasswordResponseVO";
import PartsTypeResponseVO from "../moduleA/common/js/model/PartsTypeResponseVO";
import NavigationAddOrModifyResponseVO from "../moduleA/common/js/model/NavigationAddOrModifyResponseVO";
import NavigationDeleteResponseVO from "../moduleA/common/js/model/NavigationDeleteResponseVO";
import PartsTypeListResponseVO from "../moduleA/common/js/model/PartsTypeListResponseVO";
import ModuleAddOrModifyResponseVO from "../moduleA/common/js/model/ModuleAddOrModifyResponseVO";
import PartsTypeByIdResponseVO from "../moduleA/common/js/model/PartsTypeByIdResponseVO";
import ModuleDeleteResponseVO from "../moduleA/common/js/model/ModuleDeleteResponseVO";
import PartAddOrModifyResponseVO from "../moduleA/common/js/model/PartAddOrModifyResponseVO";
import PartsDeleteResponseVO from "../moduleA/common/js/model/PartsDeleteResponseVO";
import WebTopAddOrModifyResponseVO from "../moduleA/common/js/model/WebTopAddOrModifyResponseVO";
import WebBottomAddOrModifyResponseVO from "../moduleA/common/js/model/WebBottomAddOrModifyResponseVO";
import WebSiteInfoAddOrModifyResponseVO from "../moduleA/common/js/model/WebSiteInfoAddOrModifyResponseVO";
import BackgroundimgAddOrModifyResponseVO from "../moduleA/common/js/model/BackgroundimgAddOrModifyResponseVO";
import WebModuleTreeResponseVO from "../moduleA/common/js/model/WebModuleTreeResponseVO";
import ModulesByIdResponseVO from "../moduleA/common/js/model/ModulesByIdResponseVO";
import CommonInfoResponseVO from "../moduleA/common/js/model/CommonInfoResponseVO";


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
  updateUserInfo: 'updateUserInfo',
  userInfo: 'userInfo',
  userInfoList: 'userInfoList',
  resetUserPassword: 'resetUserPassword',
  partsType: 'partsType',
  navigationAddOrModify: 'navigationAddOrModify',
  navigationDelete: 'navigationDelete',
  partsTypeList: 'partsTypeList',
  moduleAddOrModify: 'moduleAddOrModify',
  partsTypeById: 'partsTypeById',
  moduleDelete: 'moduleDelete',
  partAddOrModify: 'partAddOrModify',
  partsDelete: 'partsDelete',
  webTopAddOrModify: 'webTopAddOrModify',
  webBottomAddOrModify: 'webBottomAddOrModify',
  webSiteInfoAddOrModify: 'webSiteInfoAddOrModify',
  backgroundimgAddOrModify: 'backgroundimgAddOrModify',
  webModuleTree: 'webModuleTree',
  modulesById: 'modulesById',
  commonInfo: 'commonInfo',

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
  'updateUserInfo': {name: 'updateUserInfo', responseVO: new UpdateUserInfoResponseVO()},  // 修改用户信息
  'userInfo': {name: 'userInfo', responseVO: new UserInfoResponseVO()},  // 获取用户信息
  'userInfoList': {name: 'userInfoList', responseVO: new UserInfoListResponseVO()},  // 批量获取用户信息
  'resetUserPassword': {name: 'resetUserPassword', responseVO: new ResetUserPasswordResponseVO()},  // 批量重置用户密码
  'partsType': {name: 'partsType', responseVO: new PartsTypeResponseVO()},  // 获取零件种类信息
  'navigationAddOrModify': {name: 'navigationAddOrModify', responseVO: new NavigationAddOrModifyResponseVO()},  // 添加或修改导航
  'navigationDelete': {name: 'navigationDelete', responseVO: new NavigationDeleteResponseVO()},  // 删除导航
  'partsTypeList': {name: 'partsTypeList', responseVO: new PartsTypeListResponseVO()},  // 获取零件种类列表
  'moduleAddOrModify': {name: 'moduleAddOrModify', responseVO: new ModuleAddOrModifyResponseVO()},  // 添加或修改模块
  'partsTypeById': {name: 'partsTypeById', responseVO: new PartsTypeByIdResponseVO()},  // 根据ID获取零件种类
  'moduleDelete': {name: 'moduleDelete', responseVO: new ModuleDeleteResponseVO()},  // 删除模块
  'partAddOrModify': {name: 'partAddOrModify', responseVO: new PartAddOrModifyResponseVO()},  // 添加或修改零件
  'partsDelete': {name: 'partsDelete', responseVO: new PartsDeleteResponseVO()},  // 删除零件
  'webTopAddOrModify': {name: 'webTopAddOrModify', responseVO: new WebTopAddOrModifyResponseVO()},  // 添加或修改页头
  'webBottomAddOrModify': {name: 'webBottomAddOrModify', responseVO: new WebBottomAddOrModifyResponseVO()},  // 添加或修改页尾
  'webSiteInfoAddOrModify': {name: 'webSiteInfoAddOrModify', responseVO: new WebSiteInfoAddOrModifyResponseVO()},  // 添加或修改网站信息
  'backgroundimgAddOrModify': {name: 'backgroundimgAddOrModify', responseVO: new BackgroundimgAddOrModifyResponseVO()},  // 添加或修改网站背景图片
  'webModuleTree': {name: 'webModuleTree', responseVO: new WebModuleTreeResponseVO()},  // 获取网站组件
  'modulesById': {name: 'modulesById', responseVO: new ModulesByIdResponseVO()},  // 获取模块
  'commonInfo': {name: 'commonInfo', responseVO: new CommonInfoResponseVO()},  // 获取公共信息

}
