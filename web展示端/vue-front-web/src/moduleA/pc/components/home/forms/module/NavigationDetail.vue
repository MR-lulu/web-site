<template>
  <div class="navigationDetail">
    <!--表单内容-->
    <div class="form-1">
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
        <el-form-item :label="$t('rs.moduleA.20000000073') /*模块个数*/" prop="moduleNum">
          <el-input v-model="formData.moduleNum" disabled></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000074') /*导航状态*/">
          <el-radio-group v-model="formData.status">
            <!--正常-->
            <el-radio :label="1">{{$t('rs.moduleA.20000000059')}}</el-radio>
            <!--废弃-->
            <el-radio :label="2">{{$t('rs.moduleA.20000000060')}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000068') /*导航备注*/" prop="remarks">
          <el-input v-model="formData.remarks" type="textarea"
                    :placeholder="$t('rs.moduleA.20000000069') /*请输入导航备注*/"></el-input>
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
        <!--修改-->
        <el-button type="primary" @click="submitForm('formData')">{{$t('rs.moduleA.20000000044')}}</el-button>
        <!--删除-->
        <el-button type="danger" @click="deleteForm">{{$t('rs.moduleA.20000000019')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import NavigationAddOrModifyRequestVO from '@/moduleA/common/js/model/NavigationAddOrModifyRequestVO.js'
  import NavigationDeleteRequestVO from '@/moduleA/common/js/model/NavigationDeleteRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import {mapState} from 'vuex'

  export default {
    name: "NavigationDetail",
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
        formData: {
          navigationUrl: '',
          name: '',
          priority: '',
          remarks: '',
          site: '',
          moduleNum: '',
          status: '',
          serverCreateTime: '',
          serverUpdateTime: '',
          navigationId: ''
        },
        rules: {
          navigationUrl: [
            {required: false, message: this.$t('rs.moduleA.20000000064'), trigger: 'blur'}
          ],
          name: [
            {required: true, message: this.$t('rs.moduleA.20000000062'), trigger: 'blur'}
          ],
          priority: [
            {required: true, message: this.$t('rs.moduleA.20000000066'), trigger: 'blur'},
            {pattern: /^-?[1-9]\d*$/, message: this.$t('rs.staticText.30000000046')}
          ],
          site: [
            {required: false, message: this.$t('rs.moduleA.20000000072'), trigger: 'blur'}
          ],
          remarks: [
            {required: false, message: this.$t('rs.moduleA.20000000069'), trigger: 'blur'}
          ]
        }
      };
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
      // 修改导航
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.messageBox.confirm(this.$t('rs.staticText.30000000031'), this.$t('rs.staticText.30000000008'), () => {  //您确认要修改导航吗？ 提示
            }, () => {
              // 修改导航
              this.updateNavigation();
            }, () => {
              // 取消
            });
          } else {
            return false;
          }
        });
      },

      // 删除导航
      deleteForm() {
        this.messageBox.confirm(this.$t('rs.staticText.30000000027'), this.$t('rs.staticText.30000000008'), () => {  //您确认要删除导航吗？ 提示
        }, () => {
          // 删除导航
          this.deleteNavigation();
        }, () => {
          // 取消
        });
      },

      // 修改导航
      updateNavigation: function () {
        let navigationAddOrModifyRequestVO = new NavigationAddOrModifyRequestVO(this.ProtocolContent.navigationAddOrModify);
        navigationAddOrModifyRequestVO.navigationId = this.formData.navigationId;
        navigationAddOrModifyRequestVO.name = this.formData.name;
        navigationAddOrModifyRequestVO.navigationUrl = this.formData.navigationUrl;
        navigationAddOrModifyRequestVO.priority = this.formData.priority;
        navigationAddOrModifyRequestVO.remarks = this.formData.remarks;
        navigationAddOrModifyRequestVO.site = this.formData.site;
        navigationAddOrModifyRequestVO.status = this.formData.status;

        this.communicateManger.httpCommunicate.getResponseVO(navigationAddOrModifyRequestVO, "/navigation/addOrModify").then((NavigationAddOrModifyResponseVO) => {
          if (NavigationAddOrModifyResponseVO.getStatus == 1000 && NavigationAddOrModifyResponseVO.getResultCode > 0) {
            this.messageBox.success(NavigationAddOrModifyResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
          } else {
            this.messageBox.error(NavigationAddOrModifyResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 删除导航
      deleteNavigation: function () {
        let navigationDeleteRequestVO = new NavigationDeleteRequestVO(this.ProtocolContent.navigationAddOrModify);
        navigationDeleteRequestVO.id = this.formData.navigationId;

        this.communicateManger.httpCommunicate.getResponseVO(navigationDeleteRequestVO, "/navigation/delete/" + navigationDeleteRequestVO.id).then((NavigationDeleteResponseVO) => {
          if (NavigationDeleteResponseVO.getStatus == 1000 && NavigationDeleteResponseVO.getResultCode > 0) {
            this.messageBox.success(NavigationDeleteResponseVO.getMsg);
            // 通知更新树
            this.$store.commit('setUpdateWebModuleTreeFlag', Math.ceil(Math.random() * 10000));
            this.$store.commit('setWebModuleTreeClickType', null);
            this.webModuleTreeClickTypeNew.clickType = 'add';
            this.webModuleTreeClickTypeNew.level = 1;
            this.$store.commit('setWebModuleTreeClickType', this.webModuleTreeClickTypeNew);
          } else {
            this.messageBox.error(NavigationDeleteResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    }
  }
</script>

<style scoped>
  .navigationDetail {

  }

  .navigationDetail .form-name {
    font-size: 18px;
    padding-top: 2%;
  }

  .navigationDetail .form-1 {
    width: 90%;
    margin: 0 auto;
  }

  .navigationDetail .form-1 .el-button {
    width: 120px;
  }

  .navigationDetail .el-radio-group {
    float: left;
  }

  .navigationDetail .el-date-editor.el-input, .el-date-editor.el-input__inner {
    /* width: 50%; */
    float: left;
  }
</style>
