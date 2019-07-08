import PartAddOrModifyRequestVO from '@/moduleA/common/js/model/PartAddOrModifyRequestVO.js'

/**
 * 判断是手机端还是PC端
 */
export function isMobile() {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
  return flag;
}

/**
 * 零件点击统计
 * @param item 零件对象
 * @param protocolContent 协议对象
 * @param communicateManger 通讯对象
 */
export function onclickParts(item, protocolContent, communicateManger) {
  let partAddOrModifyRequestVO = new PartAddOrModifyRequestVO(protocolContent.partAddOrModify);
  partAddOrModifyRequestVO.partsId = item.partsId;
  communicateManger.getResponseVO(partAddOrModifyRequestVO, "/parts/add/click").then((PartAddOrModifyResponseVO) => {
    if (PartAddOrModifyResponseVO.getStatus == 1000 && PartAddOrModifyResponseVO.getResultCode > 0) {
      //this.messageBox.success(PartAddOrModifyResponseVO.getMsg);
    } else {
      //this.messageBox.error(PartAddOrModifyResponseVO.getMsg);
    }
  }).catch(() => {
    //this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
  })
}
