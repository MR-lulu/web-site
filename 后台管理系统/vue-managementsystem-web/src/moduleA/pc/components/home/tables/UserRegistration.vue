<template>
  <div class="userRegistration">
    <!--表名称和删除按钮-->
    <div class="top">
      <!--删除按钮-->
      <div class="delete-btn">
        <el-button type="danger">删除</el-button>
      </div>
      <!--表名称-->
      <div class="table-name"><span>用户信息登记表</span></div>
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
        <el-table-column prop="name" label="客户名称"></el-table-column>
        <el-table-column prop="address1" label="联系方式"></el-table-column>
        <el-table-column prop="addres2" label="联系地址"></el-table-column>
        <el-table-column prop="addres3" label="联系电话"></el-table-column>
        <el-table-column prop="addres4" label="留言信息"></el-table-column>
        <el-table-column prop="addres5" label="创建时间"></el-table-column>
        <el-table-column prop="addres6" label="操作"></el-table-column>
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
    name: "UserRegistration",
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
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
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
  .userRegistration {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .userRegistration .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .userRegistration .top {
  }

  .userRegistration .delete-btn {
    float: left;
    height: 50px;
    width: 20%;
    text-align: left;
    padding-left: 4%;
    padding-top: 7px;
  }

  .userRegistration .table-name {
    width: 80%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25%;
  }

  .userRegistration .el-table .warning-row {
    background: oldlace;
  }

  .userRegistration .el-table th > .cell {
    text-align: center;
  }
</style>
