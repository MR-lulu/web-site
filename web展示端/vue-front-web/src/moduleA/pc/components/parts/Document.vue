<template>
  <div class="document">
    <!--模块名称-->
    <div class="moduleName">
      <h2 class="h-h2-white">{{moduleName}}</h2>
    </div>


    <!--<el-collapse  v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item, index) in partsDtoList" :key="index" :title="item.title"
                        :name="index" v-if="item.status == 1" v-on:click="onclickParts(item)">
        {{item.txt}}
      </el-collapse-item>
    </el-collapse>-->

    <div class="cell" v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1"
         v-on:click="onclickParts(item)">
      <!--标题-->
      <div class="title">
        <span>{{item.title}}</span>
      </div>
      <!--分割线-->
      <div class="line">
        <hr/>
      </div>
      <!--创建时间-->
      <div class="time">
        <span>——{{formatDate(item.serverCreateTime)}}</span>
      </div>
      <!--内容-->
      <div class="txt">
        <span>{{item.txt}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "Document",
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
        activeNames: [],
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
      },
      handleChange(val) {
        console.log(val);
      },
      // 点击零件事件
      onclickParts: function (item) {
        onclickParts(item, this.ProtocolContent, this.communicateManger.httpCommunicate);
      },
      formatDate: function (value) {
        return Tools.formatDate(new Date(value), 'yyyy-MM-dd HH:mm:ss');
      }
    }
  }
</script>

<style>
  .document {
    background-color: #222;
  }

  .document .moduleName {
    height: 50px;
    padding-top: 50px;
  }

  .document .moduleName .h-h2-white {
    font-size: 24px;
    color: #fff;
    line-height: 150%;
    margin: 0;
    padding: 0 20px;
  }

  .document .moduleName .h-h2-white:after, .h-h2-white:before {
    display: inline-block;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.30);
    padding: 0;
    content: "";
    width: 100px;
    margin: 10px 15px;
  }

  .document .el-collapse-item__header {
    padding-left: 1%;
    background-color: #373d41;
    font-size: 16px;
    color: #fee86f;
  }

  .document .el-collapse-item__content {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #373d41;
    color: rgba(255, 255, 255, 0.8);
    text-align: left;
    text-indent: 2em;
  }

  .document {
    color: hsla(0, 0%, 100%, .8);
    font-size: 14px;
    text-align: center;
  }

  .document .cell {

  }

  .document .cell .title {
    min-height: 46px;
    line-height: 46px;
    font-size: 18px;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #373d41;
    letter-spacing: 10px;
  }

  .document .cell .title span {
    color: #fee86f;
  }

  .document .cell .line {
  }

  .document .cell .line hr {
    margin-top: 0rem;
    margin-bottom: 0rem;
    border: 0;
    border-top: 1px solid #fee86f;
    opacity: 0.5;
  }

  .document .cell .time {
    text-align: right;
    height: 30px;
    line-height: 30px;
    padding-left: 5%;
    padding-right: 25%;
    /*background-color: #373d41;*/
  }

  .document .cell .time span {
    color: #9b9ea0;
  }

  .document .cell .txt {
    min-height: 100px;
    line-height: 30px;
    padding-left: 10%;
    padding-right: 10%;
    /*background-color: #373d41;*/
    text-indent: 2em;
    padding-bottom: 10px;
    border-top: 2px solid #000;
    padding-top: 10px;
    text-align: left;
    font-size: 16px;
  }
</style>
