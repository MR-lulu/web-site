<template>
  <div class="footerPage">
    <div class="form-1">
      <!--图片上传-->
      <div class="img-upload">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="formDate.address" placeholder="请输入联系地址"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="formDate.phone" placeholder="请输入联系电话"></el-input>
        </el-form-item>
        <el-form-item label="网站备案" prop="websiteRecords">
          <el-input v-model="formDate.websiteRecords" placeholder="请输入网站备案"></el-input>
        </el-form-item>
        <el-form-item label="其它联系方式" prop="otherContactWay">
          <el-input v-model="formDate.otherContactWay" placeholder="请输入其它联系方式"></el-input>
        </el-form-item>
        <el-form-item label="关于我们" prop="aboutUs">
          <el-input v-model="formDate.aboutUs" type="textarea" placeholder="请输入关于我们"></el-input>
        </el-form-item>
        <el-form-item label="自定义信息" prop="customMessage">
          <el-input v-model="formDate.customMessage" type="textarea" placeholder="请输入自定义信息"></el-input>
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
    name: "FooterPage",
    data() {
      return {
        imageUrl: '',
        formDate: {
          phone: '18224890834',
          address: '',
          otherContactWay: '',
          websiteRecords: '',
          aboutUs: '',
          customMessage: ''
        },
        rules: {
          phone: [
            {required: true, message: '请输入联系电话', trigger: 'blur'}
          ],
          address: [
            {required: true, message: '请输入联系地址', trigger: 'blur'}
          ],
          otherContactWay: [
            {required: false, message: '请输入其它联系方式', trigger: 'blur'}
          ],
          websiteRecords: [
            {required: true, message: '请输入网站备案', trigger: 'blur'}
          ],
          aboutUs: [
            {required: false, message: '请输入关于我们', trigger: 'blur'}
          ],
          customMessage: [
            {required: false, message: '请输入自定义信息', trigger: 'blur'}
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
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

<style>
  .footerPage {

  }

  .footerPage .form-1 .el-button {
    width: 120px;
  }

  .footerPage .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .footerPage .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .footerPage .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .footerPage .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .footerPage .el-upload__input {
    display: none;
  }
</style>
