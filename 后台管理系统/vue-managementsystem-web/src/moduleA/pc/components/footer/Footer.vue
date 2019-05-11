<template>
  <div class="footer">
    <!--因为底部导航栏的数据比较少，所以重新使用盒子来包装，目的是显示居中-->
    <div class="footer-box">
      <!--第1层-->
      <div class="box-1">
        <div class="left">
          <!--显示电话图标-->
          <div class="call-phone-img">
            <img src="@/assets/images/callphone.png">
          </div>
          <!--显示电话信息-->
          <div class="call-phone-txt">
            <!--联系电话-->
            <div>{{$t('rs.moduleA.20000000014')}}</div>
            <div class="txt">028-1852147951</div>
          </div>
        </div>
        <div class="right">
          <!--联系地址-->
          <div class="address">{{$t('rs.moduleA.20000000015')}}:&nbsp;&nbsp;北京市朝阳区东大街20号高新大厦20楼2013号</div>
          <!--关于我们-->
          <div class="about"><a href="#">{{$t('rs.moduleA.20000000016')}}</a></div>
        </div>
      </div>
      <!--第2层-->
      <div class="box-2">
        <!--友情链接-->
        <div class="cell"><a href="#">{{$t('rs.moduleA.20000000017')}}</a></div>
        <div class="cell"><a href="http://www.ccb.com/" target="_blank">建设银行</a></div>
        <div class="cell"><a href="https://www.taobao.com/" target="_blank">淘宝网</a></div>
        <div class="cell"><a href="http://www.icbc.com.cn/icbc/" target="_blank">工商银行</a></div>
      </div>
      <!--第3层-->
      <div class="box-3">
        <span>© 2009-2019 lyl.com 版权所有 ICP证：浙B3-200002031</span>
        <img src="@/assets/images/beian.png">
        <span>浙公网安备 03017892009970号</span>
      </div>
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
    color: #fff;
    text-align: left;
    margin-top: 5%;
  }

  .footer a {
    color: #73777a;
  }

  .footer a:hover {
    color: #4169E1;
  }

  .footer .footer-box {
    margin: 0 auto;
    width: 80%;
  }

  .footer .footer-box .box-1 {
    font-size: 16px;
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #4b5054;
    box-sizing: border-box;
  }

  .footer .footer-box .box-1 .left {
    border-right: 1px solid #4b5054;
    box-sizing: border-box;
    width: 40%;
  }

  .footer .footer-box .box-1 .left .call-phone-img {
    width: 20%;
    float: left;
  }

  .footer .footer-box .box-1 .left .call-phone-img img {
    width: 50px;
    float: left;
  }

  .footer .footer-box .box-1 .left .call-phone-txt {
    width: 80%;
    float: left;
  }

  .footer .footer-box .box-1 .left .call-phone-txt .txt {
    margin-top: 10px;
  }

  .footer .footer-box .box-1 .right {
    width: 50%;
  }

  .footer .footer-box .box-1 .right .about {
    margin-top: 10px;
  }

  .footer .footer-box .box-1 .right .about a {
    color: #fff;
  }

  .footer .footer-box .box-1 .right .about a:hover {
    color: #4169E1;
  }

  .footer .footer-box .box-2 {
    margin-top: 10px;
  }

  .footer .footer-box .box-2 .cell {
    float: left;
    width: 10%;
  }

  .footer .footer-box .box-3 {
    margin-top: 60px;
    text-align: center;
    color: #9b9ea0;
  }

  .footer .footer-box .box-3 img {
    width: 20px;
    height: 20px;
  }
</style>
