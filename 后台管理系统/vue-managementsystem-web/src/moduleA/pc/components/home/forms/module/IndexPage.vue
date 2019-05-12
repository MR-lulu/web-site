<template>
  <div class="indexPage">
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
        <el-form-item label="网站名称" prop="webName">
          <el-input v-model="formDate.webName" placeholder="请输入网站名称"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="phone">
          <el-input v-model="formDate.phone" placeholder="请输入联系电话"></el-input>
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
    name: "IndexPage",
    data() {
      return {
        imageUrl: '',
        formDate: {
          phone: '18224890834',
          webName: '',
        },
        rules: {
          phone: [
            {required: true, message: '请输入联系电话', trigger: 'blur'}
          ],
          webName: [
            {required: true, message: '请输入网站名称', trigger: 'blur'}
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
    },
  }
</script>

<style>
  .indexPage {

  }

  .indexPage .form-1 .el-button {
    width: 120px;
  }

  .indexPage .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .indexPage .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .indexPage .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .indexPage .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .indexPage .el-upload__input {
    display: none;
  }
</style>
