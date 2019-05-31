<template>
  <div class="home">
    <HomeAdvertising></HomeAdvertising>
    <HomeQuotation></HomeQuotation>
    <PlatformInfo></PlatformInfo>
  </div>
</template>

<script>
  import HomeAdvertising from '@/moduleA/mobile/components/home/homeChildren/homeAdvertising.vue'
  import HomeQuotation from '@/moduleA/mobile/components/home/homeChildren/homeQuotation.vue'
  import PlatformInfo from '@/moduleA/mobile/components/home/homeChildren/platformInfo.vue'

  import {mapState} from 'vuex'
  import Config from '@/framework/common/config/Config.js'
  import {getSysTime} from '@/framework/common/js/global.js'

  export default {
    name: "home",
    data() {
      return {
        //首页定时器
        homeTimer: ''
      };
    },
    components: {
      HomeQuotation,
      HomeAdvertising,
      PlatformInfo
    },
    mounted() {
      this.homeLoad();
    },
    methods: {
      homeLoad() {
        //查询商品信息
        clearInterval(this.homeTimer)
        //交易定时器
        this.homeTimer = setInterval(() => {
          //查询交易时间
          getSysTime(this.communicateManger, this.messageBox, Config.logoHrefUrl, this.homeTimer, '2')
        }, this.refreshTime)
      }
    },
    //销毁组件时,关掉定时器
    beforeDestroy() {
      clearInterval(this.homeTimer)
    },
  };
</script>

<style scoped>
  .home {
    overflow: auto;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
</style>
