import BaseResponseVO from '@/commonjs/model/BaseResponseVO'

/**
 * 用户列表信息协议返回包
 * mengyu 2018-06-10 Version:F1.0.0.0
 */
class UserListResponseVO extends BaseResponseVO {
  constructor () {
    super()
    // 设置resultListType对应的类型为LogonInfo
    this.RESULTLISTType = LogonInfo
  }
  /**
   * 获取用户代码
   * @returns {*}
   */
  get userNO () {
    return this.RETURNRESULT.U
  }

  /**
   * 当前页码
   * @returns {*}
   */
  get pageNumber () {
    return this.RETURNRESULT.PN
  }

  /**
   * 每页条数
   * @returns {*}
   */
  get pageSize () {
    return this.RETURNRESULT.PS
  }

  /**
   * 列表集合
   * @returns {*}
   */
  get resultList () {
    return this.RESULTLIST
  }
}
class LogonInfo {
  /**
   * 获取IP地址
   * @returns {*}
   */
  get logonIP () {
    return this.IP
  }

  /**
   * 设置IP地址
   * @returns {*}
   */
  set logonIP (logonIP) {
    this.IP = logonIP
  }
  /**
   * 获取登录类型
   * @returns {*}
   */
  get logonType () {
    return this.LT.toString()
  }
  /**
   * 获取登录结果
   * @returns {*}
   */
  get result () {
    return this.R.toString()
  }
  /**
   * 获取登录时间
   * @returns {*}
   */
  get createTime () {
    return this.CT
  }
  /**
   * 获取编号
   * @returns {*}
   */
  get logonID () {
    return this.ID
  }
}
export default UserListResponseVO
