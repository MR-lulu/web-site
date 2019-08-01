<template>
  <div class="footer">
    <!--因为底部导航栏的数据比较少，所以重新使用盒子来包装，目的是显示居中-->
    <div class="footer-box">
      <!--自定义图片-->
      <el-row v-if="isNull(webBottomInfoNew.bottomUrl)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="box-img"><img :src="webBottomInfoNew.bottomUrl"></div>
          </div>
        </el-col>
      </el-row>

      <!--关于我们-->
      <div class="contact-style"
           data-aos="fade-left"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-bottom">
        <el-row v-if="isNull(webBottomInfoNew.about)">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div class="about-us">
                <span class="us"><h2 class="h-h2-white">关于我们</h2></span>
                <div class="about">
                  <span class="txt">&nbsp;&nbsp;{{webBottomInfoNew.about}}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>


      <!--自定义信息栏-->
      <div class="contact-style"
           data-aos="fade-right"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-bottom">

        <el-row v-if="isNull(webBottomInfoNew.selfInfo)">
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div class="about-us">
                <span class="us"><h2 class="h-h2-white">相关信息</h2></span>
                <div class="about">
                  <span class="txt">&nbsp;&nbsp;{{webBottomInfoNew.selfInfo}}</span>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="contact-style"
           data-aos="fade-up"
           data-aos-offset="200"
           data-aos-delay="10"
           data-aos-duration="1000"
           data-aos-easing="ease-in-out"
           data-aos-mirror="true"
           data-aos-once="false"
           data-aos-anchor-placement="top-bottom"
           v-if="isNull(webBottomInfoNew.phone) || isNull(webBottomInfoNew.address) || isNull(webBottomInfoNew.contact)">
        <el-row>
          <el-col :span="8">
            <div class="grid-content bg-purple">
              <!--显示地址图标-->
              <div class="contact-style-icon">
                <i class="el-icon-location"></i>
              </div>
              <!--联系地址-->
              <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000015')}}</span></div>
              <!--联系地址-->
              <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.address}}</span></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content bg-purple contact-style-border">
              <!--显示电话图标-->
              <div class="contact-style-icon">
                <i class="el-icon-phone-outline"></i>
              </div>
              <!--联系电话-->
              <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000014')}}</span></div>
              <!--联系地址-->
              <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.phone}}</span></div>
            </div>
          </el-col>

          <el-col :span="8">
            <div class="grid-content bg-purple">
              <!--显示地址图标-->
              <div class="contact-style-icon">
                <i class="el-icon-view"></i>
              </div>
              <!--其它联系方式-->
              <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000018')}}</span></div>
              <!--联系地址-->
              <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.contact}}</span></div>
            </div>
          </el-col>
        </el-row>
      </div>


      <!--&lt;!&ndash;联系方式&ndash;&gt;-->
      <!--<div class="contact-style">-->
      <!--<el-row class="contact"-->
      <!--v-if="isNull(webBottomInfoNew.phone) || isNull(webBottomInfoNew.address) || isNull(webBottomInfoNew.contact)">-->
      <!--<el-col :span="8">-->
      <!--<div class="grid-content bg-purple">-->
      <!--<div class="phone-cell">-->
      <!--&lt;!&ndash;显示电话图标&ndash;&gt;-->
      <!--<div class="call-phone-img">-->
      <!--<img src="@/assets/images/callphone.png">-->
      <!--</div>-->
      <!--&lt;!&ndash;显示电话信息&ndash;&gt;-->
      <!--<div class="call-phone-txt">-->
      <!--&lt;!&ndash;联系电话&ndash;&gt;-->
      <!--<div><span>{{$t('rs.moduleA.20000000014')}}: </span> <span class="txt">{{webBottomInfoNew.phone}}</span>-->
      <!--</div>-->
      <!--&lt;!&ndash;联系地址&ndash;&gt;-->
      <!--<div><span>{{$t('rs.moduleA.20000000015')}}:</span> <span-->
      <!--class="txt">{{webBottomInfoNew.address}}</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--</el-col>-->
      <!--<el-col :span="16">-->
      <!--<div class="grid-content bg-purple-light">-->
      <!--&lt;!&ndash;其它联系方式&ndash;&gt;-->
      <!--<div class="other">-->
      <!--<span>{{$t('rs.moduleA.20000000018')}}: </span>-->
      <!--<span class="txt">{{webBottomInfoNew.contact}}</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--</el-col>-->
      <!--</el-row>-->
      <!--</div>-->



      <!--备案信息-->
      <el-row v-if="isNull(webBottomInfoNew.record)">
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <div class="record">
              <img src="@/assets/images/beian.png">
              <span class="txt">{{webBottomInfoNew.record}}</span>
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
  import {mapState} from 'vuex'

  export default {
    name: "Footer",
    data() {
      return {
        webBottomInfoNew: '',  // 页尾信息
      }
    },
    created() {
      // 初始化获取页尾信息
      this.getWebButtom();
    },

    computed: {
      ...mapState(['webBottomInfo']),
    },

    watch: {
      webBottomInfo: function (newValue, oldValue) {
        if (newValue && !Tools.isNull(this.navigationID)) {
          this.webBottomInfoNew = newValue;
        }
      }
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
            this.webBottomInfoNew = WebButtomResponseVO.resultList[0];
            // this.webBottomInfoNew = null;
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
    background-color: rgb(0, 0, 0, 0.8);
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
    text-align: center;
  }

  .footer .footer-box .about-us .us {

  }

  .footer .footer-box .about-us .about {
    width: 100%;
    height: auto;
    color: #808080;
    text-align: center;
    min-height: 100px;
    padding-left: 1%;
    padding-right: 1%;
    display: -webkit-box;
    display: -ms-flexbox;
    /* display: flex; */
    /* -webkit-box-pack: center; */
    -ms-flex-pack: center;
    /* justify-content: center; */
    /* -webkit-box-align: Center; */
    -ms-flex-align: Center;
    align-items: Center;
    line-height: 25px;
    margin-top: 5%;
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
    /*border-right: 1px solid #4b5054;*/
  }

  .footer .footer-box .record {
    text-align: center;
    height: 50px;
    line-height: 36px;
    font-size: 14px;
  }

  .footer .footer-box .record img {
    width: 20px;
    height: 20px;
  }

  .footer .footer-box .record span {
    margin-left: 1%;
  }

  .footer .h-h2-white {
    font-size: 24px;
    color: #fff;
    line-height: 150%;
    margin: 0;
    padding: 0 20px;
  }

  .footer .h-h2-white:after, .h-h2-white:before {
    display: inline-block;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.30);
    padding: 0;
    content: "";
    width: 100px;
    margin: 10px 15px;
  }

  .footer .contact-style {
    margin-top: 10%;
    margin-bottom: 5%;
  }

  .footer .contact-style .contact-style-icon {
    float: left;
    margin-left: 5%;
    font-size: 25px;
  }

  .footer .contact-style .contact-style-txt {
    margin-left: 15%;
    padding-top: 5px;
  }

  .footer .contact-style .contact-style-content {
    margin-left: 15%;
    margin-top: 3%;
    margin-right: 5%;
    line-height: 25px;
  }

  .footer .contact-style .contact-style-border {
    border-right: 1px solid #4b5054;
    border-left: 1px solid #4b5054;
  }


</style>
