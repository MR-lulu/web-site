<template>
  <div class="parts-display">
    <div class="form-1">
      <!--表单内容-->
      <el-form :model="formDate" :rules="rules" ref="formDate" label-width="100px" class="demo-ruleForm">
        <el-form-item label="种类序号" prop="partsTypeSequence">
          <el-input v-model="formDate.partsTypeSequence" disabled placeholder="请输入种类序号"></el-input>
        </el-form-item>
        <el-form-item label="种类名称" prop="partsTypeName">
          <el-input v-model="formDate.partsTypeName" disabled placeholder="请输入种类名称"></el-input>
        </el-form-item>
        <el-form-item label="种类备注" prop="partsTypeRemark">
          <el-input v-model="formDate.partsTypeRemark" disabled type="textarea" placeholder="请输入种类备注"></el-input>
        </el-form-item>
        <el-form-item label="种类状态">
          <el-radio-group v-model="formDate.status" disabled>
            <el-radio label="有效"></el-radio>
            <el-radio label="无效"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-input v-model="formDate.createTime" disabled></el-input>
        </el-form-item>
        <el-form-item label="修改时间" prop="updateTime">
          <el-input v-model="formDate.updateTime" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PartsDisplay",
    data() {
      return {
        imageUrl: '',
        formDate: {
          partsTypeSequence: '',
          partsTypeName: '',
          partsTypeRemark: '',
          status: '',
          createTime: '',
          updateTime: ''
        },
        rules: {
          partsTypeName: [
            {required: false, message: '请输入种类名称', trigger: 'blur'}
          ]
        }
      }
    },

    create() {

    },

    methods: {
    },
  }
</script>

<style>
  .parts-display {}

  .parts-display .form-1 .el-button {
    width: 120px;
  }
</style>
