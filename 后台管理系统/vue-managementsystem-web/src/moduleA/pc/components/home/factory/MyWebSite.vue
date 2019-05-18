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
          <NavigationAdd></NavigationAdd>
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
  import IndexPage from '@/moduleA/pc/components/home/forms/module/IndexPage.vue'
  import FooterPage from '@/moduleA/pc/components/home/forms/module/FooterPage.vue'
  import WebsiteInfo from '@/moduleA/pc/components/home/forms/module/WebsiteInfo.vue'

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
      IndexPage,
      FooterPage,
      WebsiteInfo
    },
    data() {
      return {}
    },

    created() {

    },

    methods: {}
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
  }

  .myWebSite .el-main {
    box-shadow: 10px 10px 5px #888888;
  }
</style>
