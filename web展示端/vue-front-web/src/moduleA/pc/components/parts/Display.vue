<template>
  <div class="display-commodity">
    <div class="block">
      <div class="cell" v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1"
           v-on:click="onclickParts(item)">
        <!--不带有超链接-->
        <div v-if="item.hyperlinks== ''">
          <el-image
            style="width: 400px; height: 320px;"
            :src="item.imageUrl"
            fit="contain">
            <!--图片加载失败显示内容-->
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <!--带有超链接-->
        <div v-else>
          <a :href="item.hyperlinks" target="_blank">
            <el-image
              style="width: 400px; height: 320px;"
              :src="item.imageUrl"
              fit="contain">
              <!--图片加载失败显示内容-->
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </a>
          </div>

        <div class="content">
          <div class="title ellipsis">
            <!--不带有超链接-->
            <div v-if="item.hyperlinks== ''">
              <span>{{item.title}}</span>
            </div>
            <!--带有超链接-->
            <div v-else>
              <a :href="item.hyperlinks" target="_blank">
                <span>{{item.title}}</span>
              </a>
            </div>
          </div>
          <div class="txt">
            <span>{{item.txt}}</span>
          </div>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "Display",
    props: {
      partsDtoList: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
      },
      // 点击零件事件
      onclickParts: function (item) {
        onclickParts(item, this.ProtocolContent, this.communicateManger.httpCommunicate);
      },
    }
  }
</script>

<style>
  .display-commodity {
    overflow: auto;
    background-color: #373d41;
  }

  .display-commodity .block {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .display-commodity .cell {
    /*float: left;*/
    margin: 20px 20px 20px 20px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 450px;
    /*height: 500px;*/
    overflow: auto;
    display: inline-grid;
  }

  .display-commodity .cell .content {
    background-color: #040404;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .display-commodity .title {
    margin-left: 10%;
    margin-right: 10%;
  }

  .display-commodity .title span {
    font-size: 16px;
    color: #fee86f;
  }

  .display-commodity .txt {
    margin-top: 15px;
    margin-left: 5%;
    margin-right: 5%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-indent: 2em;
  }

  .display-commodity .txt span {
    color: rgba(255, 255, 255, 0.8);
    line-height: 25px;
  }

  .display-commodity .image-slot {
    padding-top: 30%;
    font-size: 50px;
  }
</style>
