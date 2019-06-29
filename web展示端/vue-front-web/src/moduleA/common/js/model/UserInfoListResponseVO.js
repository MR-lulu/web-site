import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

class UserInfoListResponseVO extends BaseResponseVO {
  constructor() {
    super()
    // 设置resultListType对应的类型为Parts
    this.RESULTLISTType = UserInfo;
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList() {
    return this.data.list;
  }

  /**
   * 获取页数
   */
  get getPage() {
    return this.data.page;
  }

  /**
   * 获取每页条数
   * @return {*}
   */
  get getRows() {
    return this.data.rows;
  }

  /**
   * 获取总的条数
   * @return {*}
   */
  get getTotal() {
    return this.data.total;
  }
}

class UserInfo {
  /**
   * 获取用户ID
   * @return {*}
   */
  get getUserId() {
    return this.userId;
  }

  /**
   * 获取用户名
   * @return {*}
   */
  get getUserName() {
    return this.username;
  }

  /**
   * 获取电话
   * @return {*}
   */
  get getPhone() {
    return this.phone;
  }

  /**
   * 获取邮箱
   * @return {*}
   */
  get getMail() {
    return this.mail;
  }

  /**
   * 获取等级
   * @return {*}
   */
  get getLevel() {
    return this.level;
  }

  /**
   * 获取状态
   * @return {*}
   */
  get getStatus() {
    return this.status;
  }

  /**
   * 获取备注
   * @return {*}
   */
  get getRemarks() {
    return this.remarks;
  }

  /**
   * 获取创建时间
   * @return {*}
   */
  get getServerCreateTime() {
    return this.serverCreateTime;
  }

  /**
   * 获取修改时间
   * @return {*}
   */
  get getServerUpdateTime() {
    return this.serverUpdateTime;
  }

  /**
   * 获取扩展字段1
   * @return {*}
   */
  get getExtra1() {
    return this.extra1;
  }

  /**
   * 获取扩展字段2
   * @return {*}
   */
  get getExtra2() {
    return this.extra2;
  }
}

export default UserInfoListResponseVO
