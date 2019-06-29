<template>
  <div class="page">
    <!--隐患，假如数据库的零件种类ID发生变化，那么将不会匹配到组件。-->
    <!--预计解决方法：不以零件种类ID作为零件种类的唯一标识，因为（自增ID）会变。-->
    <!--应该使用不会改变的编号来证明零件种类的唯一性。零件种类表新增-->
    <!--一个唯一永远不会改变的编号字段。-->

    <!--循环模块-->
    <div v-if="currentNavigationInfo != null && currentNavigationInfo.modulesDtoList != null">
      <div v-for="(item, index) in currentNavigationInfo.modulesDtoList" :key="index">
        <!--轮播图-->
        <div class="cell" v-if="item.partsTypeId == 13 && item.partsDtoList != null && item.partsDtoList.length != 0">
          <!--因为不确定会有多少个轮播图模块，所以采用父组件传值给子组件，而不是vux.-->
          <SlideShow v-bind:partsDtoList="item.partsDtoList"></SlideShow>
        </div>
        <!--文字文章（居中对齐）-->
        <div class="cell"
             v-else-if="item.partsTypeId == 14 && item.partsDtoList != null && item.partsDtoList.length != 0">
          <DocumentCenter v-bind:partsDtoList="item.partsDtoList"></DocumentCenter>
        </div>
        <!--商品展示-->
        <div class="cell"
             v-else-if="item.partsTypeId == 15 && item.partsDtoList != null && item.partsDtoList.length != 0">
          <Display v-bind:partsDtoList="item.partsDtoList"></Display>
        </div>
        <!--图标按钮-->
        <div class="cell"
             v-else-if="item.partsTypeId == 16 && item.partsDtoList != null && item.partsDtoList.length != 0">
          <IconButton v-bind:partsDtoList="item.partsDtoList"></IconButton>
        </div>
        <!--文字文章（左对齐）-->
        <div class="cell"
             v-else-if="item.partsTypeId == 17 && item.partsDtoList != null && item.partsDtoList.length != 0">
          <Document v-bind:partsDtoList="item.partsDtoList"></Document>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Display from '@/moduleA/pc/components/parts/Display.vue'
  import Document from '@/moduleA/pc/components/parts/Document.vue'
  import IconButton from '@/moduleA/pc/components/parts/IconButton.vue'
  import SlideShow from '@/moduleA/pc/components/parts/SlideShow.vue'
  import DocumentCenter from '@/moduleA/pc/components/parts/DocumentCenter.vue'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "Page",
    components: {
      Display,
      Document,
      IconButton,
      SlideShow,
      DocumentCenter
    },
    data() {
      return {
        currentNavigationInfo: null,  // 当前选中的导航信息
      }
    },
    computed: {
      ...mapState(['navigationMapInfo', 'navigationID']),
    },
    created() {

    },
    watch: {
      navigationMapInfo: function (newValue, oldValue) {
        if (newValue && !Tools.isNull(this.navigationID)) {
          this.currentNavigationInfo = this.navigationMapInfo.get(this.navigationID);
        }
      },
      navigationID: function (newValue, oldValue) {
        if (newValue && !Tools.isNull(this.navigationMapInfo)) {
          this.currentNavigationInfo = this.navigationMapInfo.get(this.navigationID);
        }
      }
    },
    methods: {}
  }
</script>

<style>
  .page {
    margin-top: 30px;
    margin-left: 1%;
    margin-right: 1%;
  }

  .page .cell {
    margin-top: 50px;
  }

</style>
