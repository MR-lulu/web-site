<template>
  <div class="m-icon-button">
    <ul>
      <li v-for="(item, index) in partsDtoList" :key="index" v-if="item.status == 1" v-on:click="onclickParts(item)">
        <!--不带有超链接-->
        <div class="cell" v-if="item.hyperlinks== ''">
          <img class="load" v-if="item.imageUrl == null || item.imageUrl == ''" src="@/assets/images/load.gif">
          <img v-else v-lazy="item.imageUrl">
        </div>
        <!--带有超链接-->
        <div class="cell" v-else>
          <a :href="item.hyperlinks" target="_blank">
            <img class="load" v-if="item.imageUrl == null || item.imageUrl == ''" src="@/assets/images/load.gif">
            <img v-else v-lazy="item.imageUrl">
          </a>
        </div>

        <!--文本内容-->
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
        </div>
      </li>
    </ul>
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
      }
    },
    data() {
      return {}
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
      },
      // 点击零件事件
      onclickParts: function (item) {
        onclickParts(item, this.ProtocolContent, this.communicateManger.httpCommunicate);
      },
    }
  }
</script>

<style>
  .m-icon-button {
    background-color: #373d41;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-top: 0.5rem;
  }

  .m-icon-button image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  .m-icon-button .cell {
    background-color: hsla(0, 0%, 100%, .8);
    margin: 0.2rem;
  }

  .m-icon-button ul {
  }

  .m-icon-button ul li {
    width: 25%;
    float: left;
  }

  .m-icon-button ul li img {
    width: 100%;
  }

  .m-icon-button ul li .load {
    width: 0.8rem;
    height: 0.8rem;
    margin-left: 22%;
  }

  .m-icon-button .content {
    font-size: 0.3rem;
    background-color: #040404;
    padding-bottom: 0.5rem;
  }

  .m-icon-button .content .title {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    overflow: scroll;
  }

  .m-icon-button .content .title span {
    font-size: 0.1rem;
    color: #fee86f;
  }

</style>
