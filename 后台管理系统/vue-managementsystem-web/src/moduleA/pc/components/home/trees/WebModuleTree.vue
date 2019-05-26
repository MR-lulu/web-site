<template>
  <div class="webModuleTree">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      accordion
      :highlight-current="true"
      node-key="id"
      ref="tree"
      :expand-on-click-node="false"
      :default-expanded-keys="[0]"
      :render-content="renderContent">
    </el-tree>
  </div>
</template>

<script>
  import WebModuleTreeRequestVO from '@/moduleA/common/js/model/WebModuleTreeRequestVO.js'
  import CommonInfoRequestVO from '@/moduleA/common/js/model/CommonInfoRequestVO.js'
  import { mapState } from 'vuex'
  import Tools from '@/commonjs/util/mall.tools.js'
  import {getLoginUserInfo} from '@/store/sessionstorage/index.js'

  export default {
    name: "WebModuleTree",
    data() {
      return {
        userLevel: '',  // 用户等级
        webModuleTreeClickType: {
          clickType: '',  // 点击类型，display为文本点击，add为添加点击
          level: 0,  // 节点水平
          navigationId: '',  // 导航id
          modulesId: '',  // 模块id
          partsId: '',  // 零件id
          object: '',  // 对象
          flag: '',  // 点击文本标记
        },
        webModuleTree: null, // 组件树所有数据
        modulesArray: null,  // 模块数组(临时)
        partsArray: null,  // 零件数组(临时)
        commonInfoArray: null,  // 公共信息
        treeData: [{
          id: 0,
          label: '系统-1',
          children: []
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    computed: {
      ...mapState(['updateWebModuleTreeFlag']),
    },

    created() {
      // 获取用户等级，是否是超级管理员
      this.userLevel = JSON.parse(getLoginUserInfo()).level;
      // 获取数据树信息
      this.getWebModuleTree();
    },

    watch: {
      // 树组件被更新
      updateWebModuleTreeFlag: function (newValue, oldValue) {
        if (newValue) {
          // 重新获取数据树信息
          this.getWebModuleTree();
        }
      },
    },
    methods: {
      // 新增节点
      renderContent(h, {node, data, store}) {
        if (node.level >= 4 || node.data.id < 0 || node.parent.data.id < 0 || this.userLevel != 1) {
          return (<div class = "ico"> <span> <span on-click = {()=>this.handleNodeLableClick(data, node)}>{node.label}</span></span> </div>);
        }else {
          return (<div class = "ico"> <span> <span on-click = {()=>this.handleNodeLableClick(data, node)}>{node.label}</span></span> <span on-click = {()=>this.handleNodeAddClick(data, node)}> <i class = "el-icon-circle-plus-outline"> </i> </span> </div>);
        }
        //return (<div class = "ico"> <span> <span on-click = {()=>this.handleNodeLableClick(data)}>{node.label}</span></span> <span on-click = {()=>this.handleNodeAddClick(data, node)}> <i class = "el-icon-circle-plus-outline"> </i> </span> </div>);
      },

      // 节点文本点击事件
      handleNodeLableClick(data, node) {
        this.$store.commit('setWebModuleTreeClickType', null);
        this.webModuleTreeClickType.clickType = 'display';
        this.webModuleTreeClickType.level = node.level;
        this.webModuleTreeClickType.object = node.data;
        this.webModuleTreeClickType.flag = '';

        if (this.webModuleTreeClickType.level == 2) {
          // 点击第二层树节点文本
          if ('navigationId' in this.webModuleTreeClickType.object) {
            // 点击导航
            this.webModuleTreeClickType.flag = 'navigation';
          }else if ('webTopId' in this.webModuleTreeClickType.object) {
            // 点击页头信息
            this.webModuleTreeClickType.flag = 'webTop';
          }else if ('webBottomId' in this.webModuleTreeClickType.object) {
            // 点击页尾信息
            this.webModuleTreeClickType.flag = 'webBottom';
          }else if ('webInfoId' in this.webModuleTreeClickType.object) {
            // 点击网站信息
            this.webModuleTreeClickType.flag = 'webInfo';
          }else {
            // 点击公共信息
            return;
          }
        }else if (this.webModuleTreeClickType.level == 3) {
          // 点击第三层树节点文本
          if ('modulesId' in this.webModuleTreeClickType.object) {
            // 点击模块信息
            this.webModuleTreeClickType.flag = 'modules';
          }else {
            // 点击公共信息
            this.webModuleTreeClickType.flag = 'commonInfo';
          }
        }else if (this.webModuleTreeClickType.level == 4) {
          // 点击零件文本信息
          this.webModuleTreeClickType.flag = 'parts';
        }

        this.$store.commit('setWebModuleTreeClickType', this.webModuleTreeClickType);
      },
      // 节点添加点击事件
      handleNodeAddClick(data, node) {
        this.$store.commit('setWebModuleTreeClickType', null);
        this.webModuleTreeClickType.clickType = 'add';
        this.webModuleTreeClickType.level = node.level;
        this.webModuleTreeClickType.navigationId = 0;
        this.webModuleTreeClickType.modulesId = 0;
        this.webModuleTreeClickType.partsId = 0;
        this.webModuleTreeClickType.object = null;

        if (this.webModuleTreeClickType.level == 1) {
          // 添加导航
        }else if(this.webModuleTreeClickType.level == 2) {
          // 添加模块
          this.webModuleTreeClickType.navigationId = node.data.id;
        } else if(this.webModuleTreeClickType.level == 3){
          // 添加零件
          this.webModuleTreeClickType.modulesId = node.data.id;
        }
        this.$store.commit('setWebModuleTreeClickType', this.webModuleTreeClickType);
      },

      // 获取数据树
      getWebModuleTree: function () {
        let _that = this;
        let webModuleTreeRequestVO = new WebModuleTreeRequestVO(this.ProtocolContent.webModuleTree);
        this.communicateManger.httpCommunicate.getResponseVO(webModuleTreeRequestVO, "/navigation/query/all").then((WebModuleTreeResponseVO) => {
          if (WebModuleTreeResponseVO.getStatus == 1000) {
            if (!Tools.isNull(WebModuleTreeResponseVO.getNavigationDtoList)) {
              // 将组件树信息放到vux管理
              this.webModuleTree = WebModuleTreeResponseVO.resultList
              this.$store.commit('setWebModuleTree', this.webModuleTree);
              // 树数据展示格式转换
              this.treeData[0].children = new Array();
              for (let i = 0; i < WebModuleTreeResponseVO.getNavigationDtoList.length; i++) {
                let navigation = WebModuleTreeResponseVO.getNavigationDtoList[i];
                this.modulesArray = new Array();
                if ('modulesDtoList' in navigation && navigation.modulesDtoList.length > 0) {
                  // 如果导航包含模块
                  let modules = navigation.modulesDtoList;
                  for (let j = 0; j < modules.length; j++) {
                    let module = modules[j];
                    this.partsArray = new Array();
                    if ('partsDtoList' in module && module.partsDtoList.length > 0) {
                      // 如果模块包含零件
                      let parts = module.partsDtoList;
                      for (let k = 0; k < parts.length; k++) {
                        let part = parts[k];
                        part.label = parts[k].name;
                        part.id = parts[k].partsId;
                        this.partsArray.push(part);
                      }
                    }
                    // 删除属性
                    delete module.partsDtoList;
                    module.label = modules[j].name;
                    module.id = modules[j].modulesId;
                    module.children = this.partsArray;
                    this.modulesArray.push(module);
                  }
                }
                // 删除属性
                delete navigation.modulesDtoList;
                navigation.label = WebModuleTreeResponseVO.getNavigationDtoList[i].name;
                navigation.id = WebModuleTreeResponseVO.getNavigationDtoList[i].navigationId;
                navigation.children = this.modulesArray;
                this.treeData[0].children.push(navigation);
              }
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebTop)) {
              // 添加页头
              let webTop = WebModuleTreeResponseVO.getWebTop;
              webTop.label = this.$t('rs.moduleA.20000000141'); //页头信息
              webTop.id = -1;
              this.treeData[0].children.push(webTop);
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebBottom)) {
              // 添加页尾
              let webBottom = WebModuleTreeResponseVO.getWebBottom;
              webBottom.label = this.$t('rs.moduleA.20000000142'); //页尾信息
              webBottom.id = -2;
              this.treeData[0].children.push(webBottom);
            }
            if (!Tools.isNull(WebModuleTreeResponseVO.getWebInfo)) {
              // 添加网站信息
              let webInfo = WebModuleTreeResponseVO.getWebInfo;
              webInfo.label = this.$t('rs.moduleA.20000000143'); //网站信息
              webInfo.id = -3;
              this.treeData[0].children.push(webInfo);
            }
            // 获取公共信息
            _that.getCommonInfo();
          } else {
            this.messageBox.error(WebModuleTreeResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 获取公共信息
      getCommonInfo: function () {
        let commonInfoRequestVO = new CommonInfoRequestVO(this.ProtocolContent.commonInfo);
        this.communicateManger.httpCommunicate.getResponseVO(commonInfoRequestVO, "/commonInfo/query/list").then((CommonInfoResponseVO) => {
          if (CommonInfoResponseVO.getStatus == 1000) {
            if (!Tools.isNull(CommonInfoResponseVO.resultList)) {
              this.commonInfoArray = new Array();
              for (let i = 0; i < CommonInfoResponseVO.resultList.length; i++) {
                let commonInfo = CommonInfoResponseVO.resultList[i];
                commonInfo.id = CommonInfoResponseVO.resultList[i].commonInfoId;
                commonInfo.label = this.$t('rs.moduleA.20000000145'); //背景图片
                this.commonInfoArray.push(commonInfo);
                // 此处break的目的是只取第一条数据
                break;
              }
              if (!Tools.isNull(this.commonInfoArray)) {
                let object = new Object;
                object.id = -4;
                object.label = this.$t('rs.moduleA.20000000144'); //公共信息
                object.children = this.commonInfoArray;
                // 添加公共信息
                this.treeData[0].children.push(object);
              }
            }
          } else {
            this.messageBox.error(CommonInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    }
  }
</script>

<style>
  .webModuleTree {
  }

  .webModuleTree .el-tree {
    background: #373d41;
    color: #FFFFFF;
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .webModuleTree .ico {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-right: 8px;
  }

  .webModuleTree .ico span {
    margin-left: 1%;
  }

  .webModuleTree .el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
    background-color: #FFD700;
  }

  .webModuleTree .el-tree-node__content {
    height: 35px;
  }

  .webModuleTree .el-icon-circle-plus-outline:before {
    padding-left: 60%;
  }

  .webModuleTree .el-icon-caret-right:before {
    color: #FFD700;
  }

  .webModuleTree .el-tree-node__content:hover {
    background-color: #ccc;
  }
</style>
