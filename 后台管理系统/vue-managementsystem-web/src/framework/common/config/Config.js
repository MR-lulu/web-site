/**
 * 配置信息
 */
class Config {
}

/**
 * 系统初始化入口地址
 * @type {string}
 */
Config.enterURL = 'http://114.115.167.76:8080/vue-frontend/'
/**
 * 浏览器语言与本地语言对应关系Map key：浏览器语言 value：本地语言
 * @type {Map<any, any>}
 */
Config.browserLangTOLang = new Map([
  ['zh-CN', 'zh-CN'],
  ['EN', 'en-US']
])

/**
 * 系统启动入口文件名称
 * @type {string}
 */
Config.enterFileName = 'index.json'

/**
 * 系统需要的公用信息文件名称
 * @type {string}
 */
Config.commonFileName = 'common.json'

/**
 * 系统需要的枚举文件名称
 * @type {string}
 */
Config.enumFileName = 'enum.json'

/**
 * 服务端返回码文件名称
 * @type {string}
 */
Config.returnCodeFileName = 'returnCode.json'

/**
 * 资源文件版本号
 * @type {number}
 */
Config.resourceVer = 2

/**
 * 主题风格对应关系Map key：主题风格 value：描述
 * @type {Map}
 */
Config.theme = {
  'default': 'rs.framework.80100000014',
  'blue': 'rs.framework.80100000015'
}

export default Config
