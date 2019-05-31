/**
 *
 * <b>类说明： JS基础工具类 </b>
 * <p>
 * 本类主要用于 生成安全码
 *
 * 本js类推荐使用原生的js进行编写，因为本类的方法有可能在页面加载之初，jquery还未加载完成时使用
 * </p>
 */

var translateUtil = {};


/**生成一个随机数**/
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**生成一个随机色**/
function randomColor(min, max) {
  var r = randomNum(min, max);
  var g = randomNum(min, max);
  var b = randomNum(min, max);
  return "rgb(" + r + "," + g + "," + b + ")";
}

/**
 * @return string
 */
translateUtil.drawPic = function () {
  let securityCode = "";
  let canvas = document.getElementById("canvas");
  let width = canvas.width;
  let height = canvas.height;
  let ctx = canvas.getContext('2d');
  ctx.textBaseline = 'bottom';

  /**绘制背景色**/
  ctx.fillStyle = randomColor(180, 240); //颜色若太深可能导致看不清
  ctx.fillRect(0, 0, width, height);
  /**绘制文字**/
  let str = 'ABCEFGHJKLMNPQRSTWXYabcdefghijkrmnopqrstuvwhyz123456789';
  for (let i = 0; i < 4; i++) {
    let txt = str[randomNum(0, str.length)];
    securityCode = securityCode + txt;
    ctx.fillStyle = randomColor(50, 160);  //随机生成字体颜色
    ctx.font = randomNum(15, 40) + 'px SimHei'; //随机生成字体大小
    let x = 10 + i * 25;
    let y = randomNum(25, 45);
    let deg = randomNum(-45, 45);
    //修改坐标原点和旋转角度
    ctx.translate(x, y);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(txt, 0, 0);
    //恢复坐标原点和旋转角度
    ctx.rotate(-deg * Math.PI / 180);
    ctx.translate(-x, -y);
  }
  /**绘制干扰线**/
  for (let i = 0; i < 8; i++) {
    ctx.strokeStyle = randomColor(40, 180);
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width), randomNum(0, height));
    ctx.lineTo(randomNum(0, width), randomNum(0, height));
    ctx.stroke();
  }
  /**绘制干扰点**/
  for (let i = 0; i < 100; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.fill();
  }
  return securityCode;
};

export default translateUtil;
