import {ProtocolConfig} from '@/protocolConfig/protocolConfig.js'
import ReflectAssignFromJson from '@/commonjs/util/ReflectAssignFromJson'
import axios from 'axios'

/**
 * 前置机通讯封装
 */
class HttpCommunicate {
  /**
   * 通讯类构造函数
   * @param url  通讯地址
   * @param timeout 超时时间 单位毫秒(0 表示无超时时间)
   */
  constructor (url, timeout) {
    if (!url) {
      throw new Error('传入的参数不正确，地址不允许为空')
    }
    this.axiosObject = axios.create({
      baseURL: url,
      timeout: timeout,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }

  /**
   * 通过请求包获取返回包
   * @param requestVO 请求包
   * @returns {Promise<responseVO>}
   */
  async getResponseVO (requestVO) {
    // 如果请求包为null则弹出错误信息
    if (!requestVO) {
      throw new Error('传入的参数不正确，请求包不允许为空')
    }

    // 通过配置信息获取请求包协议对应的返回包
    let responseVO = ProtocolConfig[requestVO.PTN].responseVO
    // 如果返回包为空则弹出错误信息
    if (!responseVO) {
      throw new Error('通过请求包协议没有找到相应的返回包')
    }

    try {
      // 调用服务端获取数据
      let response = await this.axiosObject.post('', requestVO.toString())
      // 将获取的数据通过反射的方式给返回包赋值
      ReflectAssignFromJson.assign(responseVO, response.data)
      // 判断返回包和请求包协议是否一致
      if (responseVO.protocolName !== requestVO.PTN) {
        throw new Error('服务端返回的协议内容与请求包不一致')
      }
    } catch (e) {
      throw new Error(`获取返回包失败,失败原因:${e}`)
    }
    return responseVO
  }

  /**
   * 通过文件名获取服务器Json文件
   * @param filename 文件名称
   * @returns {Promise<*>} Json对象
   */
  async getJson (filename) {
    if (!filename) {
      throw new Error('传入的参数不正确，文件名称不允许为空')
    }

    let json = null
    try {
      // 调用服务端获取数据
      let response = await this.axiosObject.get(filename)
      json = response.data
    } catch (e) {
      console.log(`获取${filename}文件失败，失败原因${e}`)
      // TODO 需要修改为使用封装的弹出框弹出提示信息
      alert('请求异常（错误码XXXXXXXXX3），请联系客服人员')
    }
    return json
  }

  /**
   * 通过文件名获取服务器Json文件并将json文件内容转换为目标对象返回
   * @param filename 文件名称
   *  @param clazz 目标对象类
   * @returns {Promise<*>} 目标对象
   */
  async getObject (filename, clazz) {
    if (!filename) {
      throw new Error('传入的参数不正确，文件名称不允许为空')
    }

    if (!clazz) {
      throw new Error('传入的参数不正确，目标对象类不允许为空')
    }

    let obj = null

    let json = await this.getJson(filename)
    if (json) {
      // 获取传入类的实例化对象
      obj = Reflect.construct(clazz, [])
      if (obj) {
        // 通过反射给对象赋值
        ReflectAssignFromJson.assign(obj, json)
      }
    }
    return obj
  }

  /**
   *  将json内容转换为目标对象返回
   *  @param filename 文件名称
   *  @param clazz 目标对象类
   *  @returns {Promise<*>} 目标对象
   */
  getJsonObject(json, clazz) {
    if (!json) {
      throw new Error('传入的参数不正确，json不允许为空')
    }

    if (!clazz) {
      throw new Error('传入的参数不正确，目标对象类不允许为空')
    }
    let obj = null
    if (json) {
      // 获取传入类的实例化对象
      obj = Reflect.construct(clazz, [])
      if (obj) {
        // 通过反射给对象赋值
        ReflectAssignFromJson.assign(obj, json)
      }
    }
    return obj
  }
}

export default HttpCommunicate
