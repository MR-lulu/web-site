/**
 * interval初始化类
 */
class IntervalInit {
  /**
   * 初始化方法
   */
  init () {
    setInterval(dateInterval, 1000)
    setInterval(randomInterval, 2000)
  }
}

function dateInterval () {
  //console.log((new Date()).toDateString())
}

function randomInterval () {
  //console.log(Math.random())
}
export default IntervalInit
