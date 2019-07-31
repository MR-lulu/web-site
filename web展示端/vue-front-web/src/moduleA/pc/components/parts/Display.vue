<template>
  <div class="display-commodity">
    <!--模块名称-->
    <div class="moduleName">
      <h2 class="h-h2-white">{{moduleName}}</h2>
    </div>

    <div class="cell-block" v-for="(item, index) in partsDtoListNew" :key="index">
      <el-row :gutter="50">
        <el-col :span="8" v-for="(item2, index2) in item" :key="index2" v-if="item2.status == 1"
                v-on:click="onclickParts(item2)">
          <div class="grid-content bg-purple">
            <a :href="(item2.hyperlinks== '' || item2.hyperlinks == null) ? 'javascript:void(0);' : item2.hyperlinks"
               target="_blank">
              <el-image
                style="width: 100%; height: 280px; background-color: #000;"
                :src="item2.imageUrl"
                fit="contain">
                <!--图片加载失败显示内容-->
                <div slot="error" class="image-slot">
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </a>

            <div class="content">
              <div class="title ellipsis">
                <a
                  :href="(item2.hyperlinks== '' || item2.hyperlinks == null) ? 'javascript:void(0);' : item2.hyperlinks"
                  target="_blank">
                  <span>{{item2.title}}</span>
                </a>
              </div>
              <div class="txt">
                <span>{{item2.txt}}</span>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>


    <!--<div class="block">-->
    <!--<div class="cell" v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1"-->
    <!--v-on:click="onclickParts(item)">-->
    <!--&lt;!&ndash;不带有超链接&ndash;&gt;-->
    <!--<div v-if="item.hyperlinks== ''">-->
    <!--<el-image-->
    <!--style="width: 400px; height: 320px;"-->
    <!--:src="item.imageUrl"-->
    <!--fit="contain">-->
    <!--&lt;!&ndash;图片加载失败显示内容&ndash;&gt;-->
    <!--<div slot="error" class="image-slot">-->
    <!--<i class="el-icon-picture-outline"></i>-->
    <!--</div>-->
    <!--</el-image>-->
    <!--</div>-->
    <!--&lt;!&ndash;带有超链接&ndash;&gt;-->
    <!--<div v-else>-->
    <!--<a :href="item.hyperlinks" target="_blank">-->
    <!--<el-image-->
    <!--style="width: 400px; height: 320px;"-->
    <!--:src="item.imageUrl"-->
    <!--fit="contain">-->
    <!--&lt;!&ndash;图片加载失败显示内容&ndash;&gt;-->
    <!--<div slot="error" class="image-slot">-->
    <!--<i class="el-icon-picture-outline"></i>-->
    <!--</div>-->
    <!--</el-image>-->
    <!--</a>-->
    <!--</div>-->

    <!--<div class="content">-->
    <!--<div class="title ellipsis">-->
    <!--&lt;!&ndash;不带有超链接&ndash;&gt;-->
    <!--<div v-if="item.hyperlinks== ''">-->
    <!--<span>{{item.title}}</span>-->
    <!--</div>-->
    <!--&lt;!&ndash;带有超链接&ndash;&gt;-->
    <!--<div v-else>-->
    <!--<a :href="item.hyperlinks" target="_blank">-->
    <!--<span>{{item.title}}</span>-->
    <!--</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--<div class="txt">-->
    <!--<span>{{item.txt}}</span>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
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
      },
      moduleName: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        partsDtoListNew: []
      }
    },

    created() {
      this.initData();
    },

    watch: {
      partsDtoList: function (newValue, oldValue) {
        if (newValue) {
          this.initData();
        }
      }
    },

    methods: {
      initData: function () {
        this.partsDtoListNew = new Array();
        let index = 0;
        for (let i = 0; i < parseInt(this.partsDtoList.length / 3); i++) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          array.push(this.partsDtoList[index + 1]);
          array.push(this.partsDtoList[index + 2]);
          index = index + 3;
          this.partsDtoListNew.push(array);
        }
        if (this.partsDtoList.length % 3 == 2) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          array.push(this.partsDtoList[index + 1]);
          this.partsDtoListNew.push(array);
        } else if (this.partsDtoList.length % 3 == 1) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          this.partsDtoListNew.push(array);
        }
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
    background-color: #222;
  }

  .display-commodity .moduleName {
    height: 50px;
    padding-top: 50px;
  }

  .display-commodity .moduleName .h-h2-white {
    font-size: 24px;
    color: #fff;
    line-height: 150%;
    margin: 0;
    padding: 0 20px;
  }

  .display-commodity .moduleName .h-h2-white:after, .h-h2-white:before {
    display: inline-block;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.30);
    padding: 0;
    content: "";
    width: 100px;
    margin: 10px 15px;
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
    display: inline-table;
    display: inline-grid;
  }

  .display-commodity .cell .content {
    background-color: #040404;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .display-commodity .title {
    height: 50px;
    line-height: 50px;
  }

  .display-commodity .title span {
    font-size: 16px;
    color: #fee86f;
  }

  .display-commodity .txt {
    margin-left: 5%;
    margin-right: 5%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-indent: 2em;
    padding-bottom: 15px;
  }

  .display-commodity .txt span {
    color: rgba(255, 255, 255, 0.8);
    line-height: 25px;
  }

  .display-commodity .image-slot {
    padding-top: 30%;
    font-size: 50px;
  }

  .display-commodity .content {
    background-color: #333;
    margin-top: -4px;
  }

  .display-commodity .cell-block {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
  }
</style>
