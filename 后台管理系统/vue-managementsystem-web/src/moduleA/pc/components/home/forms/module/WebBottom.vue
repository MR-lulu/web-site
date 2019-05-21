<template>
  <div class="webBottom">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <!--图片上传-->
        <el-form-item :label="$t('rs.moduleA.20000000085') /*图片上传*/">
          <el-upload
            class="avatar-uploader"
            :action="uploadImgUrl"
            accept="image/jpeg,image/gif,image/png"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">{{$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico'}}，{{$t('rs.staticText.30000000033') + uploadImgSize + 'M'}}</div>
          </el-upload>
        </el-form-item>
        
        <el-form-item :label="$t('rs.moduleA.20000000111') /*联系地址*/" prop="address">
          <el-input v-model="formData.address" :placeholder="$t('rs.moduleA.20000000112') /*请输入联系地址*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000113') /*联系电话*/" prop="phone">
          <el-input v-model="formData.phone" :placeholder="$t('rs.moduleA.20000000114') /*请输入联系电话*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000115') /*网站备案*/" prop="record">
          <el-input v-model="formData.record" :placeholder="$t('rs.moduleA.20000000116') /*请输入网站备案*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000023') /*联系方式*/" prop="contact">
          <el-input v-model="formData.contact" :placeholder="$t('rs.moduleA.20000000117') /*请输入其它联系方式*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000016') /*关于我们*/" prop="about">
          <el-input v-model="formData.about" type="textarea" :placeholder="$t('rs.moduleA.20000000118') /*请输入关于我们*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000119') /*自定义信息*/" prop="selfInfo">
          <el-input v-model="formData.selfInfo" type="textarea" :placeholder="$t('rs.moduleA.20000000120') /*请输入自定义信息*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000121') /*页尾备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000122') /*请输入页尾备注*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000123') /*页尾状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1" disabled>{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2" disabled>{{$t('rs.moduleA.20000000060')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000027') /*创建时间*/" prop="serverCreateTime">
          <el-input v-model="formData.serverCreateTime" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000050') /*修改时间*/" prop="serverUpdateTime">
          <el-input v-model="formData.serverUpdateTime" disabled></el-input>
        </el-form-item>
      </el-form>
      <!--按钮-->
      <div class="btn">
        <el-button type="primary" @click="submitForm('formData')">修改</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Config from '@/framework/common/config/Config.js'
  import WebBottomAddOrModifyRequestVO from '@/moduleA/common/js/model/WebBottomAddOrModifyRequestVO.js'

  export default {
    name: "WebBottom",
    data() {
      return {
        // 图片上传地址
        uploadImgUrl: '',
        // 图片上传大小限制
        uploadImgSize: '',
        imageUrl: '',
        formData: {
          webBottomId: '',
          phone: '',
          address: '',
          contact: '',
          record: '',
          about: '',
          selfInfo: '',
          remarks: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
        },
        rules: {
          phone: [
            {required: true, message: this.$t('rs.moduleA.20000000114'), trigger: 'blur'}
          ],
          address: [
            {required: true, message: this.$t('rs.moduleA.20000000112'), trigger: 'blur'}
          ],
          contact: [
            {required: false, message:this.$t('rs.moduleA.20000000117'), trigger: 'blur'}
          ],
          record: [
            {required: true, message: this.$t('rs.moduleA.20000000116'), trigger: 'blur'}
          ],
          about: [
            {required: false, message: this.$t('rs.moduleA.20000000118'), trigger: 'blur'}
          ],
          selfInfo: [
            {required: false, message: this.$t('rs.moduleA.20000000120'), trigger: 'blur'}
          ]
        }
      }
    },

    created() {
      // 初始化图片上传地址
      this.uploadImgUrl = Config.uploadImgUrl;
      // 初始化图片上传大小限制
      this.uploadImgSize = Config.uploadImgSize;
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000039'), this.$t('rs.staticText.30000000008'), () => {  // 您确认要修改页尾吗？ 提示
            }, () => {
              // 修改页尾
              this.updateWebBottom();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },
      // 上传成功
      uploadSuccess(response, file, fileList) {
        console.log(response);
        console.log(file);
        console.log(fileList);
        this.imageUrl = URL.createObjectURL(file.raw);
      },

      // 上传失败
      uploadError: function (err, file, fileList) {
        console.log(err);
        console.log(file);
        console.log(fileList);
      },

      // 图片上传之前操作
      beforeAvatarUpload(file) {
        const isJPG = file.type === ('image/jpeg' || 'image/png' || 'image/gif' || 'image/ico');
        const isLt2M = (file.size / 1024 / 1024) < Config.uploadImgSize;
        if (!isJPG) {
          this.$message.error(this.$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico');  //上传图片的格式只能是:
        }
        if (!isLt2M) {
          this.$message.error(this.$t('rs.staticText.30000000033') + Config.uploadImgSize + 'M');  // 上传头像图片大小不能超过:
        }
        return isJPG && isLt2M;
      },

      // 修改页尾
      updateWebBottom: function () {
        let webBottomAddOrModifyRequestVO = new WebBottomAddOrModifyRequestVO(this.ProtocolContent.webTopAddOrModify);
        webBottomAddOrModifyRequestVO.bottomUrl = this.imageUrl;
        webBottomAddOrModifyRequestVO.phone = this.formData.phone;
        webBottomAddOrModifyRequestVO.address = this.formData.address;
        webBottomAddOrModifyRequestVO.contact = this.formData.contact;
        webBottomAddOrModifyRequestVO.record = this.formData.record;
        webBottomAddOrModifyRequestVO.about = this.formData.about;
        webBottomAddOrModifyRequestVO.selfInfo = this.formData.selfInfo;
        webBottomAddOrModifyRequestVO.remarks = this.formData.remarks;
        webBottomAddOrModifyRequestVO.webBottomId = this.formData.webBottomId;

        this.communicateManger.httpCommunicate.getResponseVO(webBottomAddOrModifyRequestVO, "/webBottom/addOrModify").then((WebBottomAddOrModifyResponseVO) => {
          if (WebBottomAddOrModifyResponseVO.getStatus == 1000 && WebBottomAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(WebBottomAddOrModifyResponseVO.getMsg);
          } else {
            this.messageBox.error(WebBottomAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    }
  }
</script>

<style>
  .webBottom {

  }

  .webBottom .form-1 .el-button {
    width: 120px;
  }

  .webBottom .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }

  .webBottom .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .webBottom .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .webBottom .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .webBottom .el-upload__input {
    display: none;
  }

  .webBottom .el-radio-group {
    float: left;
    padding-top: 10px;
  }
</style>
