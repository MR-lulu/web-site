<template>
  <div class="footer">
    <!--自定义图片-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.bottomUrl)">
      <div class="image">
        <img :src="webBottomInfoNew.bottomUrl">
      </div>
    </div>

    <!--关于我们-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.about)">
      <div class="about-us">
        <span class="us">关于我们:</span>
        <div class="about">
          <span class="txt">{{webBottomInfoNew.about}}</span>
        </div>
      </div>
    </div>

    <!--联系方式-->
    <div class="footer-cell"
         v-if="isNull(webBottomInfoNew.phone) || isNull(webBottomInfoNew.address) || isNull(webBottomInfoNew.contact)">
      <div class="phone-cell">
        <!--显示电话图标-->
        <!--<div class="call-phone-img">-->
        <!--<img src="@/assets/images/callphone.png">-->
        <!--</div>-->
        <!--显示电话信息-->
        <div class="call-phone-txt">
          <!--联系电话-->
          <div><span>{{$t('rs.moduleA.20000000014')}}: </span> <span class="txt">{{webBottomInfoNew.phone}}</span>
          </div>
          <!--联系地址-->
          <div><span>{{$t('rs.moduleA.20000000015')}}:</span> <span class="txt">{{webBottomInfoNew.address}}</span>
          </div>
          <!--其它联系方式-->
          <div><span>{{$t('rs.moduleA.20000000018')}}: </span> <span class="txt">{{webBottomInfoNew.contact}}</span>
          </div>
        </div>
      </div>
    </div>


    <!--自定义信息栏-->
    <div class="footer-cell" v-if="isNull(webBottomInfoNew.selfInfo)">
      <div class="about-us">
        <span class="us">相关信息:</span>
        <div class="about">
          <span class="txt">{{webBottomInfoNew.selfInfo}}</span>
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
  .footer {
    margin-top: 1rem;
    background-color: #373d41;
    min-height: 2rem;
    color: #d7d8d9;
    text-align: left;
    font-size: 0.3rem;
  }

  .footer .txt {
    color: #9b9ea0;
  }

  .footer .footer-cell {
    width: 100%;
    height: auto;
  }

  .footer .footer-cell .image {
  }

  .footer .footer-cell .image img {
    width: 100%;
    height: auto;
  }

  .footer .footer-cell .about-us {
    border-top: 1px solid #000;
  }

  .footer .footer-cell .about-us .us {
    margin-left: 0.1rem;
    color: #fee86f;
    line-height: 1rem;
  }

  .footer .footer-cell .about-us .about {
    width: 100%;
    height: auto;
    color: gray;
    text-align: center;
    min-height: 2rem;
    background-color: #000;
    padding-left: 1%;
    padding-right: 1%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: Center;
    align-items: Center;
    text-indent: 2em;
  }

  .footer .footer-cell .about-us .about .txt {
    color: #9b9ea0;
  }

  .footer .footer-cell .phone-cell .call-phone-txt {
    padding-left: 0.2rem;
  }

  .footer .footer-cell .call-phone-img {
    width: 1rem;
    min-height: 1.5rem;
    float: left;
    position: relative;
  }

  .footer .footer-cell .call-phone-img img {
    width: 1rem;
    height: 0.7rem;
    position: absolute;
    top: 50%;
    left: 40%;
    margin-top: -25px;
    margin-left: -25px;
  }

  .footer .footer-cell .phone-cell .call-phone-txt span {
    line-height: 35px;
  }

  .footer .footer-cell .record {
    text-align: center;
    line-height: 0.8rem;
  }

  .footer .footer-cell .record img {
    width: 0.5rem;
    height: 0.5rem;
  }
</style>
