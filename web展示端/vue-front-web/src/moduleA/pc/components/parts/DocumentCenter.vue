<template>
  <div class="document-center">
    <el-collapse accordion v-model="activeNames" @change="handleChange">
      <el-collapse-item v-for="(item, index) in document" :key="index" :title="item.title" :name="index">
        <div>{{item.content}}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    name: "DocumentCenter",
    data() {
      return {
        document: null,
        activeNames: ['1']
      }
    },

    created() {
      this.initData();
    },

    methods: {
      initData: function () {
        this.document = new Array();
        for (let i = 0; i < 6; i++) {
          let object = new Object();
          object.title = "标题" + i;
          object.content = "1、秋起，有微风滑过的清香，有阳光照射的明媚，有树叶儿滑落的声响，还有，一抹抹微凉拂过心头的舒畅。微风，轻掀起衣角，轻吻着发丝，不经意间，那些春花夏梦的记忆，就感染这个多情的秋季。于是，心，慢慢的沉浸，轻轻的驻足，让心停歇，聆听风，倾听雨，原来，岁月处处都充满着暖意……\n" +
            "\n" +
            "　　2、岁月轮转，时光静静的流逝，金秋的风，悄悄地拂过窗棂，轻轻地掀起清秋的面纱，听风，唱响时间的流淌，穿过，岁月沧桑的河岸，仿佛，经年就在眼前，那些消失在岁月长河里的人和事，还有一些一些的美丽，都化着点滴斑斓，飞散在这个季节深处。岁月，就是一轮维修机，有再多磨合都已不在重要，重要的是有一颗宽容，淡定，从容的心。守着一份份清淡，生活已不再那么烦躁，或许，生活就是要我们简单随和，就是最好……\n" +
            "\n" +
            "　　3、当季节逐渐走向冷凉，那些花丛草间的美丽，都已被枯黄所逐渐替代 。岁月，就是一道道流程相拼的组合，无论那一程时光失去美丽，都会有一段记忆在心底存着。人的思维有时候就是那样脆弱，即使，一滴滴的念想，都能牵动着脉搏为此波动。怀念那一段段时光，怀念那些有山，有水，有花，有草的日子里，相互走过的岁月，相拥过的时光，相许过的年华。看青春的影子逐渐远去，那些曾经拥有的，失去的，美丽的，忧伤的，都只不过是一场梦。唯此，心歇淡然，守望宁静，安放一处淡泊，于岁月深处，随风起舞，将爱依旧继续……";
          this.document.push(object);
        }
      },
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style>
  .document-center {
  }
</style>
