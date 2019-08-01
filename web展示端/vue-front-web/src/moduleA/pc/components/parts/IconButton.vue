<template>
  <div class="icon-button">
    <!--模块名称-->
    <div class="moduleName">
      <h2 class="h-h2-white">{{moduleName}}</h2>
    </div>

    <div class="cell-block" v-for="(item, index) in partsDtoListNew" :key="index">
      <el-row :gutter="100">
        <el-col :span="6" v-for="(item2, index2) in item" :key="index2" v-if="item2.status == 1"
                v-on:click="onclickParts(item2)">
          <div class="grid-content bg-purple cell-block-scale">

            <!--aos 动画-->
            <div data-aos="fade-up"
                 data-aos-offset="200"
                 data-aos-delay="10"
                 data-aos-duration="1000"
                 data-aos-easing="ease-in-out"
                 data-aos-mirror="true"
                 data-aos-once="false"
                 data-aos-anchor-placement="top-bottom">

              <a :href="(item2.hyperlinks== '' || item2.hyperlinks == null) ? 'javascript:void(0);' : item2.hyperlinks"
                 target="_blank">
                <el-image
                  style="width: 100%; height: 170px; background-color: #fff;"
                  :src="item2.imageUrl"
                  fit="contain">
                  <!--图片加载失败显示内容-->
                  <div slot="error" class="image-slot">
                    <i class="el-icon-picture"></i>
                  </div>
                </el-image>
              </a>

              <div class="content">
                <div class="title">
                  <a
                    :href="(item2.hyperlinks== '' || item2.hyperlinks == null) ? 'javascript:void(0);' : item2.hyperlinks"
                    target="_blank">
                    <span>{{item2.title}}</span>
                  </a>
                </div>
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
    <!--style="width: auto; height: 127px;;"-->
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
    <!--style="width: auto; height: 127px;"-->
    <!--:src="item.imageUrl"-->
    <!--fit="contain">-->
    <!--&lt;!&ndash;图片加载失败显示内容&ndash;&gt;-->
    <!--<div slot="error" class="image-slot">-->
    <!--<i class="el-icon-picture-outline"></i>-->
    <!--</div>-->
    <!--</el-image>-->
    <!--</a>-->
    <!--</div>-->

    <!--<div class="content ellipsis">-->
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
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->

  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "IconButton",
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
        for (let i = 0; i < parseInt(this.partsDtoList.length / 4); i++) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          array.push(this.partsDtoList[index + 1]);
          array.push(this.partsDtoList[index + 2]);
          array.push(this.partsDtoList[index + 3]);
          index = index + 4;
          this.partsDtoListNew.push(array);
        }
        if (this.partsDtoList.length % 4 == 3) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          array.push(this.partsDtoList[index + 1]);
          array.push(this.partsDtoList[index + 2]);
          this.partsDtoListNew.push(array);
        } else if (this.partsDtoList.length % 4 == 2) {
          let array = new Array();
          array.push(this.partsDtoList[index]);
          array.push(this.partsDtoList[index + 1]);
          this.partsDtoListNew.push(array);
        } else if (this.partsDtoList.length % 4 == 1) {
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
  .icon-button {
    overflow: auto;
    background-color: #373d41;
  }

  .icon-button .moduleName {
    height: 50px;
    padding-top: 50px;
  }

  .icon-button .moduleName .h-h2-white {
    font-size: 24px;
    color: #fff;
    line-height: 150%;
    margin: 0;
    padding: 0 20px;
  }

  .icon-button .moduleName .h-h2-white:after, .h-h2-white:before {
    display: inline-block;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.30);
    padding: 0;
    content: "";
    width: 100px;
    margin: 10px 15px;
  }


  .icon-button .block {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .icon-button .cell {
    /*float: left;*/
    margin: 20px 20px 20px 20px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 200px;
    /*height: 500px;*/
    overflow: auto;
    display: inline-table;
    display: inline-grid;
  }

  .icon-button .cell .content {
    background-color: #040404;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .icon-button .title {
    height: 50px;
    line-height: 50px;
    overflow: scroll;
  }

  .icon-button .title span {
    font-size: 16px;
    color: #fee86f;
  }

  .icon-button .image-slot {
    padding-top: 25%;
    font-size: 50px;
  }

  .icon-button .content {
    background-color: #333;
    margin-top: -4px;
  }

  .icon-button .cell-block {
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .icon-button .cell-block .el-icon-picture {
    background-color: #000;
  }

  /*效果：放大 修改scale(放大的值)*/
  .icon-button .cell-block-scale {
    transition: All 0.4s ease-in-out;
    -webkit-transition: All 0.4s ease-in-out;
    -moz-transition: All 0.4s ease-in-out;
    -o-transition: All 0.4s ease-in-out;
  }

  .icon-button .cell-block-scale:hover {
    background-color: #fee86f;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
  }
</style>
