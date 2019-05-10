// 定义用户代码存储key值
const userIDItem = 'userIDItem'
// 定义sessionID的存储key值
const sessionIDItem = 'sessionIDItem'
// 定义token的存储key值
const tokenItem = 'tokenItem'

/**
 * 存储用户代码
 * @param value 用户代码
 */
export function setUserID (value) {
  window.sessionStorage.setItem(userIDItem, value)
}

/**
 * 获取用户代码
 * @returns string | null
 */
export function getUserID () {
  return window.sessionStorage.getItem(userIDItem)
}

/**
 * 存储sessionID
 * @param value sessionID
 */
export function setSessionID (value) {
  window.sessionStorage.setItem(sessionIDItem, value)
}

/**
 * 获取sessionID
 * @returns string | null
 */
export function getSessionID () {
  return window.sessionStorage.getItem(sessionIDItem)
}

/**
 * 存储token
 * @param value token
 */
export function setToken(value) {
  window.sessionStorage.setItem(tokenItem, value)
}

/**
 * 获取token
 * @returns string | null
 */
export function getToken() {
  return window.sessionStorage.getItem(tokenItem)
}
