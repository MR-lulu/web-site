<template>
  <div class="m-document">
    <div v-for="(item, index) in partsDtoList" :key="index" v-on:click="onclickParts(item)" v-if="item.status == 1">
      <mt-cell is-link :value="item" :title="item.title">
        <span>详情</span>
        <img slot="icon" src="@/assets/images/readdocument.png" width="24" height="24">
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import {onclickParts} from '@/framework/common/js/global.js'

  export default {
    name: "Document",
    props: {
      partsDtoList: {
        type: Array,
        required: true
      },
      flag: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
      }
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
        //  跳转到显示文档页面
        this.$store.commit('changeDocumentInfo', item);
        // 居中显示
        if (this.flag == 14) {
          this.$router.push('/documentCenter');
        } else if (this.flag == 17) {  //  左对齐显示
          this.$router.push('/documentLeft');
        }
      },
    }
  }
</script>

<style>
  .m-document {
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    margin-top: 0.5rem;
  }

  .m-document .mint-cell {
    padding-left: 1%;
    background-color: #373d41;
    min-height: 0.8rem;
    width: 100%;
  }

  .m-document .mint-cell-text {
    color: #fee86f;
  }

  .m-document .mint-cell-value.is-link {
    margin-right: 0.5rem;
    font-size: 0.2rem;
  }

</style>
