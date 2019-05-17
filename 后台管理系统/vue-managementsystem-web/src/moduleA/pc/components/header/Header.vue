<template>
  <div class="header">
    <!--logo 图片-->
    <div class="logo">
      <img :src="logoUrl">
    </div>
    <!--导航栏-->
    <div class="navigation-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <!--网站首页-->
        <el-menu-item index="webSiteHomePage">{{$t('rs.moduleA.20000000008')}}</el-menu-item>
        <!--用户管理-->
        <el-menu-item index="userManage">{{$t('rs.moduleA.20000000009')}}</el-menu-item>
        <!--我的网页-->
        <el-menu-item index="myWebSite">{{$t('rs.moduleA.20000000010')}}</el-menu-item>
        <!--系统设置-->
        <!--<el-menu-item index="systemSet">{{$t('rs.moduleA.20000000011')}}</el-menu-item>-->
        <el-submenu index="systemSet">
          <template slot="title">{{$t('rs.moduleA.20000000011')}}</template>
          <!--零件种类-->
          <el-menu-item index="partsType">{{$t('rs.moduleA.20000000054')}}</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <!--账号-->
    <div class="account-display">
      <span>{{$t('rs.moduleA.20000000012')}}:</span>
      <span class="user-name">{{userName}}</span>
    </div>
    <!--退出按钮-->
    <div class="quit">
      <el-button type="danger" round v-on:click="quit">{{$t('rs.moduleA.20000000013')}}</el-button>
    </div>
  </div>
</template>

<script>
  import {getToken, getLoginUserInfo, setToken, setLoginUserInfo, setUserID} from '@/store/sessionstorage/index.js'
  import WebTopRequestVO from '@/moduleA/common/js/model/WebTopRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
      userName: '',
      webTopList: [],
      logoUrl: ''
    }
  },
  created() {
    // 获取用户名
    this.userName = JSON.parse(getLoginUserInfo()).username;
    // 初始化获取页头信息
    this.getWebTop();
  },
  methods: {
    // 导航栏选择点击事件
    handleSelect(key, keyPath) {
      switch (key) {
        case 'webSiteHomePage': {
          this.$router.push('websiteHomePage');
          break;
        }
        case 'userManage': {
          this.$router.push('userManage');
          break;
        }
        case 'myWebSite': {
          this.$router.push('myWebSite');
          break;
        }
        case 'partsType': {
          this.$router.push({
            path: 'systemSet',
            query: {
              component: 'partsType'
            }
          });
          break;
        }
        default : {
          this.$router.push('websiteHomePage');
        }
      }
    },

    // 退出登录
    quit: function () {
      this.messageBox.confirm(this.$t('rs.staticText.30000000003'), this.$t('rs.staticText.30000000008'), () => {
      }, () => {
        // 确定
        // 清除用户信息
        sessionStorage.clear();
        this.$router.push('/');
      }, () => {
        // 取消
      });
    },

    // 获取表头信息
    getWebTop: function () {
      let webTopRequestVO = new WebTopRequestVO(this.ProtocolContent.webtop);
      this.communicateManger.httpCommunicate.getResponseVO(webTopRequestVO, "/webTop/query/list").then((WebTopResponseVO) => {
        if (WebTopResponseVO.getStatus == 1000) {
          this.webTopList = WebTopResponseVO.resultList
          if (Tools.isNull(this.webTopList)) {
            // 使用默认的logo
            this.logoUrl = '../../../assets/logo.png';
          } else {
            // 默认使用第一条数据的logo
            this.logoUrl = this.webTopList[0].logoUrl;
          }
        } else {
          this.messageBox.error(WebTopResponseVO.getMsg)
        }
      }).catch(() => {
        this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
      })
    },
  }
}
</script>

<style>
  .header {
    margin-top: 00px;
    width: 100%;
    height: 80px;
    font-size: 14px;
    background-color: #F5F5F5;
    border-bottom: 1px solid #91bfff;
  }

  .header .logo {
    float: left;
    width: 20%;
    height: 80px;
  }

  .header .account-display .user-name {
    margin-left: 5px;
  }

  .header .navigation-bar {
    float: left;
    height: 80px;
    width: 50%;
  }

  .header .quit {
    float: left;
    height: 80px;
    width: 10%;
  }

  .header .el-menu--horizontal {
    background-color: #F5F5F5;
    border-bottom: solid 0px #e6e6e6;
    margin-top: 19px;
  }

  .header .el-button--medium.is-round {
    margin-top: 20px;
  }

  .header .el-menu--horizontal > .el-menu-item.is-active {
    color: #4169E1;
  }

  .header .account-display {
    float: left;
    height: 80px;
    width: 20%;
    line-height: 80px;
  }
</style>
