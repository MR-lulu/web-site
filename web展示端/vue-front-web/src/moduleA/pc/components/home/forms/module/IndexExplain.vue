<template>
  <div class="index-explain">
    <div id="jsi-fountain-container" class="container"></div>
    <div class="explain">
      <!--请按照相关文档的要求，来完成网站的创建与编辑，祝您工作愉快！-->
      <span>{{$t('rs.moduleA.20000000148')}}</span>
    </div>
  </div>
</template>

<script>
  import RENDERER from '@/assets/js/horse-animation.js'

  export default {
    name: "IndexExplain",
    data() {
      return {}
    },
    mounted() {
      // 放在created里没有效果
      RENDERER.init();
    },
    beforeDestory() {
      RENDERER.jdugeToStopResize();
    }
  }
</script>

<style>
  .index-explain {
  }

  .index-explain .container {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #000000;
  }

  .index-explain .explain {
    margin-top: 5%;
    font-size: 20px;
    color: brown;
  }
</style>
