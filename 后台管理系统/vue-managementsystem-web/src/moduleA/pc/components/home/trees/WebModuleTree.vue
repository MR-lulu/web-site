<template>
  <div class="webModuleTree">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      :highlight-current="true"
      node-key="id"
      ref="tree"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
</template>

<script>
  let id = 1000;
  export default {
    name: "WebModuleTree",
    data() {
      return {
        treeData: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    create() {

    },

    methods: {
      // 新增节点
      renderContent(h, {node, data, store}) {
        return ( < div
      class
        = "ico" > < span > < span
        on - click = {()
      =>
        this.handleNodeLableClick(data)
      }>
        {
          node.label
        }
      <
        /span>< /s
        pan > < span
        on - click = {()
      =>
        this.handleNodeAddClick(data)
      }> <
        i
      class
        = "el-icon-circle-plus-outline" > < /i> </s
        pan > < /div>);
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      // 节点文本点击事件
      handleNodeLableClick(data) {
        console.log('a');
        console.log(data);
      },
      // 节点添加点击事件
      handleNodeAddClick(data) {
        console.log('b');
        console.log(data);
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
