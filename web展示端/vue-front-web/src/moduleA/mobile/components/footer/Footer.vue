<template>
  <div class="m-footer">
    <!--自定义图片-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.bottomUrl)">
      <div class="image">
        <img :src="webBottomInfoNew.bottomUrl">
      </div>
    </div>

    <!--关于我们-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.about)">
      <div class="about-us">
        <span class="us">关于我们</span>
        <div class="about">
          <span class="txt">{{webBottomInfoNew.about}}</span>
        </div>
      </div>
    </div>

    <!--自定义信息栏-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.selfInfo)">
      <div class="about-us">
        <span class="us">相关信息</span>
        <div class="about">
          <span class="txt">{{webBottomInfoNew.selfInfo}}</span>
        </div>
      </div>
    </div>

    <!--联系方式-->
    <div class="footer-cell"
         v-if="isNull(webBottomInfoNew.phone) || isNull(webBottomInfoNew.address) || isNull(webBottomInfoNew.contact)">
      <div class="contact-style">
        <!--联系电话-->
        <div class="contact-style-cell" v-if="isNull(webBottomInfoNew.phone)">
          <!--显示电话图标-->
          <div class="contact-style-icon">
            <i class="el-icon-phone-outline"></i>
          </div>
          <!--联系电话-->
          <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000014')}}</span></div>
          <!--联系电话-->
          <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.phone}}</span></div>
        </div>

        <!--联系地址-->
        <div class="contact-style-cell"  v-if="isNull(webBottomInfoNew.address)">
          <!--显示地址图标-->
          <div class="contact-style-icon">
            <i class="el-icon-location"></i>
          </div>
          <!--联系地址-->
          <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000015')}}</span></div>
          <!--联系地址-->
          <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.address}}</span></div>
        </div>

        <div class="contact-style-cell" v-if="isNull(webBottomInfoNew.contact)">
          <!--显示眼睛图标-->
          <div class="contact-style-icon">
            <i class="el-icon-view"></i>
          </div>
          <!--其它联系方式-->
          <div class="contact-style-txt"><span>{{$t('rs.moduleA.20000000018')}}</span></div>
          <!--其它联系方式-->
          <div class="contact-style-content"><span class="txt">{{webBottomInfoNew.contact}}</span></div>
        </div>
      </div>
    </div>

    <!--备案信息-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.record)">
      <div class="record">
        <img src="@/assets/images/beian.png">
        <span class="txt">{{webBottomInfoNew.record}}</span>
      </div>
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
  .m-footer {
    margin-top: 1rem;
    background-color: #373d41;
    min-height: 2rem;
    color: #d7d8d9;
    text-align: left;
    font-size: 0.3rem;
    padding-bottom: 0.2rem;
    position: relative;
  }

  .m-footer .txt {
    color: #9b9ea0;
  }

  .m-footer .footer-cell {
    width: 100%;
    height: auto;
  }

  .m-footer .footer-cell .image {
  }

  .m-footer .footer-cell .image img {
    width: 100%;
    height: auto;
  }

  .m-footer .footer-cell .about-us {
    border-top: 1px solid #000;
    text-align: center;
  }

  .m-footer .footer-cell .about-us .us {
    margin-left: 0.1rem;
    color: #fee86f;
    line-height: 1rem;
  }

  .m-footer .footer-cell .about-us .about {
    width: 100%;
    height: auto;
    color: gray;
    text-align: left;
    min-height: 2rem;
    background-color: #000;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: Center;
    align-items: Center;
    text-indent: 2em;
  }

  .m-footer .footer-cell .about-us .about .txt {
    color: #9b9ea0;
    margin-left: 2%;
    margin-right: 2%;
  }

  .m-footer .footer-cell .record {
    text-align: center;
    line-height: 0.5rem;
  }

  .m-footer .footer-cell .record img {
    width: 0.5rem;
    height: 0.5rem;
  }

  .m-footer .footer-cell .contact-style {
    margin-top: 5%;
  }

  .m-footer .footer-cell .contact-style .contact-style-cell {
    border-bottom: 1px solid #000;
  }

  .m-footer .footer-cell .contact-style .contact-style-icon {
    float: left;
    margin-left: 5%;
    font-size: 0.4rem;
  }

  .m-footer .footer-cell .contact-style .contact-style-txt {
    margin-left: 15%;
    padding-top: 5px;
  }

  .m-footer .footer-cell .contact-style .contact-style-content {
    margin-left: 15%;
    margin-top: 3%;
    margin-right: 5%;
    line-height: 25px;
  }

</style>
