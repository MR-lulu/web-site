<template>
<div id="home">
  <!--背景图片-->
  <div id="background-img" style="position:fixed; left:0px; top:0px; width:100%; height:100%; z-index: -10000;"
       v-if="commonInfo != null && commonInfo.bgUrl != null && commonInfo.bgUrl != ''">
    <img :src="commonInfo.bgUrl" width="100%" height="100%">
  </div>
  <!--头部-->
  <Header v-if="isRouterAlive"></Header>
  <!--中间-->
  <Page v-if="isRouterAlive"></Page>
  <!--底部-->
  <Footer v-if="isRouterAlive"></Footer>
</div>
</template>

<script>
import Header from '@/moduleA/pc/components/header/Header.vue'
import Footer from '@/moduleA/pc/components/footer/Footer.vue'
import Page from '@/moduleA/pc/components/home/factory/Page.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  provide () {
    return {
      reload: this.reload
    }
  },
  components: {
    Header,
    Footer,
    Page
  },

  data () {
    return {
      isRouterAlive: true
    }
  },
  computed: {
    ...mapState(['commonInfo']),
  },
  watch: {
    commonInfo: function (newValue, oldValue) {
      if (newValue) {
        // 修改网站背景
        //document.querySelector('body').setAttribute('style', 'width:100%; height:auto; background-color: rgb(255,255,255,0);');
      }
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
  }
</style>
