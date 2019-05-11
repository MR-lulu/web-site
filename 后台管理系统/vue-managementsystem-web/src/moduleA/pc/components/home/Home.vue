<template>
<div id="home">
  <!--头部-->
  <Header v-if="isRouterAlive"></Header>
  <!--中间-->
  <router-view v-if="isRouterAlive"></router-view>
  <!--底部-->
  <Footer v-if="isRouterAlive"></Footer>
</div>
</template>

<script>
import Header from '@/moduleA/pc/components/header/Header.vue'
import Footer from '@/moduleA/pc/components/footer/Footer.vue'

export default {
  name: 'Home',
  provide () {
    return {
      reload: this.reload
    }
  },
  components: {
    Header,
    Footer
  },
  data () {
    return {
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
  }
}
</script>

<style scoped>
  #home{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
