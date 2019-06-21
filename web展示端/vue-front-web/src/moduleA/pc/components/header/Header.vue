<template>
  <div class="header">
    <!--logo 图片-->
    <div class="logo">
      <img :src="webTopInfo.logoUrl">
    </div>
    <!--导航栏-->
    <div class="navigation-bar" id="navigation-bar" ref="element" v-bind:class="{hide2: isActiveNavigation}">
      <div v-for="(item, index) in navigationListInfo" :tabindex="index" :id="item.navigationId" class="cell"
           :key="index" v-on:click="handleSelect(item.navigationId, index)">
        <label class="name ellipsis">{{item.name}}</label>
      </div>
    </div>

    <div v-if="navigationListInfo != null && navigationListInfo.length > 6">
      <div class="icon-down" v-on:click="iconDown(1)" v-if="iconDownFlag == false">
        <span><i class="el-icon-arrow-down"></i></span>
      </div>
      <div class="icon-down" v-on:click="iconDown(2)" v-else>
        <span><i class="el-icon-arrow-up"></i></span>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  import WebModuleTreeRequestVO from '@/moduleA/common/js/model/WebModuleTreeRequestVO.js'
  import CommonInfoRequestVO from '@/moduleA/common/js/model/CommonInfoRequestVO.js'
  import {mapState} from 'vuex'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: 'Header',
    data() {
      return {
        initDataTimer: null,  // 定时器
        webTopInfo: {   // 页头信息
          logoUrl: ''
        },
        webBottomInfo: null,  // 页尾信息
        webInfo: null,  // 网站信息
        commonInfo: null,  // 公共信息
        navigationListInfo: null,  // 导航信息
        isActiveNavigation: false,
        clickFlag: null,  // 点击的菜单
        iconDownFlag: false,
      }
    },
    computed: {
      // ...mapState(['webTopInfo']),
    },
    created() {
      // 初始化数据
      this.initData();
      // 获取公共信息
      this.getCommonInfo();

      clearInterval(this.initDataTimer);
      //定时器，60s查询一次
      this.initDataTimer = setInterval(() => {
        // 初始化数据
        this.initData();
        // 获取公共信息
        this.getCommonInfo();
      }, 1000 * 60)
    },
    watch: {
      navigationListInfo: function (newValue, oldValue) {
        if (newValue) {
          if (newValue.length > 6) {
            this.isActiveNavigation = true;
          }
        }
      }
    },
    methods: {
      // 导航栏选择点击事件
      handleSelect(key, index) {
      },

      // 下拉图标点击事件
      iconDown: function (flag) {
        if (flag == 1) {
          // 展开
          this.iconDownFlag = true;
          this.isActiveNavigation = false;
          $("#navigation-bar").css("height", "auto");
        } else {
          // 收起
          this.iconDownFlag = false;
          this.isActiveNavigation = true;
          $("#navigation-bar").css("height", "80px");
        }
      },

      // 初始化数据，并且定时刷新
      initData: function () {
        let webModuleTreeRequestVO = new WebModuleTreeRequestVO(this.ProtocolContent.webModuleTree);
        this.communicateManger.httpCommunicate.getResponseVO(webModuleTreeRequestVO, "/navigation/query/all").then((WebModuleTreeResponseVO) => {
          if (WebModuleTreeResponseVO.getStatus == 1000) {
            if (!Tools.isNull(WebModuleTreeResponseVO.getNavigationDtoList)) {
              this.navigationListInfo = WebModuleTreeResponseVO.getNavigationDtoList;
              this.$store.commit('changeNavigationListInfo', this.navigationListInfo);
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebTop)) {
              // 添加页头
              this.webTopInfo = WebModuleTreeResponseVO.getWebTop;
              this.$store.commit('changeWebTopInfo', this.webTopInfo);
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebBottom)) {
              // 添加页尾
              this.webBottomInfo = WebModuleTreeResponseVO.getWebBottom;
              this.$store.commit('changeWebBottomInfo', this.webBottomInfo);
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebInfo)) {
              // 添加网站信息
              this.webInfo = WebModuleTreeResponseVO.getWebInfo;
              this.$store.commit('changeWebInfo', this.webInfo);
              }
            } else {
            this.messageBox.error(WebModuleTreeResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 获取公共信息
      getCommonInfo: function () {
        let commonInfoRequestVO = new CommonInfoRequestVO(this.ProtocolContent.commonInfo);
        this.communicateManger.httpCommunicate.getResponseVO(commonInfoRequestVO, "/commonInfo/query/list").then((CommonInfoResponseVO) => {
          if (CommonInfoResponseVO.getStatus == 1000) {
            if (!Tools.isNull(CommonInfoResponseVO.resultList)) {
              for (let i = 0; i < CommonInfoResponseVO.resultList.length; i++) {
                this.commonInfo = CommonInfoResponseVO.resultList[i];
                this.$store.commit('changeCommonInfo', this.commonInfo);
                // 此处break的目的是只取第一条数据
                break;
              }
            }
          } else {
            this.messageBox.error(CommonInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },

    beforeDestroy() {
      // 清除定时器
      clearInterval(this.initDataTimer);
    }
  }
</script>

<style>
  .header {
    margin-top: 00px;
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #fee974;
    min-height: 80px;
    height: auto;
  }

  .header .logo {
    float: left;
    width: 20%;
    height: 80px;
  }

  .header .navigation-bar {
    float: left;
    height: 80px;
    width: 70%;
  }

  .header .navigation-bar .cell {
    background-color: #373d41;
    float: left;
    margin-left: 1%;
    width: 15%;
    margin-top: 16px;
    font-size: 16px;
    height: 60px;
    line-height: 60px;
  }

  .header .navigation-bar :hover {
    background-color: #2fff74;
    color: #0f0f0f;
  }

  .header .navigation-bar :focus {
    background-color: #fee974;
    color: #0f0f0f;
  }

  .header .navigation-bar .name {

  }

  .header .icon-down {
    float: left;
    height: 80px;
    width: 10%;
    line-height: 80px;
    text-align: left;
    color: #fee974;
    font-size: 30px;
  }

  .header .show {
    height: auto;
    border-bottom: 1px solid #ebebeb;
  }

  .header .hide2 {
    overflow: hidden;
  }

  .header .clear {
    clear: both
  }
</style>
