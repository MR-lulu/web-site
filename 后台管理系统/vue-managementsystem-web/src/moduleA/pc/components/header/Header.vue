<template>
  <div class="header">
    <!--logo 图片-->
    <div class="logo">
      <img src="@/assets/logo.png">
    </div>
    <!--导航栏-->
    <div class="navigation-bar">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
    <!--退出按钮-->
    <div class="quit"></div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
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
    width: 400px;
    height: 80px;
  }

  .header .navigation-bar {
    float: left;
    height: 80px;
  }

  .header .quit {

  }

  .header .el-menu--horizontal {
    background-color: #F5F5F5;
    border-bottom: solid 0px #e6e6e6;
    margin-top: 19px;
  }
</style>
