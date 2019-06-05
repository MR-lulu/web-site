<template>
  <div id="app" class="">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      theme: this.$store.state.style.theme,
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  },
  beforeCreate () {
    // if (this.$route.path === '/') {
    //   this.$router.push({path: '/login'})
    // }
  }
}
</script>

<style lang="less">
  @import url('~@/assets/theme/pc/blue/framework/css/common');

  /*全局设置el-table的滚动条样式*/
  .el-table__body-wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .el-table__body-wrapper::-webkit-scrollbar-thumb {
    background-color: #ddd;
    border-radius: 3px;
  }
</style>
