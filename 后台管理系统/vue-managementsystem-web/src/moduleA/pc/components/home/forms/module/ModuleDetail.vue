<template>
  <div class="moduleDetail">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="模块类型" prop="moduleType">
          <el-input v-model="formDate.moduleType" disabled></el-input>
        </el-form-item>
        <el-form-item label="模块名称" prop="moduleName">
          <el-input v-model="formDate.moduleName" placeholder="请输入模块名称"></el-input>
        </el-form-item>
        <el-form-item label="显示序号" prop="moduleSequence">
          <el-input v-model="formDate.moduleSequence" placeholder="请输入显示序号"></el-input>
        </el-form-item>
        <el-form-item label="模块备注" prop="moduleRemark">
          <el-input v-model="formDate.moduleRemark" type="textarea" placeholder="请输入模块备注"></el-input>
        </el-form-item>
        <el-form-item label="模块状态">
          <el-radio-group v-model="formDate.status">
            <el-radio label="有效"></el-radio>
            <el-radio label="无效"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-input v-model="formDate.createTime" disabled></el-input>
        </el-form-item>
        <el-form-item label="修改时间" prop="updateTime">
          <el-input v-model="formDate.updateTime" disabled></el-input>
        </el-form-item>
      </el-form>
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitForm('formDate')">修改</el-button>
        <el-button type="danger" @click="deleteForm('formDate')">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModuleDetail",
    data() {
      return {
        formDate: {
          moduleSequence: '',
          moduleName: '',
          moduleRemark: '',
          moduleType: ''

        },
        rules: {
          moduleSequence: [
            {required: true, message: '请输入显示序号', trigger: 'blur'}
          ],
          moduleName: [
            {required: true, message: '请输入模块名称', trigger: 'blur'}
          ],
          moduleRemark: [
            {required: false, message: '请输入模块备注', trigger: 'blur'}
          ]
        }
      }
    },

    create() {

    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      deleteForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
  }
</script>

<style scoped>
  .moduleDetail {
  }

  .moduleDetail .form-1 .el-button {
    width: 120px;
  }
</style>
