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

        <div class="title">
          <!--添加导航-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'NavigationAdd'">{{$t('rs.moduleA.20000000156')}}</el-button>
          <!--添加模块-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'ModuleAdd'">{{$t('rs.moduleA.20000000157')}}</el-button>
          <!--添加零件-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'PartsAdd'">{{$t('rs.moduleA.20000000158')}}</el-button>
          <!--修改导航-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'NavigationDetail'">{{$t('rs.moduleA.20000000159')}}</el-button>
          <!--修改模块-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'ModuleDetail'">{{$t('rs.moduleA.20000000160')}}</el-button>
          <!--修改零件-->
          <el-button type="success" icon="el-icon-location-information"  v-if="isRouterAlive == 'PartsDetail'">{{$t('rs.moduleA.20000000161')}}</el-button>
        </div>

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
          <BackgroundimgAdd v-else-if="isRouterAlive == 'BackgroundimgAdd'"></BackgroundimgAdd>
          <!--默认显示说明-->
          <IndexExplain v-else="isRouterAlive == 'IndexExplain'"></IndexExplain>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import IndexExplain from '@/moduleA/pc/components/home/forms/module/IndexExplain.vue'
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
      IndexExplain,
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
        isRouterAlive: 'IndexExplain',
        webModuleTreeClickTypeNew: null,
        webModuleTree1New: null
      }
    },

    computed: {
      ...mapState(['webModuleTreeClickType', 'webModuleTree']),
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
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
              // 打开默认页面
              this.isRouterAlive = 'IndexExplain';
            } else if (this.webModuleTreeClickTypeNew.level == 2) {
              if (this.webModuleTreeClickTypeNew.flag == 'navigation') {
                // 查看导航
                this.isRouterAlive = 'NavigationDetail'
              }else if (this.webModuleTreeClickTypeNew.flag == 'webTop') {
                // 查看页头信息
                this.isRouterAlive = 'WebTop'
              }else if (this.webModuleTreeClickTypeNew.flag == 'webBottom') {
                // 查看页尾信息
                this.isRouterAlive = 'WebBottom'
              }else if (this.webModuleTreeClickTypeNew.flag == 'webInfo') {
                // 查看网站信息
                this.isRouterAlive = 'WebsiteInfo'
              }
            }else if(this.webModuleTreeClickTypeNew.level == 3) {
              if (this.webModuleTreeClickTypeNew.flag == 'modules') {
                // 查看模块
                this.isRouterAlive = 'ModuleDetail'
              }else if (this.webModuleTreeClickTypeNew.flag == 'commonInfo'){
                // 查看公共信息
                this.isRouterAlive = 'BackgroundimgAdd'
              }
            }else if(this.webModuleTreeClickTypeNew.level == 4) {
              // 查看零件
              this.isRouterAlive = 'PartsDetail'
            }
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
