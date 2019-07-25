<template>
  <div class="slide-show">
    <el-carousel :interval="4000" height="600px" :autoplay="false" @change="change">
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
    background-color: #373d41;
    margin-left: 25%;
  }

  .slide-show .content span {
    color: #9b9ea0;
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
</style>
