<template>
  <div class="partsTypeChart">
    <!--图标-->
    <div id="myChart" class="myChart-display"></div>
  </div>
</template>

<script>
  export default {
    name: "PartsTypeChart",
    data() {
      return {
        screenWidth: document.body.clientWidth,   // 这里是给到了一个默认值,浏览器窗口大小 （这个很重要）
        myChart: []  //图表实例，多个
      }
    },
    created() {

    },
    mounted() {
      // 初始化图表数据
      this.echartDataInit()
      //监听窗口大小改变
      const that = this
      window.onresize = () => {
        return (() => {
          that.screenWidth = document.body.clientWidth
        })()
      }
    },

    watch: {
      //监听窗口大小改变
      screenWidth(val) {
        this.screenWidth = val
        // 销毁图标实例
        for (let i = 0; i < this.myChart.length; i++) {
          this.myChart[i].dispose();
        }
        // 初始化图表数据
        this.echartDataInit()
      }
    },

    methods: {
      //图表数据初始化，格式化
      echartDataInit: function () {
        let dataAxis = ['点0010101019', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        // 循环输出多张图表
        for (let i = 0; i < 1; i++) {
          this.myChart[i] = this.drawLine(dataAxis, data, '零件点击量统计图-' + i);
        }
      },
      drawLine(dataAxis, data, title) {
        //echart图初始化
        let container = document.getElementById('myChart');
        //自适应窗口大小
        container.style.width = window.innerWidth * 0.90 + 'px';
        container.style.height = window.innerHeight * 0.95 + 'px';
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(container)
        // 绘制图表
        myChart.setOption({
          loading: true,
          title: {
            text: title,
            x: 'center',
            y: 'top',
            textAlign: 'center'
          },
          tooltip: {},
          xAxis: {
            data: dataAxis,
            interval: 0,
            axisLabel: {
              interval: 0,
              rotate: 40
            },
            axisTick: {
              show: true
            },
            axisLine: {
              show: false
            },
            z: 10
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: '#999'
              }
            }
          },
          dataZoom: [
            {
              type: 'inside'
            }
          ],
          series: [
            {
              name: '点击量',
              type: 'bar',
              itemStyle: {
                normal: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#83bff6'},
                      {offset: 0.5, color: '#188df0'},
                      {offset: 1, color: '#188df0'}
                    ]
                  )
                },
                emphasis: {
                  color: new this.$echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: '#2378f7'},
                      {offset: 0.7, color: '#2378f7'},
                      {offset: 1, color: '#83bff6'}
                    ]
                  )
                }
              },
              data: data
            }
          ],

        });
        return myChart;
      }
    }
  }
</script>

<style>
  .partsTypeChart {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    border: 1px solid #ebeef5;
    background-color: #F0FFF0;
  }

  .partsTypeChart .myChart-display {
    margin: 0 auto;
  }
</style>
