<template>
  <div class="m-header">
    <div class="htmleaf-container">
      <div id="wrapper">
        <div class="menu">
          <img id="menu-bg" src="@/assets/images/golden-gate-lights.jpg"/>

          <!--导航栏-->
          <ul>
            <li v-for="(item, index) in navigationListInfo" :tabindex="index" :id="item.navigationId" class="cell"
                :key="index" v-on:click="handleSelect(item.navigationId, index)"
                v-if="item.status == 1">
              <a
                :href="(item.navigationUrl==null || item.navigationUrl=='') ? 'javascript:void(0);' : item.navigationUrl"
                :target="(item.navigationUrl==null || item.navigationUrl=='') ? '_self' : '_blank'">
                <div class="image" v-if="index == selectIndex"><img src="@/assets/images/selected.png"></div>
                <div class="title"><label class="name">{{item.name}}</label></div>
              </a>
            </li>
          </ul>
        </div>

        <div class="screen">
          <div class="navbar"></div>
          <div class="list">
            <!--数据信息主体-->
            <Page></Page>
            <!--底部-->
            <Footer></Footer>
          </div>

          <div class="burger">
            <div class="x"></div>
            <div class="y"></div>
            <div class="z"></div>

            <span>导航</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import WebModuleTreeRequestVO from '@/moduleA/common/js/model/WebModuleTreeRequestVO.js'
  import CommonInfoRequestVO from '@/moduleA/common/js/model/CommonInfoRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import Page from '@/moduleA/mobile/components/home/factory/Page.vue'
  import Footer from '@/moduleA/mobile/components/footer/Footer.vue'
  import Config from '../../../../assets/Config.js'

  export default {
    name: "Header",
    components: {
      Page,
      Footer
    },
    data() {
      return {
        selectIndex: 0,  // 选中导航的索引
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
      };
    },
    mounted() {
      let click;
      if ('ontouchstart' in window) {
        click = 'touchstart';
      } else {
        click = 'click';
      }
      $('div.burger').on(click, function () {
        if (!$(this).hasClass('open')) {
          openMenu();
        } else {
          closeMenu();
        }
      });
      $('div.menu ul li').on(click, function (e) {
        //e.preventDefault();
        closeMenu();
      });

      function openMenu() {
        $('div.burger').addClass('open');
        $('div.y').fadeOut(100);
        $('div.screen').addClass('animate');
        setTimeout(function () {
          $('div.x').addClass('rotate30');
          $('div.z').addClass('rotate150');
          $('.menu').addClass('animate');
          setTimeout(function () {
            $('div.x').addClass('rotate45');
            $('div.z').addClass('rotate135');
          }, 100);
        }, 10);
      }

      function closeMenu() {
        $('div.screen, .menu').removeClass('animate');
        $('div.y').fadeIn(150);
        $('div.burger').removeClass('open');
        $('div.x').removeClass('rotate45').addClass('rotate30');
        $('div.z').removeClass('rotate135').addClass('rotate150');
        setTimeout(function () {
          $('div.x').removeClass('rotate30');
          $('div.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
          $('div.x, div.z').removeClass('collapse');
        }, 70);
      }
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
      }, Config.Timer)
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
        this.navigationID = key;
        this.$store.commit('changeNavigationID', this.navigationID);
        this.selectIndex = index;
        if (this.oldClickNavigationIndex != key) {
          $("#" + key).addClass("active");
          $("#" + this.oldClickNavigationIndex).removeClass("active");
          this.oldClickNavigationIndex = key;
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
            //this.messageBox.error(WebModuleTreeResponseVO.getMsg);
            this.messageBox.alertMobile(WebModuleTreeResponseVO.getMsg, this.$t('rs.staticText.30000000022'));//错误
          }
        }).catch(() => {
          //this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
          this.messageBox.alertMobile(this.$t('rs.staticText.30000000001'), this.$t('rs.staticText.30000000022'));//错误
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
            //this.messageBox.error(CommonInfoResponseVO.getMsg);
            this.messageBox.alertMobile(CommonInfoResponseVO.getMsg, this.$t('rs.staticText.30000000022'));//错误
          }
        }).catch(() => {
          //this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
          this.messageBox.alertMobile(this.$t('rs.staticText.30000000001'), this.$t('rs.staticText.30000000022'));//错误
        })
      }
    },
    beforeDestroy() {
      // 清除定时器
      clearInterval(this.initDataTimer);
    }
  }
</script>

