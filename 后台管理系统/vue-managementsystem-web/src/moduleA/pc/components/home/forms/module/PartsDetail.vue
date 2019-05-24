<template>
  <div class="partsDetail">
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
            <img v-if="formData.imageUrl" :src="formData.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">{{$t('rs.staticText.30000000032') + 'jpeg, png, gif, ico'}}，{{$t('rs.staticText.30000000033') + uploadImgSize + 'M'}}</div>
          </el-upload>
        </el-form-item>

        <el-form-item :label="$t('rs.moduleA.20000000054') /*零件种类*/" prop="partsTypeId">
          <el-input v-model="formData.partsTypeId" disabled></el-input>
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
        <el-form-item :label="$t('rs.moduleA.20000000100') /*零件状态*/">
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
        <el-button type="primary" @click="submitForm('formData')">{{$t('rs.moduleA.20000000044')}}</el-button>
        <!--删除-->
        <el-button type="danger" @click="deleteForm">{{$t('rs.moduleA.20000000019')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import Config from '@/framework/common/config/Config.js'
  import PartAddOrModifyRequestVO from '@/moduleA/common/js/model/PartAddOrModifyRequestVO.js'
  import PartsDeleteRequestVO from '@/moduleA/common/js/model/PartsDeleteRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import { mapState } from 'vuex'

  export default {
    name: "PartsDetail",
    data() {
      return {
        webModuleTreeClickTypeNew: {
          clickType: '',  // 点击类型，display为文本点击，add为添加点击
          level: 0,  // 节点水平
          navigationId: '',  // 导航id
          modulesId: '',  // 模块id
          partsId: '',  // 零件id
          object: '',  // 对象
          flag: '',  // 点击文本标记
        },
        // 图片上传地址
        uploadImgUrl: '',
        // 图片上传大小限制
        uploadImgSize: '',
        formData: {
          partsTypeId: '',
          modulesId: '',
          partsId: '',
          imageUrl: '',
          name: '',
          priority: '',
          title: '',
          hyperlinks: '',
          txt: '',
          other: '',
          remarks: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
        },
        rules: {
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000087'), trigger: 'blur'}
          ],
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000089'), trigger: 'blur'}
          ],
          title: [
            {required: true, message: this.$t('rs.moduleA.20000000091'), trigger: 'blur'}
          ],
          hyperlinks: [
            {required: false, message: this.$t('rs.moduleA.20000000093'), trigger: 'blur'}
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
      // 初始化formData
      if (!Tools.isNull(this.webModuleTreeClickType.object)) {
        this.formData = this.webModuleTreeClickType.object;
      }
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
        if (newValue) {
          this.formData = this.webModuleTreeClickType.object;
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000036'), this.$t('rs.staticText.30000000008'), () => {  // 您确认要修改零件吗？ 提示
            }, () => {
              // 修改零件
              this.updateParts();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },

      // 删除零件
      deleteForm() {
        this.messageBox.confirm(this.$t('rs.staticText.30000000037'), this.$t('rs.staticText.30000000008'), () => {  //您确认要删除零件吗？ 提示
        }, () => {
          // 删除零件
          this.deleteParts();
        }, () => {
          // 取消
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

      // 修改零件
      updateParts: function () {
        let partAddOrModifyRequestVO = new PartAddOrModifyRequestVO(this.ProtocolContent.partAddOrModify);
        partAddOrModifyRequestVO.name = this.formData.name;
        partAddOrModifyRequestVO.imageUrl = this.formData.imageUrl;
        partAddOrModifyRequestVO.priority = this.formData.priority;
        partAddOrModifyRequestVO.remarks = this.formData.remarks;
        partAddOrModifyRequestVO.title = this.formData.title;
        partAddOrModifyRequestVO.hyperlinks = this.formData.hyperlinks;
        partAddOrModifyRequestVO.txt = this.formData.txt;
        partAddOrModifyRequestVO.other = this.formData.other;
        partAddOrModifyRequestVO.partsId = this.formData.partsId;
        partAddOrModifyRequestVO.status = this.formData.status;

        this.communicateManger.httpCommunicate.getResponseVO(partAddOrModifyRequestVO, "/parts/addOrModify").then((PartAddOrModifyResponseVO) => {
          if (PartAddOrModifyResponseVO.getStatus == 1000 && PartAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(PartAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(PartAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 删除零件
      deleteParts() {
        let partsDeleteRequestVO = new PartsDeleteRequestVO(this.ProtocolContent.partsDelete);
        partsDeleteRequestVO.id = this.formData.partsId;
        this.communicateManger.httpCommunicate.getResponseVO(partsDeleteRequestVO, "/parts/delete/" + partsDeleteRequestVO.id).then((PartsDeleteResponseVO) => {
          if (PartsDeleteResponseVO.getStatus == 1000 && PartsDeleteResponseVO.getResultCode > 0) {
            this.messageBox.success(PartsDeleteResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
            this.$store.commit('setWebModuleTreeClickType', null);
            this.webModuleTreeClickTypeNew.clickType = 'add';
            this.webModuleTreeClickTypeNew.level = 2;
            this.webModuleTreeClickTypeNew.modulesId = this.formData.modulesId;
            this.$store.commit('setWebModuleTreeClickType', this.webModuleTreeClickTypeNew);
          } else {
            this.messageBox.error(PartsDeleteResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .partsDetail {
  }

  .partsDetail .form-1 .el-button {
    width: 120px;
  }

  .partsDetail .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 200px;
    height: 200px;
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
    width: 200px;
    height: 200px;
    display: block;
  }

  .partsDetail .el-upload__input {
    display: none;
  }

  .partsDetail .el-radio-group {
    float: left;
  }

  .partsDetail .el-date-editor.el-input, .el-date-editor.el-input__inner {
    /* width: 50%; */
    float: left;
  }

</style>
