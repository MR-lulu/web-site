<template>
  <div class="backgroundimg-add">
    <div class="form-1">
      <el-form :model="formData" ref="formData" label-width="100px" class="demo-ruleForm">
        <!--图片上传-->
        <el-form-item :label="$t('rs.moduleA.20000000085') /*图片上传*/">
          <el-upload
            class="avatar-uploader"
            :action="uploadImgUrl"
            accept="image/png,image/gif,image/jpg,image/jpeg,image/x-icon"
            :show-file-list="false"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :before-upload="beforeAvatarUpload">
            <img v-if="formData.bgUrl" :src="formData.bgUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>

            <!--删除图片-->
            <div v-if="formData.bgUrl" class="delete-img" slot="tip" v-on:click="deleteImg">
              <i class="el-icon-delete"></i>
            </div>
            <div class="el-upload__tip" slot="tip">{{$t('rs.staticText.30000000032') + 'jpeg, png, gif,ico'}}，{{$t('rs.staticText.30000000033') + uploadImgSize + 'M'}}
            </div>
          </el-upload>
        </el-form-item>

        <el-form-item :label="$t('rs.moduleA.20000000138') /*背景图片备注*/">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000139') /*请输入背景图片备注*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000140') /*背景图片状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1">{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2">{{$t('rs.moduleA.20000000060')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000027') /*创建时间*/" prop="serverCreateTime">
          <el-date-picker type="date" v-model="formData.serverCreateTime" format="yyyy-MM-dd HH:mm:ss" disabled></el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000050') /*修改时间*/" prop="serverUpdateTime">
          <el-date-picker type="date" v-model="formData.serverUpdateTime" format="yyyy-MM-dd HH:mm:ss" disabled></el-date-picker>
        </el-form-item>
      </el-form>

      <!--按钮-->
      <div class="btn">
        <!--修改-->
        <el-button type="primary" @click="submit()">{{$t('rs.moduleA.20000000044')}}</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  import Config from '../../../../../../assets/Config.js'
  import BackgroundimgAddOrModifyRequestVO from '@/moduleA/common/js/model/BackgroundimgAddOrModifyRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import { mapState } from 'vuex'

  export default {
    name: "BackgroundimgAdd",
    data() {
      return {
        // 图片上传地址
        uploadImgUrl: '',
        // 图片上传大小限制
        uploadImgSize: '',
        imageUrl: '',
        formData: {
          commonInfoId: '',
          bgUrl: '',
          remarks: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
        },
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
      submit() {
        this.messageBox.confirm(this.$t('rs.staticText.30000000043'), this.$t('rs.staticText.30000000008'), () => {  //您确认要修改网站背景图片吗？ 提示
        }, () => {
          // 修改网站背景图片
          this.updateBackgroundimg();
        }, () => {
          // 取消
        });
      },
      // 上传成功
      uploadSuccess(response, file, fileList) {
        this.formData.bgUrl = response.data;
      },

      // 上传失败
      uploadError: function (err, file, fileList) {
        this.$message.error(this.$t('rs.staticText.30000000045'));  // 图片上传失败, 请重新上传
      },

      // 图片上传之前操作
      beforeAvatarUpload(file) {
        const isJPG = (file.type === 'image/png' || file.type === 'image/gif' || file.type === 'image/jpg' || file.type === 'image/jpeg' || file.type === 'image/x-icon');
        const isLt2M = (file.size / 1024 / 1024) < Config.uploadImgSize;
        if (!isJPG) {
          this.$message.error(this.$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico');  //上传图片的格式只能是:
        }
        if (!isLt2M) {
          this.$message.error(this.$t('rs.staticText.30000000033') + Config.uploadImgSize + 'M');  // 上传头像图片大小不能超过:
        }
        return isJPG && isLt2M;
      },

      // 修改网站背景图片
      updateBackgroundimg: function () {
        let backgroundimgAddOrModifyRequestVO = new BackgroundimgAddOrModifyRequestVO(this.ProtocolContent.partAddOrModify);
        backgroundimgAddOrModifyRequestVO.bgUrl = this.formData.bgUrl;
        backgroundimgAddOrModifyRequestVO.remarks = this.formData.remarks;
        backgroundimgAddOrModifyRequestVO.status = this.formData.status;
        backgroundimgAddOrModifyRequestVO.commonInfoId = this.formData.commonInfoId;

        this.communicateManger.httpCommunicate.getResponseVO(backgroundimgAddOrModifyRequestVO, "/commonInfo/addOrModify").then((BackgroundimgAddOrModifyResponseVO) => {
          if (BackgroundimgAddOrModifyResponseVO.getStatus == 1000 && BackgroundimgAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(BackgroundimgAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(BackgroundimgAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 删除图片
      deleteImg: function() {
        this.messageBox.confirm(this.$t('rs.staticText.30000000047'), this.$t('rs.staticText.30000000008'), () => {  // 您确认要删除图片吗？ 提示
        }, () => {
          // 删除图片
          let backgroundimgAddOrModifyRequestVO = new BackgroundimgAddOrModifyRequestVO(this.ProtocolContent.partAddOrModify);
          backgroundimgAddOrModifyRequestVO.bgUrl = '';
          backgroundimgAddOrModifyRequestVO.commonInfoId = this.formData.commonInfoId;

          this.communicateManger.httpCommunicate.getResponseVO(backgroundimgAddOrModifyRequestVO, "/commonInfo/addOrModify").then((BackgroundimgAddOrModifyResponseVO) => {
            if (BackgroundimgAddOrModifyResponseVO.getStatus == 1000 && BackgroundimgAddOrModifyResponseVO.getResultCode > 0) {
              this.messageBox.success(BackgroundimgAddOrModifyResponseVO.getMsg);
              this.formData.bgUrl = '';
              // 通知更新树
              this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
            } else {
              this.messageBox.error(BackgroundimgAddOrModifyResponseVO.getMsg);
            }
          }).catch(() => {
            this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
          })
        }, () => {
          // 取消
        });
      },
    },
  }
</script>

<style>
  .backgroundimg-add {
  }

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

  .backgroundimg-add .form-1 .delete-img {
    font-size: 25px;
    width: 100px;
    margin-left: 45%;
  }

  .backgroundimg-add .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .backgroundimg-add .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 500px;
    height: 500px;
    line-height: 500px;
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

  .backgroundimg-add .el-radio-group {
    float: left;
    padding-top: 10px;
  }

  .backgroundimg-add .el-date-editor.el-input, .el-date-editor.el-input__inner {
    /* width: 50%; */
    float: left;
  }
</style>
