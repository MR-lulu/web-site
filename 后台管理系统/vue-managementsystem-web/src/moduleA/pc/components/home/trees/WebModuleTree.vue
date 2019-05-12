<template>
  <div class="webModuleTree">
    <el-tree
      :data="treeData"
      :props="defaultProps"
      node-key="id"
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
      append(data) {
        const newChild = {id: id++, label: 'testtest', children: []};
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      renderContent(h, {node, data, store}) {
        return (
          < div
      class
        = "ico" >
          < span >
          < span > {node.label} < /span>
          < /span>
          < span >
          < i
      class
        = "el-icon-circle-plus-outline"
        on - click = {()
      =>
        this.append(data)
      }> <
        /i>
        < /span>
        < /div>);
      }
    }
  }
</script>

<style>
  .webModuleTree {
    border: 1px solid #ebeef5;
    background-color: #F0FFF0;
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
</style>
