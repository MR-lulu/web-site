<template>
  <div class="module-add">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="模块类型" prop="moduleType">
          <el-select v-model="formDate.moduleType" placeholder="请选择模块类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
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
      </el-form>
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitForm('formDate')">添加</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ModuleAdd",
    data() {
      return {
        formDate: {
          moduleSequence: '',
          moduleName: '',
          moduleRemark: '',
          moduleType: []

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
          ],
          moduleType: [
            {required: true, message: '请选择模块类型', trigger: 'blur'}
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
    },
  }
</script>

<style scoped>
  .module-add {

  }

  .module-add .form-1 .el-button {
    width: 120px;
  }
</style>
