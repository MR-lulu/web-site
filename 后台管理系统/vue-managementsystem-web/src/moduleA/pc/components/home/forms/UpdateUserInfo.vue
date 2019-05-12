<template>
  <!--修改用户信息-->
  <div class="updateUserInfo">
    <!--表单名-->
    <div class="form-name">
      <span>修改用户信息</span>
    </div>
    <!--表单内容-->
    <div class="form-1">
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户账号" prop="userName">
          <el-input v-model="formDate.userName" disabled placeholder="请输入用户账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formDate.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="绑定手机" prop="phone">
          <el-input v-model="formDate.phone" placeholder="请输入绑定的手机号"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input v-model="formDate.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item label="绑定邮箱" prop="mail">
          <el-input v-model="formDate.mail" placeholder="请输入绑定的邮箱"></el-input>
        </el-form-item>
        <el-form-item label="重复新密码" prop="rNewPassword">
          <el-input v-model="formDate.rNewPassword" type="password" placeholder="请输入重复新密码"></el-input>
        </el-form-item>
      </el-form>
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitForm('formDate')">修改</el-button>
        <el-button @click="resetForm('formDate')">重置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "UpdateUserInfo",
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
          phone: '18224890834',
          mail: '123@qq.com',
          userName: '185lyl242123',
          password: '',
          newPassword: '',
          rNewPassword: '',
        },
        rules: {
          phone: [
            {required: true, message: '请输入绑定手机号', trigger: 'blur'},
            {
              validator: function (rule, value, callback) {
                if (Tools.isPhone(value) == false) {
                  callback(new Error("请输入正确的手机号"));
                } else {
                  callback();
                }
              }, trigger: 'blur'
            }
          ],
          mail: [
            {type: 'email', required: true, message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ],
          userName: [
            {required: true, message: '请输入正确的账号', trigger: 'change'}
          ],
          password: [
            {required: false, message: '请输入密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符'},
            {pattern: /^(\w){6,20}$/, message: '只能输入6-20个字母、数字、下划线'}
          ],
          newPassword: [
            {required: false, message: '请输入新密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符'},
            {pattern: /^(\w){6,20}$/, message: '只能输入6-20个字母、数字、下划线'}
          ],
          rNewPassword: [
            {required: false, message: '请重复输入新密码', trigger: 'change'},
            {min: 6, max: 20, message: '长度在 6 到 20 个字符'},
            {pattern: /^(\w){6,20}$/, message: '只能输入6-20个字母、数字、下划线'},
            {validator: validateRNewPassword}
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
  .updateUserInfo {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    background-color: #F0FFF0;
    margin-top: 5%;
  }

  .updateUserInfo .form-name {
    font-size: 18px;
    padding-top: 2%;
  }

  .updateUserInfo .form-1 {
    width: 90%;
    margin: 0 auto;
    height: 260px;
    margin-top: 3%;
  }

  .updateUserInfo .form-1 .el-form-item {
    margin-bottom: 22px;
    float: left;
    width: 50%;
  }

  .updateUserInfo .form-1 .el-button {
    width: 120px;
  }

</style>
