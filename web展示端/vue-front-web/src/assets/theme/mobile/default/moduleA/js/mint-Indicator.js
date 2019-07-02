import {Indicator} from 'mint-ui';
import {translate} from '@/commonjs/util/translateUtil'

/**
 * 加载缓冲类
 */
class MintIndicator {
  /**
   * 定时检查加载时间常量5s
   * @type {number}
   */
  TIME_OUT = 1000 * 5

  /**
   * 打开缓冲页面
   * @param {value} '加载中'
   */
  open(value) {
    Indicator.open({
      text: translate('staticText.10001006006') + '...',  /*加载中...*/
      spinnerType: 'fading-circle'
    });

    //定时关闭缓冲
    setTimeout(() => {
      Indicator.close()
    }, this.TIME_OUT)
  }

  /**
   * 关闭缓冲页面
   */
  close() {
    Indicator.close();
  }
}

export default MintIndicator
