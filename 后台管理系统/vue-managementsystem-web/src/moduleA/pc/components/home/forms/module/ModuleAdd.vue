<template>
  <div class="module-add">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('rs.moduleA.20000000078') /*模块类型*/" prop="partsTypeId">
          <el-select v-model="formData.partsTypeId" :placeholder="$t('rs.moduleA.20000000079') /*请选择模块类型*/">
            <el-option v-for="(item,index) in partsTypeList" :key="index" :label="item.name"
                       :value="item.partsTypeId"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000080') /*模块名称*/" prop="name">
          <el-input v-model="formData.name" :placeholder="$t('rs.moduleA.20000000081') /*请输入模块名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000065') /*显示序号*/" prop="priority">
          <el-input v-model="formData.priority" :placeholder="$t('rs.moduleA.20000000066') /*请输入显示序号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000082') /*模块备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000083') /*请输入模块备注*/"></el-input>
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
  import PartsTypeListRequestVO from '@/moduleA/common/js/model/PartsTypeListRequestVO.js'
  import ModuleAddOrModifyRequestVO from '@/moduleA/common/js/model/ModuleAddOrModifyRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "ModuleAdd",
    data() {
      return {
        partsTypeList: [],
        formData: {
          priority: '',
          name: '',
          remarks: '',
          partsTypeId: []
        },
        // 导航ID
        navigationId: '',
        rules: {
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000066'), trigger: 'blur'}
          ],
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000081'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.20000000083'), trigger: 'blur'}
          ],
          partsTypeId: [
            {required: true, message: this.$t('rs.moduleA.20000000079'), trigger: 'blur'}
          ]
        }
      }
    },
    created() {
      // 获取零件类型
      this.getPartsTypeList();
      // 获取导航ID

    },
    methods: {
      // 表单提交，添加模块
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000028'), this.$t('rs.staticText.30000000008'), () => {  //您确认要添加模块吗？ 提示
            }, () => {
              // 添加导航
              this.addModule();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },
      // 获取零件类型
      getPartsTypeList: function () {
        let partsTypeListRequestVO = new PartsTypeListRequestVO(this.ProtocolContent.partsTypeList);
        this.communicateManger.httpCommunicate.getResponseVO(partsTypeListRequestVO, "/partsType/query/list").then((PartsTypeListResponseVO) => {
          if (PartsTypeListResponseVO.getStatus == 1000) {
            this.partsTypeList = new Array();
            this.partsTypeList = PartsTypeListResponseVO.resultList;
          } else {
            this.messageBox.error(PartsTypeListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 添加模块
      addModule: function () {
        let moduleAddOrModifyRequestVO = new ModuleAddOrModifyRequestVO(this.ProtocolContent.moduleAddOrModify);
        moduleAddOrModifyRequestVO.name = this.formData.name;
        moduleAddOrModifyRequestVO.partsTypeId = this.formData.partsTypeId;
        moduleAddOrModifyRequestVO.priority = this.formData.priority;
        moduleAddOrModifyRequestVO.remarks = this.formData.remarks;
        moduleAddOrModifyRequestVO.status = 1;
        moduleAddOrModifyRequestVO.navigationId = this.navigationId;

        this.communicateManger.httpCommunicate.getResponseVO(moduleAddOrModifyRequestVO, "/modules/addOrModify").then((ModuleAddOrModifyResponseVO) => {
          if (ModuleAddOrModifyResponseVO.getStatus == 1000 && ModuleAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(ModuleAddOrModifyResponseVO.getMsg);
          } else {
            this.messageBox.error(ModuleAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    },
  }
</script>

<style scoped>
  .module-add {

  }

  .module-add .form-1 .el-button {
    width: 120px;
  }

  .module-add .el-select {
    float: left;
  }
</style>
