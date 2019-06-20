<template>
  <div class="webTop">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <!--图片上传-->
        <el-form-item :label="$t('rs.moduleA.20000000085') /*图片上传*/">
          <el-upload
            class="avatar-uploader"
            :action="uploadImgUrl"
            accept="image/png,image/gif,image/jpg,image/jpeg,image/ico"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.logoUrl" :src="formData.logoUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">{{$t('rs.staticText.30000000032') + 'jpeg, png, gif,ico'}},
              {{$t('rs.staticText.30000000033') + uploadImgSize + 'M'}}
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item :label="$t('rs.moduleA.20000000147') /*导航总数*/" prop="navCount">
          <el-input v-model="formData.navCount" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000102') /*网站名称*/" prop="webName">
          <el-input v-model="formData.webName" :placeholder="$t('rs.moduleA.20000000103') /*请输入网站名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000104') /*联系电话*/" prop="phone">
          <el-input v-model="formData.phone" :placeholder="$t('rs.moduleA.20000000105') /*请输入联系电话*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000106') /*页头备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000107') /*请输入页头备注*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000101') /*页头状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1" disabled>{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2" disabled>{{$t('rs.moduleA.20000000060')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000027') /*创建时间*/" prop="serverCreateTime">
          <el-date-picker type="date" v-model="formData.serverCreateTime" format="yyyy-MM-dd HH:mm:ss"
                          disabled></el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000050') /*修改时间*/" prop="serverUpdateTime">
          <el-date-picker type="date" v-model="formData.serverUpdateTime" format="yyyy-MM-dd HH:mm:ss"
                          disabled></el-date-picker>
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
  import WebTopAddOrModifyRequestVO from '@/moduleA/common/js/model/WebTopAddOrModifyRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import {mapState} from 'vuex'

  export default {
    name: "WebTop",
    data() {
      return {
        // 图片上传地址
        uploadImgUrl: '',
        // 图片上传大小限制
        uploadImgSize: '',
        formData: {
          logoUrl: '',
          phone: '',
          webName: '',
          navCount: '',
          remarks: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
        },
        rules: {
          phone: [
            {required: true, message: this.$t('rs.moduleA.20000000105'), trigger: 'blur'}
          ],
          webName: [
            {required: true, message: this.$t('rs.moduleA.20000000103'), trigger: 'blur'}
          ]
        }
      }
    },

    computed: {
      ...mapState(['webModuleTreeClickType']),
    },

    created() {
      // 初始化图片上传地址
      this.uploadImgUrl = Config.uploadImgUrl;
      // 初始化图片上传大小限制
      this.uploadImgSize = Config.uploadImgSize;
      // 初始化formData
      if (!Tools.isNull(this.webModuleTreeClickType.object)) {
        this.formData = this.webModuleTreeClickType.object;
      }
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
        if (newValue && !Tools.isNull(newValue)) {
          this.formData = this.webModuleTreeClickType.object;
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000038'), this.$t('rs.staticText.30000000008'), () => {  // 您确认要修改页头吗？ 提示
            }, () => {
              // 修改页头
              this.updatewebTop();
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
        this.formData.logoUrl = response.data;
      },

      // 上传失败
      uploadError: function (err, file, fileList) {
        this.$message.error(this.$t('rs.staticText.30000000045'));  // 图片上传失败, 请重新上传
      },

      // 图片上传之前操作
      beforeAvatarUpload(file) {
        const isJPG = (file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/ico');
        const isLt2M = (file.size / 1024 / 1024) < Config.uploadImgSize;
        if (!isJPG) {
          this.$message.error(this.$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico');  //上传图片的格式只能是:
        }
        if (!isLt2M) {
          this.$message.error(this.$t('rs.staticText.30000000033') + Config.uploadImgSize + 'M');  // 上传头像图片大小不能超过:
        }
        return isLt2M;
      },

      // 修改页头
      updatewebTop: function () {
        let webTopAddOrModifyRequestVO = new WebTopAddOrModifyRequestVO(this.ProtocolContent.webTopAddOrModify);
        webTopAddOrModifyRequestVO.webName = this.formData.webName;
        webTopAddOrModifyRequestVO.phone = this.formData.phone;
        webTopAddOrModifyRequestVO.logoUrl = this.formData.logoUrl;
        webTopAddOrModifyRequestVO.remarks = this.formData.remarks;
        webTopAddOrModifyRequestVO.webTopId = this.formData.webTopId;

        this.communicateManger.httpCommunicate.getResponseVO(webTopAddOrModifyRequestVO, "/webTop/addOrModify").then((WebTopAddOrModifyResponseVO) => {
          if (WebTopAddOrModifyResponseVO.getStatus == 1000 && WebTopAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(WebTopAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(WebTopAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .webTop {
  }

  .webTop .form-1 .el-button {
    width: 120px;
  }

  .webTop .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }

  .webTop .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .webTop .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }

  .webTop .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }

  .webTop .el-upload__input {
    display: none;
  }

  .webTop .el-radio-group {
    float: left;
    padding-top: 10px;
  }

  .webTop .el-date-editor.el-input, .el-date-editor.el-input__inner {
    /* width: 50%; */
    float: left;
  }
</style>
