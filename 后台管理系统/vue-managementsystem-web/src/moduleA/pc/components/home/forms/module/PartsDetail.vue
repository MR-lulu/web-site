<template>
  <div class="partsDetail">
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
        <el-form-item label="零件种类" prop="partsType">
          <el-input v-model="formDate.partsType" disabled></el-input>
        </el-form-item>
        <el-form-item label="零件名称" prop="partsName">
          <el-input v-model="formDate.partsName" placeholder="请输入零件名称"></el-input>
        </el-form-item>
        <el-form-item label="零件序号" prop="partsSequence">
          <el-input v-model="formDate.partsSequence" placeholder="请输入零件序号"></el-input>
        </el-form-item>
        <el-form-item label="零件标题" prop="partsTitle">
          <el-input v-model="formDate.partsTitle" placeholder="请输入零件标题"></el-input>
        </el-form-item>
        <el-form-item label="零件链接" prop="partsLink">
          <el-input v-model="formDate.partsLink" placeholder="请输入零件链接"></el-input>
        </el-form-item>
        <el-form-item label="零件内容" prop="partsContent">
          <el-input v-model="formDate.partsContent" type="textarea" placeholder="请输入零件内容"></el-input>
        </el-form-item>
        <el-form-item label="其它信息" prop="partsOtherMsg">
          <el-input v-model="formDate.partsOtherMsg" type="textarea" placeholder="请输入其它信息"></el-input>
        </el-form-item>
        <el-form-item label="零件备注" prop="partsRemark">
          <el-input v-model="formDate.partsRemark" type="textarea" placeholder="请输入零件备注"></el-input>
        </el-form-item>
        <el-form-item label="零件状态">
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
        <el-button type="danger" @click="submitForm('formDate')">删除</el-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PartsDetail",
    data() {
      return {
        imageUrl: '',
        formDate: {
          partsType: '',
          partsName: '',
          partsSequence: '',
          partsTitle: '',
          partsLink: '',
          partsContent: '',
          partsOtherMsg: '',
          partsRemark: '',
          status: '',
          createTime: '',
          updateTime: ''
        },
        rules: {
          partsName: [
            {required: true, message: '请输入零件名称', trigger: 'blur'}
          ],
          partsSequence: [
            {required: true, message: '请输入零件序号', trigger: 'blur'}
          ],
          partsTitle: [
            {required: true, message: '请输入零件标题', trigger: 'blur'}
          ],
          partsLink: [
            {required: true, message: '请输入零件链接', trigger: 'blur'}
          ],
          partsContent: [
            {required: true, message: '请输入零件内容', trigger: 'blur'}
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
  .partsDetail {}

  .partsDetail .form-1 .el-button {
    width: 120px;
  }

  .partsDetail .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .partsDetail .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .partsDetail .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .partsDetail .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .partsDetail .el-upload__input {
    display: none;
  }

</style>
