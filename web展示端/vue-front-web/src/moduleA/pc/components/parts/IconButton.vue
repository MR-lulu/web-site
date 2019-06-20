<template>
  <div class="icon-buttom">
    <div class="demo-image">
      <div class="block" v-for="(item, index) in iconButtons" :key="index">
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          fit="contain">

          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="content">
          <span>{{item.content}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IconButton",
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        iconButtons: null
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
        this.iconButtons = new Array();
        for (let i = 0; i < 12; i++) {
          let object = new Object();
          object.title = "标题" + i;
          object.content = "中国国际金融股份有限公司（中金或“公司”，3908.HK）是中国首家中外合资投资银行。";
          this.iconButtons.push(object);
        }
      }
    }
  }
</script>

<style>
  .icon-buttom {
  }
</style>
