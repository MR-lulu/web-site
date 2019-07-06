<template>
  <div class="document-center">
    <!--标题-->
    <div class="title">
      <span>{{documentInfo.title}}</span>
    </div>
    <!--分割线-->
    <div class="line">
      <hr/>
    </div>
    <!--创建时间-->
    <div class="time">
      <span>——{{formatDate(documentInfo.serverCreateTime)}}</span>
    </div>
    <!--内容-->
    <div class="txt">
      <span>{{documentInfo.txt}}</span>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "DocumentCenter",
    data() {
      return {}
    },

    created() {
    },

    computed: {
      ...mapState(['documentInfo']),
    },

    watch: {
      documentInfo: function (newValue, oldValue) {
        if (newValue && !Tools.isNull(this.navigationID)) {
          //
        }
      }
    },

    methods: {
      formatDate: function (value) {
        return Tools.formatDate(new Date(value), 'yyyy-MM-dd HH:mm:ss');
      }
    }
  }
</script>

<style>
  .document-center {
    color: hsla(0, 0%, 100%, .8);
    font-size: 0.3rem;
    text-align: center;
  }

  .document-center .title {
    min-height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    padding-top: 0.5rem;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #373d41;
    letter-spacing: 0.1rem;
  }

  .document-center .title span {
    color: #fee86f;
  }

  .document-center .line {
  }

  .document-center .line hr {
    margin-top: 0rem;
    margin-bottom: 0rem;
    border: 0;
    border-top: 1px solid #fee86f;
    opacity: 0.5;
  }

  .document-center .time {
    text-align: right;
    padding-right: 10%;
    height: 1rem;
    line-height: 1rem;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #373d41;
  }

  .document-center .time span {
    color: #9b9ea0;
  }

  .document-center .txt {
    min-height: 10rem;
    line-height: 0.5rem;
    margin-top: 0.1rem;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #373d41;
    text-indent: 2em;
  }
</style>
