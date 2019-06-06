<template>
  <div class="footer">
    <!--因为底部导航栏的数据比较少，所以重新使用盒子来包装，目的是显示居中-->
    <div class="footer-box">
      <!--自定义图片-->
      <el-row v-if="isNull(webBottomInfo.bottomUrl)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="box-img"><img :src="webBottomInfo.bottomUrl"></div>
          </div>
        </el-col>
      </el-row>

      <!--关于我们-->
      <el-row v-if="isNull(webBottomInfo.about)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="about-us">
              <span>关于我们:</span>
              <div class="about">
                <span class="txt">&nbsp;&nbsp;{{webBottomInfo.about}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--联系方式-->
      <el-row class="contact"
              v-if="isNull(webBottomInfo.phone) || isNull(webBottomInfo.address) || isNull(webBottomInfo.contact)">
        <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="phone-cell">
              <!--显示电话图标-->
              <div class="call-phone-img">
                <img src="@/assets/images/callphone.png">
              </div>
              <!--显示电话信息-->
              <div class="call-phone-txt">
                <!--联系电话-->
                <div><span>{{$t('rs.moduleA.20000000014')}}: </span> <span class="txt">{{webBottomInfo.phone}}</span>
                </div>
                <!--联系地址-->
                <div><span>{{$t('rs.moduleA.20000000015')}}:</span> <span class="txt">{{webBottomInfo.address}}</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
            <!--其它联系方式-->
            <div class="other">
              <span>{{$t('rs.moduleA.20000000018')}}: </span>
              <span class="txt">{{webBottomInfo.contact}}</span>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--自定义信息栏-->
      <el-row v-if="isNull(webBottomInfo.selfInfo)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="about-us">
              <span>相关信息:</span>
              <div class="about">
                <span class="txt">&nbsp;&nbsp;{{webBottomInfo.selfInfo}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

      <!--备案信息-->
      <el-row v-if="isNull(webBottomInfo.record)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="record">
              <img src="@/assets/images/beian.png">
              <span class="txt">{{webBottomInfo.record}}</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import WebButtomRequestVO from '@/moduleA/common/js/model/WebButtomRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "Footer",
    data() {
      return {
        phone: '',
        address: '',
        contact: '',
        about: '',
        record: '',
        webBottomInfo: '',  // 页尾信息
      }
    },
    created() {
      // 初始化获取页尾信息
      this.getWebButtom();
    },
    methods: {
      // 判断空
      isNull: function (value) {
        return !Tools.isNull(value);
      },
      // 获取页尾信息
      getWebButtom: function () {
        let webButtomRequestVO = new WebButtomRequestVO(this.ProtocolContent.webbuttom);
        this.communicateManger.httpCommunicate.getResponseVO(webButtomRequestVO, "/webBottom/query/list").then((WebButtomResponseVO) => {
          if (WebButtomResponseVO.getStatus == 1000) {
            this.webBottomInfo = WebButtomResponseVO.resultList[0];
            // this.webBottomInfo = null;
          } else {
            this.messageBox.error(WebButtomResponseVO.getMsg)
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    },
  }
</script>

<style>
  .footer {
    padding-top: 30px;
    background-color: #373d41;
    min-height: 100px;
    color: #d7d8d9;
    text-align: left;
    margin-top: 5%;
    font-size: 16px;
  }

  .footer .el-row {
    margin-top: 20px;
  }

  .footer a {
    color: #9b9ea0;
  }

  .footer a:hover {
    color: #4169E1;
  }

  .footer .footer-box {
    margin: 0 auto;
    width: 80%;
  }

  .footer .footer-box .txt {
    color: #9b9ea0;
  }

  .footer .footer-box .box-img img {
    width: 100%;
    height: auto;
  }

  .footer .footer-box .about-us {
    margin-top: 10px;
  }

  .footer .footer-box .about-us .about {
    margin-top: 10px;
    width: 100%;
    height: auto;
    color: #808080;
    text-align: center;
    min-height: 100px;
    background-color: #000;
    padding-left: 1%;
    padding-right: 1%;
    display: flex;
    justify-content: center;
    align-items: Center;
  }

  .footer .footer-box .contact {
    /*border-bottom: 1px solid #4b5054;*/
    /*border-top: 1px solid #4b5054;*/
  }

  .footer .footer-box .phone-cell {
    width: 100%;
  }

  .footer .footer-box .phone-cell .call-phone-txt {
    float: left;
    width: 76%;
  }

  .footer .footer-box .phone-cell .call-phone-txt span {
    line-height: 35px;
  }

  .footer .footer-box .call-phone-img {
    width: 100px;
    height: 100px;
    float: left;
    position: relative;
  }

  .footer .footer-box .call-phone-img img {
    width: 70px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 40%;
    margin-top: -25px; /* 高度的一半 */
    margin-left: -25px; /* 宽度的一半 */
  }

  .footer .footer-box .other {
    margin-left: 3%;
  }

  .footer .footer-box .el-col-8 {
    border-right: 1px solid #4b5054;
  }

  .footer .footer-box .record {
    text-align: center;
    height: 50px;
    line-height: 36px;
  }

  .footer .footer-box .record img {
    width: 20px;
    height: 20px;
  }


</style>
