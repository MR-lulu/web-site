<template>
  <div class="websiteInfo">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="所有者名称" prop="belongName">
          <el-input v-model="formDate.belongName" placeholder="请输入所有者名称"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contactWay">
          <el-input v-model="formDate.contactWay" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="formDate.address" placeholder="请输入联系地址"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="formDate.phone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="应用方向" prop="applicationDirection">
          <el-input v-model="formDate.applicationDirection" placeholder="请输入应用方向"></el-input>
        </el-form-item>
        <el-form-item label="网站地址" prop="websiteUrl">
          <el-input v-model="formDate.websiteUrl" placeholder="请输入网站地址"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="mail">
          <el-input v-model="formDate.mail" placeholder="请输入绑定的邮箱"></el-input>
        </el-form-item>
        <el-form-item label="网站简介" prop="websiteProfile">
          <el-input v-model="formDate.websiteProfile" type="textarea" placeholder="请输入网站简介"></el-input>
        </el-form-item>
        <el-form-item label="所有者简介" prop="belongProfile">
          <el-input v-model="formDate.belongProfile" type="textarea" placeholder="请输入所有者简介"></el-input>
        </el-form-item>
        <el-form-item label="网站备注" prop="websiteRemark">
          <el-input v-model="formDate.websiteRemark" type="textarea" placeholder="请输入网站备注"></el-input>
        </el-form-item>
        <el-form-item label="状态">
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
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WebsiteInfo",
    data() {
      return {
        formDate: {
          belongName: '',
          contactWay: '',
          address: '',
          phone: '',
          applicationDirection: '',
          websiteUrl: '',
          mail: '',
          websiteProfile: '',
          belongProfile: '',
          websiteRemark: '',
          status: '',
          createTime: '',
          updateTime: ''
        },
        rules: {
          belongName: [
            {required: false, message: '请输入所有者名称', trigger: 'blur'}
          ],
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
      }
    },
  }
</script>

<style scoped>
  .websiteInfo {}

  .websiteInfo .form-1 .el-button {
    width: 120px;
  }

  .websiteInfo .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .websiteInfo .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .websiteInfo .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .websiteInfo .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .websiteInfo .el-upload__input {
    display: none;
  }

</style>
