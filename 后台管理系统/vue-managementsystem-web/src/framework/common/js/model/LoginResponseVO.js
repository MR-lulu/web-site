import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 登录协议返回包
 * lyl 2018-06-10 Version:F1.0.0.0
 */
class LoginResponseVO extends BaseResponseVO {
  /**
   * 获取用户ID
   * @return {*}
   */
  get userId() {
    return this.data.user.userId;
  }

  /**
   *获取用户名
   * @return {*}
   */
  get username() {
    return this.data.user.username;
  }

  /**
   * 获取用户密码
   * @return {*}
   */
  get password() {
    return this.data.user.password;
  }

  /**
   * 获取手机号
   * @return {*}
   */
  get phone() {
    return this.data.user.phone;
  }

  /**
   * 获取邮箱
   * @return {*}
   */
  get mail() {
    return this.data.user.mail;
  }

  /**
   * 获取用户等级
   * @return {*}
   */
  get level() {
    return this.data.user.level;
  }

  /**
   * 获取用户状态
   * @return {*}
   */
  get status() {
    return this.data.user.status;
  }

  /**
   * 获取创建时间
   * @return {*}
   */
  get serverCreateTime() {
    return this.data.user.serverCreateTime;
  }

  /**
   * 获取修改时间
   * @return {*}
   */
  get serverUpdateTime() {
    return this.data.user.serverUpdateTime;
  }

  /**
   * 获取备注
   * @return {*}
   */
  get remarks() {
    return this.data.user.remarks;
  }

  /**
   * 获取扩展字段1
   * @return {*}
   */
  get extra1() {
    return this.data.user.extra1;
  }

  /**
   * 获取扩展字段2
   * @return {*}
   */
  get extra2() {
    return this.data.user.extra2;
  }

  /**
   * 获取token
   * @return {*|token|CancelToken}
   */
  get token() {
    return this.data.token;
  }
}
export default LoginResponseVO
