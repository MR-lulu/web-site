<template>
  <div class="index-explain">
    <div class="ele-container">
      <div class="ele-wrapper">
        <div class="ele-tail"></div>
        <div class="ele-body">
          <div class="ele-head">
            <div class="ele-eyebrows"></div>
            <div class="ele-eyes"></div>
            <div class="ele-mouth"></div>
            <div class="ele-fang-front"></div>
            <div class="ele-fang-back"></div>
            <div class="ele-ear"></div>
          </div>
        </div>
        <div class="ele-leg-1 ele-leg-back">
          <div class="ele-foot"></div>
        </div>
        <div class="ele-leg-2 ele-leg-front">
          <div class="ele-foot"></div>
        </div>
        <div class="ele-leg-3 ele-leg-back">
          <div class="ele-foot"></div>
        </div>
        <div class="ele-leg-4 ele-leg-front">
          <div class="ele-foot"></div>
        </div>
      </div>
    </div>

    <div class="explain">
      <!--请按照相关文档的要求，来完成网站的创建与编辑，祝您工作愉快！-->
      <span>{{$t('rs.moduleA.20000000148')}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexExplain",
    data() {
      return {
        object: null,
      }
    }
  }
</script>

<style>
  .index-explain {
  }

  .index-explain  .ele-container {
    height: -webkit-fill-available;
  }
  .index-explain .explain {
    margin-top: 5%;
    font-size: 20px;
    color: brown;
  }
</style>
