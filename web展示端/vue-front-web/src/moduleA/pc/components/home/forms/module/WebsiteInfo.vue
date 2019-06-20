<template>
  <div class="websiteInfo">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('rs.moduleA.20000000124') /*所有者名称*/" prop="owner">
          <el-input v-model="formData.owner" :placeholder="$t('rs.moduleA.20000000125') /*请输入所有者名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000023') /*联系方式*/" prop="contact">
          <el-input v-model="formData.contact" :placeholder="$t('rs.moduleA.20000000128') /*请输入联系方式*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000024') /*联系地址*/" prop="address">
          <el-input v-model="formData.address" :placeholder="$t('rs.moduleA.20000000112') /*请输入联系地址*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000113') /*联系电话*/" prop="phone">
          <el-input v-model="formData.phone" :placeholder="$t('rs.moduleA.20000000114') /*请输入联系电话*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000126') /*应用方向*/" prop="application">
          <el-input v-model="formData.application" :placeholder="$t('rs.moduleA.20000000127') /*请输入应用方向*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000129') /*网站地址*/" prop="webAddress">
          <el-input v-model="formData.webAddress" :placeholder="$t('rs.moduleA.20000000130') /*请输入网站地址*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000040') /*绑定邮箱*/" prop="email">
          <el-input v-model="formData.email" :placeholder="$t('rs.moduleA.20000000041') /*请输入绑定的邮箱*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000131') /*网站简介*/" prop="webShortInfo">
          <el-input v-model="formData.webShortInfo" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000132') /*请输入网站简介*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000133') /*所有者简介*/" prop="ownerShortInfo">
          <el-input v-model="formData.ownerShortInfo" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000134') /*请输入所有者简介*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000135') /*网站备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.2000000036') /*请输入网站备注*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000137') /*网站信息状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1">{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2">{{$t('rs.moduleA.20000000060')}}</el-radio>
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
        <!--修改-->
        <el-button type="primary" @click="submitForm('formData')">{{$t('rs.moduleA.20000000044')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import WebSiteInfoAddOrModifyRequestVO from '@/moduleA/common/js/model/WebSiteInfoAddOrModifyRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import {mapState} from 'vuex'

  export default {
    name: "WebsiteInfo",
    data() {
      return {
        formData: {
          webInfoId: '',
          owner: '',
          contact: '',
          address: '',
          phone: '',
          application: '',
          webAddress: '',
          email: '',
          webShortInfo: '',
          ownerShortInfo: '',
          remarks: '',
          status: '',
          createTime: '',
          updateTime: ''
        },
        rules: {
          owner: [
            {required: true, message: this.$t('rs.moduleA.20000000125'), trigger: 'blur'}
          ],
          contact: [
            {required: true, message: this.$t('rs.moduleA.20000000128'), trigger: 'blur'}
          ],
          address: [
            {required: true, message: this.$t('rs.moduleA.20000000112'), trigger: 'blur'}
          ],
          phone: [
            {required: true, message: this.$t('rs.moduleA.20000000114'), trigger: 'blur'},
            {
              validator: function (rule, value, callback) {
                if (Tools.isPhone(value) == false && Tools.isTelphone(value) == false) {
                  callback(new Error('请输入正确的手机号或是电话号码'));
                } else {
                  callback();
                }
              }, trigger: 'change'
            }
          ],
          application: [
            {required: true, message: this.$t('rs.moduleA.20000000127'), trigger: 'blur'}
          ],
          webAddress: [
            {required: true, message: this.$t('rs.moduleA.20000000130'), trigger: 'change'},
            {
              pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/,
              message: this.$t('rs.staticText.30000000042')
            }
          ],
          email: [
            {type: 'email', required: true, message: this.$t('rs.staticText.30000000013'), trigger: 'change'}
          ],
          webShortInfo: [
            {required: false, message: this.$t('rs.moduleA.20000000132'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.2000000036'), trigger: 'blur'}
          ],
        }
      }
    },

    computed: {
      ...mapState(['webModuleTreeClickType']),
    },

    created() {
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
            this.messageBox.confirm(this.$t('rs.staticText.30000000040'), this.$t('rs.staticText.30000000008'), () => {  // 您确认要修改网站信息吗？ 提示
            }, () => {
              // 修改网站信息
              this.updateWebsiteInfo();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },

      // 修改网站信息
      updateWebsiteInfo: function () {
        let webSiteInfoAddOrModifyRequestVO = new WebSiteInfoAddOrModifyRequestVO(this.ProtocolContent.webTopAddOrModify);
        webSiteInfoAddOrModifyRequestVO.phone = this.formData.phone;
        webSiteInfoAddOrModifyRequestVO.address = this.formData.address;
        webSiteInfoAddOrModifyRequestVO.contact = this.formData.contact;
        webSiteInfoAddOrModifyRequestVO.owner = this.formData.owner;
        webSiteInfoAddOrModifyRequestVO.application = this.formData.application;
        webSiteInfoAddOrModifyRequestVO.webAddress = this.formData.webAddress;
        webSiteInfoAddOrModifyRequestVO.remarks = this.formData.remarks;
        webSiteInfoAddOrModifyRequestVO.email = this.formData.email;
        webSiteInfoAddOrModifyRequestVO.webShortInfo = this.formData.webShortInfo;
        webSiteInfoAddOrModifyRequestVO.ownerShortInfo = this.formData.ownerShortInfo;
        webSiteInfoAddOrModifyRequestVO.status = this.formData.status;
        webSiteInfoAddOrModifyRequestVO.webInfoId = this.formData.webInfoId;

        this.communicateManger.httpCommunicate.getResponseVO(webSiteInfoAddOrModifyRequestVO, "/webInfo/addOrModify").then((WebSiteInfoAddOrModifyResponseVO) => {
          if (WebSiteInfoAddOrModifyResponseVO.getStatus == 1000 && WebSiteInfoAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(WebSiteInfoAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(WebSiteInfoAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style scoped>
  .websiteInfo {
  }

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

  .websiteInfo .el-radio-group {
    float: left;
    padding-top: 10px;
  }

</style>
