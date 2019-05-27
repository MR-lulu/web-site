<template>
  <div class="partsChart">
    <!--图表-->
    <div id="myChart" class="myChart-display"></div>
  </div>
</template>

<script>
  import PartsRequestVO from '@/moduleA/common/js/model/PartsRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "PartsChart",
    data() {
      return {
        screenWidth: document.body.clientWidth, // 这里是给到了一个默认值,浏览器窗口大小 （这个很重要）
        myChart: null,  //图表实例
        partsChartTimer: '',  // 定时器
        dataAxis: [],
        data: []
      }
    },
    created() {
      // 进入先请求一次数据
      this.getPartsListOne();
      // 定时获取零件信息
      this.getPartsList();
    },
    mounted() {
      // // 初始化图表数据
      // this.echartDataInit()
      //监听窗口大小改变
      const _that = this
      window.onresize = () => {
        return (() => {
          _that.screenWidth = document.body.clientWidth
        })()
      }
    },

    watch: {
      //监听窗口大小改变
      screenWidth(val) {
        this.screenWidth = val
        // 销毁图表实例
        this.myChart.dispose();
        // 初始化图表数据
        this.echartDataInit()
      }
    },

    // 离开页面时，销毁定时器
    beforeDestroy() {
      // 页面跳转,销毁定时器
      clearInterval(this.partsChartTimer);
      // 销毁图表实例
      this.myChart.dispose();
    },

    methods: {
      // 进入获取一次零件信息
      getPartsListOne: function() {
        let _that = this;
        let partsRequestVO = new PartsRequestVO(this.ProtocolContent.parts);
        this.communicateManger.httpCommunicate.getResponseVO(partsRequestVO, "/parts/query/list").then((PartsResponseVO) => {
          if (PartsResponseVO.getStatus == 1000) {
            if (!Tools.isNull(PartsResponseVO.resultList) && PartsResponseVO.resultList.length > 0) {
              // 组装数据
              this.dataAxis = new Array();
              this.data = new Array();
              for (let item of PartsResponseVO.resultList) {
                this.dataAxis.push(item.name);
                this.data.push(item.click);
              }
              // 初始化图表数据
              _that.echartDataInit();
            }
          } else {
            this.messageBox.error(PartsResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 定时获取零件信息
      getPartsList: function() {
        // 先清除定时器
        clearInterval(this.partsChartTimer);
        //定时器，10s查询一次
        this.partsChartTimer = setInterval(() => {
          let _that = this;
          let partsRequestVO = new PartsRequestVO(this.ProtocolContent.parts);
          this.communicateManger.httpCommunicate.getResponseVO(partsRequestVO, "/parts/query/list").then((PartsResponseVO) => {
            if (PartsResponseVO.getStatus == 1000) {
              if (!Tools.isNull(PartsResponseVO.resultList) && PartsResponseVO.resultList.length > 0) {
                // 组装数据
                this.dataAxis = new Array();
                this.data = new Array();
                for (let item of PartsResponseVO.resultList) {
                  this.dataAxis.push(item.name);
                  this.data.push(item.click);
                }
                // 初始化图表数据
                _that.echartDataInit();
              }
            } else {
              this.messageBox.error(PartsResponseVO.getMsg);
            }
          }).catch(() => {
            this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
          })
        }, 1000 * 10)
      },

      //图表数据初始化，格式化
      echartDataInit: function () {
        // let dataAxis = ['点0010101019', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放'];
        // let data = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
        if (!Tools.isNull(this.dataAxis) && !Tools.isNull(this.data)) {
          this.myChart = this.drawLine(this.dataAxis, this.data, '零件点击量统计图');
        }
      },

      // 绘制图表
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
      },
    },
  }
</script>

<style>
  .partsChart {
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    border: 1px solid #ebeef5;
    background-color: #F0FFF0;
  }

  .partsChart .myChart-display {
    margin: 0 auto;
  }
</style>
