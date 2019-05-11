<template>
  <div class="header">
    <!--logo 图片-->
    <div class="logo">
      <img src="@/assets/logo.png">
    </div>
    <!--导航栏-->
    <div class="navigation-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <!--网站首页-->
        <el-menu-item index="1">{{$t('rs.moduleA.20000000008')}}</el-menu-item>
        <!--用户管理-->
        <el-menu-item index="2">{{$t('rs.moduleA.20000000009')}}</el-menu-item>
        <!--我的网页-->
        <el-menu-item index="4">{{$t('rs.moduleA.20000000010')}}</el-menu-item>
        <!--系统设置-->
        <el-menu-item index="5">{{$t('rs.moduleA.20000000011')}}</el-menu-item>
      </el-menu>
    </div>
    <!--账号-->
    <div class="account-display">
      <span>{{$t('rs.moduleA.20000000012')}}:1852489324754</span>
    </div>
    <!--退出按钮-->
    <div class="quit">
      <el-button type="danger" round>{{$t('rs.moduleA.20000000013')}}</el-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
      activeIndex: '1',
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
