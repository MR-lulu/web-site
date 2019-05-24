<template>
  <div class="moduleDetail">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('rs.moduleA.20000000146') /*零件类型*/">
          <el-input v-model="partsTypeName" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000080') /*模块名称*/" prop="name">
          <el-input v-model="formData.name" :placeholder="$t('rs.moduleA.20000000081') /*请输入模块名称*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000065') /*显示序号*/" prop="priority">
          <el-input v-model="formData.priority" :placeholder="$t('rs.moduleA.20000000066') /*请输入显示序号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000084') /*模块状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1">{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2">{{$t('rs.moduleA.20000000060')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000082') /*模块备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000083') /*请输入模块备注*/"></el-input>
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
  import PartsTypeByIdRequestVO from '@/moduleA/common/js/model/PartsTypeByIdRequestVO.js'
  import ModuleDeleteRequestVO from '@/moduleA/common/js/model/ModuleDeleteRequestVO.js'
  import ModuleAddOrModifyRequestVO from '@/moduleA/common/js/model/ModuleAddOrModifyRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import { mapState } from 'vuex'

  export default {
    name: "ModuleDetail",
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
        partsTypeName: '',
        formData: {
          priority: '',
          name: '',
          remarks: '',
          partsTypeId: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
          navigationId: '',
          modulesId: '',
        },
        rules: {
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000066'), trigger: 'blur'}
          ],
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000081'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.20000000083'), trigger: 'blur'}
          ]
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
      // 根据id获取零件类型名称
      this.getPartsTypeById();
    },

    watch: {
      webModuleTreeClickType: function (newValue, oldValue) {
        if (newValue) {
          this.formData = this.webModuleTreeClickType.object;
          // 根据id获取零件类型名称
          this.getPartsTypeById();
        }
      }
    },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000030'), this.$t('rs.staticText.30000000008'), () => {  //您确认要修改模块吗？ 提示
            }, () => {
              // 修改模块
              this.updateModule();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },

      // 修改模块
      updateModule: function () {
        let moduleAddOrModifyRequestVO = new ModuleAddOrModifyRequestVO(this.ProtocolContent.moduleAddOrModify);
        moduleAddOrModifyRequestVO.name = this.formData.name;
        moduleAddOrModifyRequestVO.priority = this.formData.priority;
        moduleAddOrModifyRequestVO.remarks = this.formData.remarks;
        moduleAddOrModifyRequestVO.status = this.formData.status;
        moduleAddOrModifyRequestVO.modulesId = this.formData.modulesId;

        this.communicateManger.httpCommunicate.getResponseVO(moduleAddOrModifyRequestVO, "/modules/addOrModify").then((ModuleAddOrModifyResponseVO) => {
          if (ModuleAddOrModifyResponseVO.getStatus == 1000 && ModuleAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(ModuleAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(ModuleAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 删除模块
      deleteForm() {
        this.messageBox.confirm(this.$t('rs.staticText.30000000029'), this.$t('rs.staticText.30000000008'), () => {  //您确认要删除模块吗？ 提示
        }, () => {
          // 删除模块
          this.deleteModule();
        }, () => {
          // 取消
        });
      },

      // 删除模块
      deleteModule() {
        let moduleDeleteRequestVO = new ModuleDeleteRequestVO(this.ProtocolContent.moduleDelete);
        moduleDeleteRequestVO.id = this.formData.modulesId;
        this.communicateManger.httpCommunicate.getResponseVO(moduleDeleteRequestVO, "/modules/delete/" + moduleDeleteRequestVO.id).then((ModuleDeleteResponseVO) => {
          if (ModuleDeleteResponseVO.getStatus == 1000 && ModuleDeleteResponseVO.getResultCode > 0) {
            this.messageBox.success(ModuleDeleteResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
            this.$store.commit('setWebModuleTreeClickType', null);
            this.webModuleTreeClickTypeNew.clickType = 'add';
            this.webModuleTreeClickTypeNew.level = 2;
            this.webModuleTreeClickTypeNew.navigationId =  this.formData.navigationId;
            this.$store.commit('setWebModuleTreeClickType', this.webModuleTreeClickTypeNew);
          } else {
            this.messageBox.error(ModuleDeleteResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 根据id获取零件种类
      getPartsTypeById: function () {
        let partsTypeByIdRequestVO = new PartsTypeByIdRequestVO(this.ProtocolContent.partsTypeById);
        partsTypeByIdRequestVO.id = this.formData.partsTypeId;
        this.communicateManger.httpCommunicate.getResponseVO(partsTypeByIdRequestVO, "/partsType/query/detail/" + partsTypeByIdRequestVO.id).then((PartsTypeByIdResponseVO) => {
          if (PartsTypeByIdResponseVO.getStatus == 1000) {
            this.partsTypeName = PartsTypeByIdResponseVO.data.name;
          } else {
            this.messageBox.error(PartsTypeByIdResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    },
  }
</script>

<style scoped>
  .moduleDetail {
  }

  .moduleDetail .form-1 .el-button {
    width: 120px;
  }

  .moduleDetail .el-radio-group {
    float: left;
  }

  .moduleDetail .el-date-editor.el-input, .el-date-editor.el-input__inner {
    /* width: 50%; */
    float: left;
  }
</style>
