<template>
  <div id="head">
    <header class="header-box">
      <div class="header">
        <img class="left-btn-1" src="@/assets/market_aaaex/img/back.png" @click="back()">
        <div class="header-con">
          <div class="head-tag-item">
            <router-link to='/main/home' class="tag-item-link">首页</router-link>
          </div>
          <div class="head-tag-item">
            <router-link to="/main/quotation" class="tag-item-link">行情</router-link>
          </div>
          <div class="head-tag-item">
            <router-link to="/main/mtrade" class="tag-item-link">交易</router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  import Config from '@/framework/common/config/Config.js'

  export default {
    name: "Header",
    provide() {
    },
    components: {},
    data() {
      return {};
    },
    methods: {
      back() {
        //首页后退,则跳转到外层
        if (this.$route.path == '/main/home') {
          window.location.href = Config.logoHrefUrl
        } else {
          window.history.back()
        }
      }
    },
  };
</script>

<style scoped>
  .header-box {
    /* height: 7%; */
    overflow: hidden;
  }

  .header-box .header {
    position: relative;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background-color: #0d0d0d;
    color: #666666;
    text-align: center;
    font-size: 0.34rem;
    box-sizing: content-box;
  }

  .header-box .header .header-con {
    width: 2.97rem;
    float: right;
    margin-right: 0.02rem;
    height: 1rem;
    line-height: 0.6rem;
    box-sizing: border-box;
    padding: 0.18rem 0;
    text-align: center;
  }

  .header-box .header .header-con .head-tag-item {
    width: 33.333%;
    float: left;
    text-align: center;
  }

  .header-box .header .header-con .head-tag-item .tag-item-link {
    display: inline-block;
    width: auto;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    color: rgba(255, 255, 255, 0.49);
    font-family: PingFang-SC-Bold;
  }

  .header-box .header .header-con .head-tag-item .tag-item-link.active {
    border-bottom: 0.04rem solid #fee971;
    color: #fee971;
  }

  .header-box .header .left-btn-1 {
    float: left;
    margin-left: 0.2rem;
    margin-top: 0.3rem;
    width: 0.41rem;
    height: 0.41rem;
  }
</style>
