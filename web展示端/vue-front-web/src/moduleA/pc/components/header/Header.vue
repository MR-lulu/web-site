<template>
  <div class="header">
    <!--logo 图片-->
    <div class="logo">
      <img :src="webTopInfo.logoUrl">
    </div>
    <!--导航栏-->
    <div class="navigation-bar" id="navigation-bar" ref="element" v-bind:class="{hide2: isActiveNavigation}">
      <!-- <div v-for="(item, index) in navigationListInfo" :tabindex="index" :id="item.navigationId" class="cell"
            :key="index" v-on:click="handleSelect(item.navigationId, index)">
         <label class="name ellipsis">{{item.name}}</label>
       </div>-->

      <a v-for="(item, index) in navigationListInfo" :tabindex="index" :id="item.navigationId" class="cell"
         :key="index" v-on:click="handleSelect(item.navigationId, index)"
         :href="(item.navigationUrl==null || item.navigationUrl=='') ? 'javascript:void(0);' : item.navigationUrl"
         target="_blank">
        <label class="name ellipsis">{{item.name}}</label>
        <span class="line line_top"></span>
        <span class="line line_right"></span>
        <span class="line line_bottom"></span>
        <span class="line line_left"></span>
      </a>
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
  import Config from '../../../../assets/Config.js'

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
        navigationMapInfo: null,  // 导航信息
        isActiveNavigation: false,
        clickFlag: null,  // 点击的菜单
        iconDownFlag: false,
        navigationID: '',  // 选中的导航ID

        oldClickNavigationIndex: 0,  // 上一次点击导航的索引
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
      //定时器
      this.initDataTimer = setInterval(() => {
        // 初始化数据
        this.initData();
        // 获取公共信息
        this.getCommonInfo();
      }, Config.Timer)
    },
    watch: {
      navigationListInfo: function (newValue, oldValue) {
        if (newValue) {
          if (newValue.length > 6) {
            this.isActiveNavigation = true;
          }
        }
      },
      commonInfo: function (newValue, oldValue) {
        if (newValue) {
          // 修改网站背景
          //document.querySelector('body').setAttribute('style', 'width:100%; height:auto; background-color: rgb(255,255,255,0);');
        }
      }
    },
    methods: {
      // 导航栏选择点击事件
      handleSelect(key, index) {
        this.navigationID = key;
        this.$store.commit('changeNavigationID', this.navigationID);
        if (this.oldClickNavigationIndex != key) {
          $("#" + key).addClass("active");
          $("#" + this.oldClickNavigationIndex).removeClass("active");
          this.oldClickNavigationIndex = key;
        }
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

      // 初始化数据
      initData: function () {
        let webModuleTreeRequestVO = new WebModuleTreeRequestVO(this.ProtocolContent.webModuleTree);
        this.communicateManger.httpCommunicate.getResponseVO(webModuleTreeRequestVO, "/navigation/query/all").then((WebModuleTreeResponseVO) => {
          if (WebModuleTreeResponseVO.getStatus == 1000) {
            if (!Tools.isNull(WebModuleTreeResponseVO.getNavigationDtoList)) {
              this.navigationListInfo = WebModuleTreeResponseVO.getNavigationDtoList;
              this.$store.commit('changeNavigationListInfo', this.navigationListInfo);
              this.navigationMapInfo = new Map();
              for (let item of this.navigationListInfo) {
                this.navigationMapInfo.set(item.navigationId, item);
              }
              this.$store.commit('changeNavigationMapInfo', this.navigationMapInfo);
              // 默认展开第一个导航的数据
              if (this.navigationID == '') {
                this.$store.commit('changeNavigationID', this.navigationListInfo[0].navigationId);
              }
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
    width: 100%;
    font-size: 14px;
    border-bottom: 1px solid #fee974;
    min-height: 80px;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    background: #040404;
    z-index: 1000;
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
    /*background-color: #373d41;*/
    float: left;
    margin-left: 1%;
    width: 15%;
    margin-top: 16px;
    font-size: 16px;
    height: 60px;
    /*line-height: 60px;*/
  }

  .header .navigation-bar :hover {
    background-color: #2fff74;
    color: #0f0f0f;
  }

  .header .navigation-bar :focus {
    background-color: #fee974;
    color: #0f0f0f;
  }

  .header .navigation-bar .active {
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


  .header .cell {
    display: inline-block;
    position: relative;
    text-decoration: none;
    font-size: 15px; /*color:#33ab6a;*/
    font-weight: bold;
    width: 255px;
    text-align: center;
    height: 100px; /*border:2px solid rgba(255,255,255,.8);*/
    margin: 20px 45px;
    padding: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .header .cell:hover {
    border: 2px solid rgba(255, 255, 255, 1);
  }

  .header .cell .line {
    display: inline-block;
    background-color: #FFF;
    position: absolute;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }

  .header .cell .line_top {
    height: 2px;
    width: 0;
    left: -50%;
    top: -2px;
  }

  .header .cell:hover .line_top {
    width: 100%;
    left: -2px;
  }

  .header .cell .line_right {
    height: 0;
    width: 2px;
    top: -50%;
    right: -2px;
  }

  .header .cell:hover .line_right {
    height: 100%;
    top: -2px;
  }

  .header .cell .line_bottom {
    width: 2px;
    height: 0;
    bottom: -50%;
    left: -2px;
  }

  .header .cell:hover .line_bottom {
    height: 100%;
    bottom: -2px;
  }

  .header .cell .line_left {
    height: 2px;
    width: 0;
    right: -50%;
    bottom: -2px;
  }

  .header .cell:hover .line_left {
    width: 100%;
    right: -2px;
  }


  .el-message-box__message p {
    color: #000;
  }
</style>
