<template>
  <div class="backgroundimg-add">
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
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitForm('formDate')">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BackgroundimgAdd",
    data() {
      return {
        imageUrl: ''
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
  .backgroundimg-add {}

  .backgroundimg-add .form-1 .el-button {
    width: 120px;
  }

  .backgroundimg-add .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .backgroundimg-add .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .backgroundimg-add .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .backgroundimg-add-add .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .backgroundimg-add .el-upload__input {
    display: none;
  }
</style>
