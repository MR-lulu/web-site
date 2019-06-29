<template>
  <div class="icon-button">
    <div class="block">
      <div class="cell" v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1">
        <!--不带有超链接-->
        <div v-if="item.hyperlinks== ''">
          <el-image
            style="width: auto; height: 127px;;"
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
              style="width: auto; height: 127px;"
              :src="item.imageUrl"
              fit="contain">
              <!--图片加载失败显示内容-->
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
          </a>
        </div>

        <div class="content ellipsis">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "IconButton",
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
      }
    }
  }
</script>

<style>
  .icon-button {
    overflow: auto;
    background-color: #373d41;
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
    display: inline-grid;
  }

  .icon-button .cell .content {
    background-color: #040404;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .icon-button .title {
    margin-left: 10%;
    margin-right: 10%;
  }

  .icon-button .title span {
    font-size: 16px;
    color: #fee86f;
  }

  .icon-button .image-slot {
    padding-top: 45%;
    font-size: 50px;
  }
</style>
