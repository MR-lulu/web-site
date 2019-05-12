<template>
  <div class="navigationDetail">
    <!--表单内容-->
    <div class="form-1">
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
        <el-form-item label="模块个数" prop="moduleCount">
          <el-input v-model="formDate.moduleCount" disabled></el-input>
        </el-form-item>
        <el-form-item label="导航状态">
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
        <el-form-item label="导航备注" prop="navigationRemark">
          <el-input v-model="formDate.navigationRemark" placeholder="请输入导航备注"></el-input>
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
    name: "NavigationDetail",
    data() {
      var validateRNewPassword = (rule, value, callback) => {
        if (value !== this.formDate.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        formDate: {
          navigationLink: '',
          navigationName: '',
          navigationSequence: '',
          navigationRemark: '',
          moduleCount: '',
          status: '',
          createTime: '',
          updateTime: ''

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
      };
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
    }
  }
</script>

<style scoped>
  .navigationDetail {

  }

  .navigationDetail .form-name {
    font-size: 18px;
    padding-top: 2%;
  }

  .navigationDetail .form-1 {
    width: 90%;
    margin: 0 auto;
    height: 260px;
    margin-top: 3%;
  }

  .navigationDetail .form-1 .el-button {
    width: 120px;
  }

</style>
