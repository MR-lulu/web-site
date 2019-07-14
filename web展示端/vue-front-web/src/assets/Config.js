/**
 * 配置信息
 */
class Config {
}

/**
 * pc 端地址（正式环境）
 * @type {string}
 */
Config.pcUrl = 'http://114.115.167.76:8080/vue-front-web/index.html#/index';
// 本地调试使用地址
// Config.pcUrl = 'http://localhost:8080/#/index';

/**
 * 手机端地址（正式环境）
 * @type {string}
 */
Config.mobileUrl = 'http://114.115.167.76:8080/vue-front-web/m_index.html#/m_index';
// 本地调试使用地址
// Config.pcUrl = 'http://localhost:8080/m_index.html#/m_index';

/**
 * 定时器，定时查询新消息，暂定1分钟查询一次
 * @type {number}
 */
Config.Timer = 60 * 1000;

/**
 * 网站标题
 * @type {string}
 */
Config.webTitle = '商品展示'

/**
 * 上传图片大小不能超过2M
 * @type {number}
 */
Config.uploadImgSize = 2

/**
 * 图片上传地址
 * @type {string}
 */
Config.uploadImgUrl = 'http://114.115.167.76:8085/mall/file/upload'

/**
 * 服务器地址
 * @type {string}
 */
Config.enterURL = 'http://114.115.167.76:8085/mall'
/**
 * 浏览器语言与本地语言对应关系Map key：浏览器语言 value：本地语言
 * @type {Map<any, any>}
 */
Config.browserLangTOLang = new Map([
  ['zh-CN', 'zh-CN'],
  ['EN', 'en-US']
])

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

Config.initCinfig = {
  "eu": [
    "http://114.115.167.76:8085/mall",
    "http://114.115.167.76:8085/mall"
  ],
  "hqurl": [
    "http://114.115.167.76:8085/mall"
  ],
  "ss": "1",
  "mu": "http://114.115.167.76:8085/mall",
  "tz": {
    "tz": "Asia/Shanghai",
    "s": "GMT+08:00"
  },
  "lt": [
    {
      "id": "1",
      "n": "English",
      "t": "en-US",
      "zf": "en-us",
      "lc": "L10000"
    },
    {
      "id": "2",
      "n": "简体中文",
      "t": "zh-CN",
      "zf": "zh-cn",
      "lc": "L10001"
    }
  ],
  "cv": "20180605001",
  "rv": "20180605001"
}


export default Config
