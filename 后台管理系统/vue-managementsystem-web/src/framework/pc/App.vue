<template>
  <div id="app" class="fillcontain">
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
  @import url('~@/assets/theme/pc/default/framework/css/common');
</style>
