<template>
  <div class="m-slide-show">

    <mt-swipe :auto="4000" @change="change">
      <mt-swipe-item v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1">
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
      </mt-swipe-item>
    </mt-swipe>

    <div class="content">
      <!--标题-->
      <div class="title"><span>{{title}}</span></div>
      <!--简介-->
      <div class="txt"><span>{{txt}}</span></div>
    </div>
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

    methods: {
      initData: function () {
        this.title = this.partsDtoList[0].title;
        this.txt = this.partsDtoList[0].txt;
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
  .m-slide-show {
    height: 6rem;
  }

  .m-slide-show .img {
    width: 100%;
    height: 100%;
  }

  .m-slide-show .img a {
    width: 100%;
    height: 100%;
  }

  .m-slide-show .img img {
    width: 100%;
    height: 100%;
  }

  .m-slide-show .mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 5rem;
    width: 100%;
  }

  .m-slide-show .content {
    float: left;
    width: 100%;
    height: auto;
    text-align: center;
    overflow: auto;
    -ms-flex-align: Center;
    align-items: Center;
    background-color: #373d41;
    margin-bottom: 1rem;
  }

  .m-slide-show .content .title {
    font-size: 0.3rem;
    line-height: 0.45rem;
    margin-top: 5%;
    margin-left: 5%;
    margin-right: 5%;
  }

  .m-slide-show .content .title span{
    color: #fee86f;
  }

  .m-slide-show .content .txt {
    font-size: 0.25rem;
    line-height: 0.45rem;
    margin: 5%;
  }

  .m-slide-show .content .txt span{
    color: #fff;
  }
</style>
