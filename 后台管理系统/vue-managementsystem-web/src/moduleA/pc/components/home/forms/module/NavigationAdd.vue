<template>
  <div class="navigation-add">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('rs.moduleA.20000000061') /*导航名称*/" prop="name">
          <el-input v-model="formData.name" :placeholder="$t('rs.moduleA.20000000062') /*请输入导航名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000063') /*导航链接*/" prop="navigationUrl">
          <el-input v-model="formData.navigationUrl" :placeholder="$t('rs.moduleA.20000000064') /*请输入导航链接*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000065') /*显示序号*/" prop="priority">
          <el-input v-model="formData.priority" :placeholder="$t('rs.moduleA.20000000066') /*请输入显示序号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000071') /*所属站点*/" prop="site">
          <el-input v-model="formData.site" :placeholder="$t('rs.moduleA.20000000072') /*请输入所属站点*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000068') /*导航备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000069') /*请输入导航备注*/"></el-input>
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
  import NavigationAddOrModifyRequestVO from '@/moduleA/common/js/model/NavigationAddOrModifyRequestVO.js'

  export default {
    name: "NavigationAdd",
    data() {
      return {
        formData: {
          navigationUrl: '',
          name: '',
          priority: '',
          remarks: '',
          site: ''
        },
        rules: {
          navigationUrl: [
            {required: true, message: this.$t('rs.moduleA.20000000064'), trigger: 'blur'}
          ],
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000062'), trigger: 'blur'}
          ],
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000066'), trigger: 'blur'}
          ],
          site: [
            {required: false, message: this.$t('rs.moduleA.20000000072'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.20000000069'), trigger: 'blur'}
          ]
        }
      }
    },

    methods: {
      // 表单提交， 添加导航
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000026'), this.$t('rs.staticText.30000000008'), () => {  //您确认要添加导航吗？ 提示
            }, () => {
              // 添加导航
              this.addNavigation();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },

      // 添加导航
      addNavigation: function () {
        let navigationAddOrModifyRequestVO = new NavigationAddOrModifyRequestVO(this.ProtocolContent.navigationAddOrModify);
        navigationAddOrModifyRequestVO.name = this.formData.name;
        navigationAddOrModifyRequestVO.navigationUrl = this.formData.navigationUrl;
        navigationAddOrModifyRequestVO.priority = this.formData.priority;
        navigationAddOrModifyRequestVO.remarks = this.formData.remarks;
        navigationAddOrModifyRequestVO.site = this.formData.site;

        this.communicateManger.httpCommunicate.getResponseVO(navigationAddOrModifyRequestVO, "/navigation/addOrModify").then((NavigationAddOrModifyResponseVO) => {
          if (NavigationAddOrModifyResponseVO.getStatus == 1000 && NavigationAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(NavigationAddOrModifyResponseVO.getMsg);
          } else {
            this.messageBox.error(NavigationAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    },
  }
</script>

<style scoped>
  .navigation-add {
  }

  .navigation-add .form-1 .el-button {
    width: 120px;
  }
</style>
