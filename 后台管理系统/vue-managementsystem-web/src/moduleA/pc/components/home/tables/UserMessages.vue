<template>
  <div class="userMessages">
    <!--表名称和删除按钮-->
    <div class="top">
      <!--删除按钮-->
      <div class="delete-btn">
        <el-button type="danger">删除</el-button>
      </div>
      <!--表名称-->
      <div class="table-name"><span>用户留言表</span></div>
    </div>
    <!--表格内容-->
    <div class="user-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="500"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="id" label="编号"></el-table-column>
        <el-table-column prop="name" label="用户"></el-table-column>
        <el-table-column prop="address" label="留言内容"></el-table-column>
        <el-table-column prop="address" label="创建时间"></el-table-column>
        <el-table-column prop="address" label="操作"></el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "UserMessages",
    data() {
      return {
        tableData: [],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },

    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 === 1) {
          return 'warning-row';
        }
        return '';
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
  }
</script>

<style>
  .userMessages {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .userMessages .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .userMessages .top {
  }

  .userMessages .delete-btn {
    float: left;
    height: 50px;
    width: 20%;
    text-align: left;
    padding-left: 4%;
    padding-top: 7px;
  }

  .userMessages .table-name {
    width: 80%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25%;
  }

  .userMessages .el-table .warning-row {
    background: oldlace;
  }

  .userMessages .el-table th > .cell {
    text-align: center;
  }
</style>
