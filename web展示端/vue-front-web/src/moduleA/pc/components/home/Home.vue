<template>
<div id="home">
  <Header v-if="isRouterAlive"></Header>
  <router-view v-if="isRouterAlive"></router-view>
</div>
</template>

<script>
import Header from '@/moduleA/pc/components/header/Header.vue'
export default {
  name: 'Home',
  provide () {
    return {
      reload: this.reload
    }
  },
  components: {
    Header
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
    height: 100%
  }
</style>
