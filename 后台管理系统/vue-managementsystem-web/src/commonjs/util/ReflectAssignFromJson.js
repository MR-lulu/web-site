/**
 * 反射对象将对象的属性使用json对应的属性赋值
 * 如果属性需要反射成指定类型 则在类中增加定义节点类型属性（定义规则:节点名称+Type=目标类型）
 * 如果属性需要嵌套设置属性 则在类中增加定义节点嵌套类型属性（定义规则:节点名称+NestType=目标类型）
 * 此代码涉及到递归调用代码可读性较差，等有时间时需要重构
 * mengyu 2018-06-08 version:V1.0.0.0
 */
class ReflectAssignFromJson {
  /**
   * 反射对象将对象的属性使用json对应的属性赋值
   * @param target 目标对象
   * @param json json对象
   */
  static assign (target, json) {
    if (!target) {
      throw new Error('传入的参数不正确，目标对象不允许为空')
    }

    if (!json) {
      throw new Error('传入的参数不正确，json对象不允许为空')
    }

    let keys = Reflect.ownKeys(json)
    for (let key of keys) {
      let value = json[key]
      // 如果是数组类型，则获取目标对象是否对数组内的元素进行了类型设置如果设置了则通过反射转换为目标类型
      if (Array.isArray(value)) {
        // 原数组
        let arr = value

        // 如果健值对应的类型存在，则将数组中的内容转换为目标类型的数组
        let keyType = Reflect.get(target, `${key}Type`)
        if (keyType) {
          // 新数组
          let newArr = []
          for (let index of arr.keys()) {
            let temp = Reflect.construct(keyType, [])
            ReflectAssignFromJson.assign(temp, arr[index])
            newArr.push(temp)
          }
          Reflect.set(target, key, newArr)
        } else {
          Reflect.set(target, key, arr)
        }
      } else {
        // 如果健值存在嵌套类型设置，则遍历key嵌套反射赋值
        let keyNestType = Reflect.get(target, `${key}NestType`)
        if (keyNestType) {
          let tempObj = {}
          // 循环添加目标属性以达到反射成为目标对象的目的
          let tempKeys = Reflect.ownKeys(value)
          for (let key of tempKeys) {
            Reflect.defineProperty(tempObj, `${key}Type`, {value: keyNestType})
          }
          ReflectAssignFromJson.assign(tempObj, value)
          Reflect.set(target, key, tempObj)
        } else {
          Reflect.set(target, key, value)
        }
      }
    }
  }
}

export default ReflectAssignFromJson
