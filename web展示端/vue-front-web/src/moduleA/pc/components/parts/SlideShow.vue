<template>
  <div class="slide-show">
    <el-carousel :interval="4000" type="card" height="400px">
      <el-carousel-item v-for="item in 6" :key="item">
        <!--<h3 class="medium">{{ item }}</h3>-->
        <img :src="imageUrl[item]">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>

  export default {
    name: "SlideShow",
    data() {
      return {
        imageUrl: [],
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
        for (let i = 1; i <= 6; i++) {
          this.imageUrl[i] = "../../assets/images/photo/" + (i) + ".jpg";
        }
      }
    }
  }
</script>

<style>
  .slide-show {
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
  }

  .slide-show .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
