<template>
  <div class="slide-show">
    <el-carousel :interval="4000" height="600px" :autoplay="true" @change="change">
      <el-carousel-item v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1">
        <!--不带有超链接-->
        <div class="img" v-if="item.hyperlinks== ''" v-on:click="onclickParts(item)">
          <img :src="item.imageUrl">
        </div>
        <!--带有超链接-->
        <div class="img" v-else v-on:click="onclickParts(item)">
          <a :href="item.hyperlinks" target="_blank">
            <img :src="item.imageUrl">
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>

    <div class="content">
      <!--标题-->
      <div class="title"><span>{{title}}</span></div>
      <!--简介-->
      <div class="txt"><span>{{txt}}</span></div>
    </div>

    <!--向下滚动指示-->
    <header class="hero">
      <span class="hero__scroll" aos="fade-up" aos-easing="ease" aos-delay="800">
		    Scroll down <br>
		    <i class="chevron bottom"></i>
	    </span>
    </header>
  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "SlideShow",
    props: {
      partsDtoList: {
        type: Array,
        required: true
      },
      moduleName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        title: '',  // 标题
        txt: '',  // 简介
      }
    },

    created() {
      this.initData();
    },

    mounted() {
      $('.hero__scroll').on('click', function (e) {
        $('html, body').animate({
          scrollTop: $(window).height()
        }, 3000);
      });
    },

    methods: {
      initData: function () {
      },
      change: function (index) {
        this.title = this.partsDtoList[index].title;
        this.txt = this.partsDtoList[index].txt;
      },

      // 点击零件事件
      onclickParts: function (item) {
        onclickParts(item, this.ProtocolContent, this.communicateManger.httpCommunicate);
      },
    }
  }
</script>

<style>
  .slide-show {
  }

  .slide-show .img {
    width: 100%;
    height: 100%;
  }

  .slide-show .img a {
    width: 100%;
    height: 100%;
  }

  .slide-show .img img {
    width: 100%;
    height: 100%;
  }

  .slide-show .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .slide-show .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    display: flex;
    justify-content: center;
    align-items: Center;
  }

  .slide-show .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
    display: flex;
    justify-content: center;
    align-items: Center;
  }

  .slide-show .content {
    width: 50%;
    height: auto;
    display: flex;
    justify-content: left;
    align-items: Center;
    background-color: rgb(55, 61, 65, 0.8);
    margin-left: 25%;
  }

  .slide-show .content span {
    color: #F8F8FF;
  }

  .slide-show .content .title {
    font-size: 16px;
    height: auto;
    min-width: 20%;
    float: left;
  }

  .slide-show .content .txt {
    margin-top: 10px;
    height: 100%;
    float: left;
    text-align: left;
    border-left: 1px dashed #fee974;
    padding-left: 15px;
    margin-bottom: 10px;
  }


  /**
 * Hero
 */
  .slide-show .hero {
    width: 100%;
    height: 25vh;
    position: relative;
    overflow: hidden;
    color: #FFF;
    text-align: center;
  }

  .slide-show .hero__scroll {
    position: absolute;
    bottom: 60px;
    width: 200px;
    margin: auto;
    display: block;
    cursor: pointer;
    padding-bottom: 40px;
    left: 0;
    right: 0;
    text-transform: uppercase;
  }

  .slide-show .hero__scroll .chevron {
    margin-top: 20px;
    display: block;
    -webkit-animation: pulse 2s infinite;
    animation: pulse 2s infinite;
    color: #fee86f;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    50% {
      -webkit-transform: translate(0, 10px);
      transform: translate(0, 10px);
    }

    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }

    50% {
      -webkit-transform: translate(0, 10px);
      transform: translate(0, 10px);
    }

    100% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
  }

  .slide-show .octocat img {
    display: block;
    width: 100%;
  }

  .slide-show .chevron::before {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 20px;
    position: relative;
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    vertical-align: top;
    width: 20px;
  }

  .slide-show .chevron.right:before {
    left: 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .slide-show .chevron.bottom:before {
    top: 0;
    -webkit-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  .slide-show .chevron.left:before {
    left: 0.25em;
    -webkit-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }

</style>
