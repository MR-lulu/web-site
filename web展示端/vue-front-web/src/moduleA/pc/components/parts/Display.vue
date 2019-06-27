<template>
  <div class="display-commodity">
    <div>
      <div class="cell" v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1">
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
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        displays: null
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
        this.displays = new Array();
        for (let i = 0; i < 12; i++) {
          let object = new Object();
          object.title = "标题" + i;
          object.content = "中国国际金融股份有限公司（中金或“公司”，3908.HK）是中国首家中外合资投资银行。";
          this.displays.push(object);
        }
      }
    }
  }
</script>

<style>
  .display-commodity {
    overflow: auto;
    background-color: #0d0d0d;
  }

  .display-commodity .cell {
    float: left;
    margin: 20px 20px 20px 20px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 450px;
    /*height: 500px;*/
    overflow: auto;
  }

  .display-commodity .cell .content {
    background-color: #373d41;
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
</style>
