<template>
  <div class="navigation-add">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="导航名称" prop="navigationName">
          <el-input v-model="formDate.navigationName" placeholder="请输入导航名称"></el-input>
        </el-form-item>
        <el-form-item label="导航链接" prop="navigationLink">
          <el-input v-model="formDate.navigationLink" placeholder="请输入导航链接"></el-input>
        </el-form-item>
        <el-form-item label="显示序号" prop="navigationSequence">
          <el-input v-model="formDate.navigationSequence" placeholder="请输入显示序号"></el-input>
        </el-form-item>
        <el-form-item label="导航备注" prop="navigationRemark">
          <el-input v-model="formDate.navigationRemark" type="textarea" placeholder="请输入导航备注"></el-input>
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
    name: "NavigationAdd",
    data() {
      return {
        imageUrl: '',
        formDate: {
          navigationLink: '',
          navigationName: '',
          navigationSequence: '',
          navigationRemark: ''

        },
        rules: {
          navigationLink: [
            {required: true, message: '请输入导航链接', trigger: 'blur'}
          ],
          navigationName: [
            {required: true, message: '请输入导航名称', trigger: 'blur'}
          ],
          navigationSequence: [
            {required: true, message: '请输入显示序号', trigger: 'blur'}
          ],
          navigationRemark: [
            {required: false, message: '请输入导航备注', trigger: 'blur'}
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
  .navigation-add {

  }

  .navigation-add .form-1 .el-button {
    width: 120px;
  }
</style>
