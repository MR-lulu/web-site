/**
 * 服务端基础字典信息 从云服务器获取
 */
class BaseDictionaryInfo {
  constructor () {
    // 设置lc对应的类型为LegalCurrency
    this.lcType = LegalCurrency
    // 设置cl对应的类型为LegalCurrency
    this.clType = Country
    // 设置证件分组为嵌套类型，嵌套类型为Card
    this.ctNestType = Card
  }

  /**
   * 获取系统使用的法币数组
   * @returns {*} 法币数组
   */
  get legalCurrencyArr () {
    return this.lc
  }

  /**
   * 获取系统支持的国家数组
   * @returns {*} 国家数组
   */
  get countryArr () {
    return this.cl
  }

  /**
   * 获取证件分组的数组（不同国家使用不同的证件分组）
   * @returns {*} 证件分组的数组
   */
  get cardGroup () {
    return this.ct
  }
}

/**
 * 法币信息
 */
class LegalCurrency {
  /**
   *获取法币编号
   */
  get legalCurrencyID () {
    return this.id
  }

  /**
   *获取法币代号 例如CNY USD
   */
  get legalCurrencyNO () {
    return this.no
  }

  /**
   *获取法币符号 例如￥ $
   */
  get legalCurrencySymbol () {
    return this.s
  }

  /**
   *获取中文名称
   */
  get name () {
    return this.n
  }

  /**
   *获取名称对应的健值，名称需要通过健值在语言包中获取
   */
  get nameKey () {
    return this.nk
  }

  /**
   *获取法币的简码（只能有一个字节）
   */
  get byteValue () {
    return this.bv
  }
}

/**
 * 国家信息
 */
class Country {
  /**
   *获取国家编号
   */
  get countryID () {
    return this.id
  }

  /**
   *获取国家的中文名称
   */
  get name () {
    return this.n
  }

  /**
   *获取名称对应的健值，名称需要通过健值在语言包中获取
   */
  get nameKey () {
    return this.nk
  }

  /**
   *获取国家使用的证件所属分组
   */
  get belongToCardGroup () {
    return this.ct
  }

  /**
   *获取国家区号
   */
  get areaCode () {
    return this.ac
  }

  /**
   *获取国家使用的语言编号
   */
  get languageID () {
    return this.l
  }
}

/**
 * 证件信息
 */
class Card {
  /**
   *获取证件编号
   */
  get cardID () {
    return this.id
  }

  /**
   *获取证件的中文名称
   */
  get name () {
    return this.n
  }

  /**
   *获取名称对应的健值，名称需要通过健值在语言包中获取
   */
  get nameKey () {
    return this.nk
  }
}

export default BaseDictionaryInfo
