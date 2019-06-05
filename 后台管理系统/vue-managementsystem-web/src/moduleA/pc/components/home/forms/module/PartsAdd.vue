<template>
  <div class="parts-add">
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
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">{{$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico'}}，{{$t('rs.staticText.30000000033') + uploadImgSize + 'M'}}</div>
          </el-upload>
        </el-form-item>

        <el-form-item :label="$t('rs.moduleA.20000000054') /*零件种类*/" prop="partsTypeId">
          <el-input v-model="partsTypeName" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000086') /*零件名称*/" prop="name">
          <el-input v-model="formData.name" :placeholder="$t('rs.moduleA.20000000087') /*请输入零件名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000088') /*零件序号*/" prop="priority">
          <el-input v-model="formData.priority" :placeholder="$t('rs.moduleA.20000000089') /*请输入零件序号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000090') /*零件标题*/" prop="title">
          <el-input v-model="formData.title" :placeholder="$t('rs.moduleA.20000000091') /*请输入零件标题*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000092') /*零件链接*/" prop="hyperlinks">
          <el-input v-model="formData.hyperlinks" :placeholder="$t('rs.moduleA.20000000093') /*请输入零件链接*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000094') /*零件内容*/" prop="txt">
          <el-input v-model="formData.txt" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000095') /*请输入零件内容*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000096') /*其它信息*/" prop="other">
          <el-input v-model="formData.other" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000097') /*请输入其它信息*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000098') /*零件备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000099') /*请输入零件备注*/"></el-input>
        </el-form-item>
      </el-form>
      <!--按钮-->
      <div class="btn">
        <!--添加-->
        <el-button type="primary" @click="submitForm('formData')">{{$t('rs.moduleA.20000000070')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Config from '@/framework/common/config/Config.js'
  import PartAddOrModifyRequestVO from '@/moduleA/common/js/model/PartAddOrModifyRequestVO.js'
  import PartsTypeByIdRequestVO from '@/moduleA/common/js/model/PartsTypeByIdRequestVO.js'
  import ModulesByIdRequestVO from '@/moduleA/common/js/model/ModulesByIdRequestVO.js'
  import { mapState } from 'vuex'

  export default {
    name: "PartsAdd",
    data() {
      return {
        // 图片上传地址
        uploadImgUrl: '',
        // 图片上传大小限制
        uploadImgSize: '',
        imageUrl: '',
        // 零件类型名称
        partsTypeName: '',
        // 零件类型id
        partsTypeId: '',
        formData: {
          name: '',
          priority: '',
          title: '',
          hyperlinks: '',
          txt: '',
          other: '',
          remarks: ''
        },
        rules: {
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000087'), trigger: 'blur'}
          ],
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000089'), trigger: 'blur'},
            {pattern: /^-?[1-9]\d*$/, message: this.$t('rs.staticText.30000000046')}
          ],
          title: [
            {required: true, message: this.$t('rs.moduleA.20000000091'), trigger: 'blur'}
          ],
          hyperlinks: [
            {required: false, message: this.$t('rs.moduleA.20000000093'), trigger: 'change'},
            {pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/, message: this.$t('rs.staticText.30000000044')}
          ],
          txt: [
            {required: false, message: this.$t('rs.moduleA.20000000095'), trigger: 'blur'}
          ],
          other: [
            {required: false, message: this.$t('rs.moduleA.20000000097'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.20000000099'), trigger: 'blur'}
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
      // 根据id获取模块明细，最终是为了获取零件类型名称
      this.getModulesById();
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
        if (newValue) {
          // 根据id获取模块明细，最终是为了获取零件类型名称
          this.getModulesById();
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000034'), this.$t('rs.staticText.30000000008'), () => {  //您确认要添加零件吗？ 提示
            }, () => {
              // 添加零件
              this.addParts();
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
        this.imageUrl = response.data;
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
        return isJPG && isLt2M;
      },

      // 根据id获取零件明细
      getPartsTypeById: function (id) {
        let partsTypeByIdRequestVO = new PartsTypeByIdRequestVO(this.ProtocolContent.partsTypeById);
        partsTypeByIdRequestVO.id = id
        this.communicateManger.httpCommunicate.getResponseVO(partsTypeByIdRequestVO, "/partsType/query/detail/" + partsTypeByIdRequestVO.id).then((PartsTypeByIdResponseVO) => {
          if (PartsTypeByIdResponseVO.getStatus == 1000) {
            this.partsTypeName = PartsTypeByIdResponseVO.data.name;
          } else {
            this.messageBox.error(PartsTypeByIdResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 根据id获取模块明细
      getModulesById: function () {
        let modulesByIdRequestVO = new ModulesByIdRequestVO(this.ProtocolContent.modulesById);
        modulesByIdRequestVO.id = this.webModuleTreeClickType.modulesId;
        let _that = this;
        this.communicateManger.httpCommunicate.getResponseVO(modulesByIdRequestVO, "/modules/query/detail/"+ modulesByIdRequestVO.id).then((ModulesByIdResponseVO) => {
          if (ModulesByIdResponseVO.getStatus == 1000) {
            // 根据id获取零件明细
            this.partsTypeId = ModulesByIdResponseVO.data.partsTypeId;
            _that.getPartsTypeById(ModulesByIdResponseVO.data.partsTypeId);
          } else {
            this.messageBox.error(ModulesByIdResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 添加零件
      addParts: function () {
        let partAddOrModifyRequestVO = new PartAddOrModifyRequestVO(this.ProtocolContent.partAddOrModify);
        partAddOrModifyRequestVO.name = this.formData.name;
        partAddOrModifyRequestVO.imageUrl = this.imageUrl;
        partAddOrModifyRequestVO.priority = this.formData.priority;
        partAddOrModifyRequestVO.remarks = this.formData.remarks;
        partAddOrModifyRequestVO.title = this.formData.title;
        partAddOrModifyRequestVO.hyperlinks = this.formData.hyperlinks;
        partAddOrModifyRequestVO.txt = this.formData.txt;
        partAddOrModifyRequestVO.other = this.formData.other;
        partAddOrModifyRequestVO.partsTypeId = this.partsTypeId;
        partAddOrModifyRequestVO.modulesId = this.webModuleTreeClickType.modulesId;
        partAddOrModifyRequestVO.status = 1;

        this.communicateManger.httpCommunicate.getResponseVO(partAddOrModifyRequestVO, "/parts/addOrModify").then((PartAddOrModifyResponseVO) => {
          if (PartAddOrModifyResponseVO.getStatus == 1000 && PartAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(PartAddOrModifyResponseVO.getMsg);
            // 重置表单
            this.$refs.formData.resetFields();
            this.imageUrl = '';
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(PartAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .parts-add {

  }
  .parts-add .form-1 .el-button {
    width: 120px;
  }

  .parts-add .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
  }

  .parts-add .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .parts-add .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .parts-add .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }

  .parts-add .el-upload__input {
    display: none;
  }

</style>
