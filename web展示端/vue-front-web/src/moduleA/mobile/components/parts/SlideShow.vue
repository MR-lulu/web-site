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
      <div class="title ellipsis-2"><span>{{title}}</span></div>
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
  }

  .m-slide-show .content {
    width: 90%;
    height: 1rem;
    background-color: #373d41;
    margin: 0 auto;
  }

  .m-slide-show .content .ellipsis-2 {
    overflow: hidden;
    /*text-overflow: ellipsis;*/
    white-space: nowrap;
  }

  .m-slide-show .content span {
    color: #9b9ea0;
  }

  .m-slide-show .content .title {
    font-size: 0.3rem;
    width: 20%;
    float: left;
    line-height: 1rem;
    text-align: center;
  }

  .m-slide-show .content .txt {
    height: 100%;
    float: left;
    border-left: 1px dashed #fee974;
    overflow: hidden;
    width: 70%;
    font-size: 0.1rem;
    padding-left: 0.2rem;
    justify-content: center;
    display: grid;
    align-items: Center;
    overflow: scroll;
  }
</style>
