<template>
  <div class="display-commodity">
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
          <div class="txt">
            <span>{{item.txt}}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "Display",
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
  .display-commodity {
    overflow: auto;
    background-color: #373d41;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-top: 0.5rem;
  }

  .display-commodity image[lazy=loading] {
    width: 40px;
    height: 300px;
    margin: auto;
  }

  .display-commodity .cell {
    background-color: hsla(0, 0%, 100%, .8);
    min-height: 4rem;
  }

  .display-commodity ul {
  }

  .display-commodity ul li {
    width: 100%;
    min-height: 2rem;
    /*border: 1px solid;*/
  }

  .display-commodity ul li img {
    width: 100%;
  }

  .display-commodity ul li .load {
    width: 1rem;
    height: 1rem;
    margin-left: 45%;
    margin-top: 20%;
  }

  .display-commodity .content {
    font-size: 0.3rem;
    background-color: rgba(0, 0, 0, 0.3);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .display-commodity .content .title {
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    overflow: scroll;
  }

  .display-commodity .content .title span {
    font-size: 0.4rem;
    color: #fee86f;
  }

  .display-commodity .content .txt {
    margin-top: 0.2rem;
    margin-left: 5%;
    margin-right: 5%;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    text-indent: 2em;
  }

  .display-commodity .content .txt span {
    color: hsla(0, 0%, 100%, .8);
    line-height: 25px;
  }

</style>
