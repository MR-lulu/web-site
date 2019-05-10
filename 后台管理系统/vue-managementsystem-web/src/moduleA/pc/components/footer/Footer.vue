<template>
  <div class="footer">
    <!--因为底部导航栏的数据比较少，所以重新使用盒子来包装，目的是显示居中-->
    <div class="footer-box">
      <!--第1层-->
      <div class="box-1">
        <div class="left"></div>
        <div class="right"></div>
      </div>
      <!--第2层-->
      <div class="box-2"></div>
      <!--第3层-->
      <div class="box-3"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style>
  .footer {
    padding-top: 30px;
    background-color: #373d41;
    min-height: 220px;
  }

  .footer .footer-box {
  }

  .footer .footer-box .box-1 {
  }

  .footer .footer-box .box-1 .left {
  }

  .footer .footer-box .box-1 .right {
  }

  .footer .footer-box .box-2 {
  }

  .footer .footer-box .box-3 {
  }


</style>