<style>
  .m-header {
  }

  .m-header #wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 50%;
    margin-left: -3.75rem;
  }

  .m-header #wrapper .menu .image {
    float: left;
  }

  .m-header #wrapper .menu .image img {
    width: 0.5rem;
    height: 0.5rem;
    margin-left: -1rem;
  }

  .m-header #wrapper .menu .title {
    /*width: 3.5rem;*/
  }

  .m-header div.screen {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    top: 0rem;
    left: 0rem;
    background: #040404;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header div.screen.animate {
    left: 5rem;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header .list {
    text-align: left;
    height: 91%;
    overflow: scroll;
  }

  .m-header div.burger {
    height: 0.5rem;
    width: 100%;
    position: absolute;
    top: 0.2rem;
    left: 0.3rem;
    cursor: pointer;
  }

  div.x,
  div.y,
  div.z {
    position: absolute;
    margin: auto;
    top: 0px;
    bottom: 0px;
    background: #fff;
    border-radius: 2px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -ms-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }

  div.x, div.y, div.z {
    height: 3px;
    width: 26px;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }

  div.y.squize {
    width: 0;
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }

  div.y {
    top: 18px;
  }

  div.z {
    top: 37px;
  }

  div.open div.x, div.open div.z {
    top: 0.2rem;
    -webkit-transition: all 70ms ease-out;
    -moz-transition: all 70ms ease-out;
    -ms-transition: all 70ms ease-out;
    -o-transition: all 70ms ease-out;
    transition: all 70ms ease-out;
  }

  div.rotate30 {
    -ms-transform: rotate(30deg);
    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -webkit-transition: all 70ms ease-out;
    -moz-transition: all 70ms ease-out;
    -ms-transition: all 70ms ease-out;
    -o-transition: all 70ms ease-out;
    transition: all 70ms ease-out;
  }

  div.rotate150 {
    -ms-transform: rotate(150deg);
    -webkit-transform: rotate(150deg);
    transform: rotate(150deg);
    -webkit-transition: all 70ms ease-out;
    -moz-transition: all 70ms ease-out;
    -ms-transition: all 70ms ease-out;
    -o-transition: all 70ms ease-out;
    transition: all 70ms ease-out;
  }

  div.rotate45 {
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }

  div.rotate135 {
    -ms-transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    transform: rotate(135deg);
    -webkit-transition: all 100ms ease-out;
    -moz-transition: all 100ms ease-out;
    -ms-transition: all 100ms ease-out;
    -o-transition: all 100ms ease-out;
    transition: all 100ms ease-out;
  }

  .m-header div.navbar {
    height: 9%;
    background: url('~@/assets/images/navbar.jpg') center center no-repeat;

    /*background: -webkit-linear-gradient(left, red 0%, orange 10%, yellow 90%, violet 100%);*/
    /*background: -ms-linear-gradient(left, red 0%, orange 10%, yellow 90%, violet 100%);*/
    /*background: -moz-linear-gradient(left, red 0%, orange 10%, yellow 90%, violet 100%);*/
    /*background: linear-gradient(left, red 0%, orange 10%, yellow 90%, violet 100%);*/
  }

  .m-header div.burger span {
    font-size: 22px;
    float: left;
    margin-left: 40%;
    margin-top: 1%;
  }

  .m-header div.menu {
    height: 12rem;
    margin-bottom: 1rem;
    width: 100%;
    opacity: 0;
    position: relative;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header #menu-bg {
    position: absolute;
    /*left: -10px;*/
    opacity: 0.3;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header div.menu.animate #menu-bg {
    left: -0.5rem;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header div.menu.animate {
    margin-left: -1.5rem;
    opacity: 1;
    -webkit-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 500ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header div.menu ul {
    position: absolute;
    height: 100%;
    overflow: scroll;
  }

  .m-header div.menu ul li {
    list-style: none;
    width: 5rem;
    margin-top: 0.6rem;
    text-align: left;
    padding-left: 1.85rem;
    font-size: 0.5rem;
  }

  .m-header div.menu.animate ul li {
    margin-left: 1rem;
    -webkit-transition: all 800ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -moz-transition: all 800ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -ms-transition: all 800ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    -o-transition: all 800ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
    transition: all 800ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
  }

  .m-header div.menu.animate li:nth-of-type(1) {
    transition-delay: 0.0s;
  }

  .m-header div.menu.animate li:nth-of-type(2) {
    transition-delay: 0.06s;
  }

  .m-header div.menu.animate li:nth-of-type(3) {
    transition-delay: 0.12s;
  }

  .m-header div.menu.animate li:nth-of-type(4) {
    transition-delay: 0.18s;
  }

  .m-header div.menu.animate li:nth-of-type(5) {
    transition-delay: 0.24s;
  }

  .el-message-box__message p {
    color: #000;
  }
</style>
