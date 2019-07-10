<template>
  <div class="m-home">
    <!--头部-->
    <Header v-if="isRouterAlive"></Header>
    <!--&lt;!&ndash;底部&ndash;&gt;-->
    <!--<Footer v-if="isRouterAlive"></Footer>-->
  </div>
</template>

<script>
  import Header from '@/moduleA/mobile/components/header/Header.vue'

  export default {
    name: 'Home',
    provide() {
      return {
        reload: this.reload
      }
    },
    components: {
      Header
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => {
          this.isRouterAlive = true
        })
      }
    }
  }
</script>

<style scoped>
  .m-home {
    width: 100%;
    height: 100%;
  }
</style>
