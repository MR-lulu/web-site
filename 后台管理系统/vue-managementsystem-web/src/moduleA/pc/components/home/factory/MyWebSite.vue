<template>
  <!--我的网站-->
  <div class="myWebSite">
    <!--左边树形导航栏组件-->
    <el-container>
      <el-aside>
        <div class="box-left">
          <WebModuleTree></WebModuleTree>
        </div>
      </el-aside>
      <el-main>
        <!--右边展示组件-->
        <div class="box-right">
          <!--导航添加-->
          <NavigationAdd v-if="isRouterAlive == 'NavigationAdd'"></NavigationAdd>
          <!--导航详情-->
          <NavigationDetail v-else-if="isRouterAlive == 'NavigationDetail'"></NavigationDetail>
          <!--模块添加-->
          <ModuleAdd v-else-if="isRouterAlive == 'ModuleAdd'"></ModuleAdd>
          <!--模块详情-->
          <ModuleDetail v-else-if="isRouterAlive == 'ModuleDetail'"></ModuleDetail>
          <!--零件添加-->
          <PartsAdd v-else-if="isRouterAlive == 'PartsAdd'"></PartsAdd>
          <!--零件详情-->
          <PartsDetail v-else-if="isRouterAlive == 'PartsDetail'"></PartsDetail>
          <!--页首-->
          <WebTop v-else-if="isRouterAlive == 'WebTop'"></WebTop>
          <!--页尾-->
          <WebBottom v-else-if="isRouterAlive == 'WebBottom'"></WebBottom>
          <!--网站信息-->
          <WebsiteInfo v-else-if="isRouterAlive == 'WebsiteInfo'"></WebsiteInfo>
          <!--网站背景图片-->
          <BackgroundimgAdd v-else="isRouterAlive == 'BackgroundimgAdd'"></BackgroundimgAdd>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import WebModuleTree from '@/moduleA/pc/components/home/trees/WebModuleTree.vue'
  import NavigationAdd from '@/moduleA/pc/components/home/forms/module/NavigationAdd.vue'
  import NavigationDetail from '@/moduleA/pc/components/home/forms/module/NavigationDetail.vue'
  import ModuleAdd from '@/moduleA/pc/components/home/forms/module/ModuleAdd.vue'
  import ModuleDetail from '@/moduleA/pc/components/home/forms/module/ModuleDetail.vue'
  import PartsAdd from '@/moduleA/pc/components/home/forms/module/PartsAdd.vue'
  import PartsDetail from '@/moduleA/pc/components/home/forms/module/PartsDetail.vue'
  import WebTop from '@/moduleA/pc/components/home/forms/module/WebTop.vue'
  import WebBottom from '@/moduleA/pc/components/home/forms/module/WebBottom.vue'
  import WebsiteInfo from '@/moduleA/pc/components/home/forms/module/WebsiteInfo.vue'
  import BackgroundimgAdd from '@/moduleA/pc/components/home/forms/common/BackgroundimgAdd.vue'
  import { mapState } from 'vuex'

  export default {
    name: "MyWebSite",
    components: {
      WebModuleTree,
      NavigationAdd,
      NavigationDetail,
      ModuleAdd,
      ModuleDetail,
      PartsAdd,
      PartsDetail,
      WebTop,
      WebBottom,
      WebsiteInfo,
      BackgroundimgAdd
    },
    data() {
      return {
        isRouterAlive: 'BackgroundimgAdd',
        webModuleTreeClickTypeNew: null,
        webModuleTree1New: null
      }
    },

    computed: {
      ...mapState(['webModuleTreeClickType', 'webModuleTree']),
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
        console.log(newValue);
        if (newValue) {
          this.webModuleTreeClickTypeNew = newValue;
          if (this.webModuleTreeClickTypeNew.clickType == 'add') {
            // 点击添加按钮
            if (this.webModuleTreeClickTypeNew.level == 1) {
              // 添加导航
              this.isRouterAlive = 'NavigationAdd';
            }else if(this.webModuleTreeClickTypeNew.level == 2) {
              // 添加模块
              this.isRouterAlive = 'ModuleAdd'
            }else if(this.webModuleTreeClickTypeNew.level == 3) {
              // 添加零件
              this.isRouterAlive = 'PartsAdd'
            }else{
            }
          }else if(this.webModuleTreeClickTypeNew.clickType == 'display') {
            // 点击display查看明细按钮
            if (this.webModuleTreeClickTypeNew.level == 1) {
              // 查看导航
            }else if(this.webModuleTreeClickTypeNew.level == 2) {
              // 查看模块
            }else if(this.webModuleTreeClickTypeNew.level == 3) {
              // 查看零件
            }else{
            }
          }else {
            // 其它
          }
        }
      },
      webModuleTree: function (newValue, oldValue) {
        if (newValue) {
          this.webModuleTree1New = newValue;
        }
      }
    },
  }
</script>

<style>
  .myWebSite {
    margin-top: 5%;
    border: 1px solid #FFD700;
    background-color: #F5F5F5;
  }

  .myWebSite .box-left {
  }

  .myWebSite .box-right {
    /*padding-top: 2%;*/
    /*width: 80%;*/
    /*margin: 0 auto;*/
    padding-top: 2%;
    width: 80%;
    position: relative;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .myWebSite .el-aside {
    border-right: 1px solid #FFD700;
    box-shadow: 10px 10px 5px #888888;
    background: #373d41;
  }

  .myWebSite .el-main {
    box-shadow: 10px 10px 5px #888888;
  }
</style>
