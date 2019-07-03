<template>
  <div class="document">
    <el-collapse accordion v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item, index) in partsDtoList" :key="index" :title="(index + 1)+'. '+ item.title"
                        :name="index" v-if="item.status == 1" v-on:click="onclickParts(item)">
        {{item.txt}}
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "Document",
    props: {
      partsDtoList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        activeNames: ['1']
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
    }
  }
</script>

<style>
  .document {
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
</style>
