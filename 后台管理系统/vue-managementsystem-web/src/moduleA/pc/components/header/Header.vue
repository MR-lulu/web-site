<template>
  <div id = 'header'>
    <table style="width: 100%">
      <tr>
        <td style="width: 65%"></td>
        <td style="width: 10%;text-align: right">
          <span >{{$t('rs.moduleA.80200000000')}}<!-- 设置 --></span>
        </td>
        <td style="width: 12% ;text-align: right;padding-right: 20px">
         <span> {{$t('rs.moduleA.80200000002')}}<!-- 语言 --><el-select v-model="languageValue" @change="changeLanguage" style="width: 120px;padding-left: 10px">
              <el-option
                v-for="item in languageOptions"
                :key="item.languageID"
                :label="item.name"
                :value="item.dirName">
              </el-option>
          </el-select></span>
        </td>
        <td style="width: 13%; text-align: left">
          <span>{{$t('rs.moduleA.80200000001')}}<!-- 主题 --><el-select v-model="theme" @change="changeThemes" style="width: 120px;padding-left: 10px">
              <el-option
                v-for="(theme,index) in themeOptions" :key="index"
                :label="$t(theme)"
                :value="index">
              </el-option>
            </el-select></span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {changeLanguage} from '@/commonjs/util/languageSet.js'
import Config from '@/framework/common/config/Config.js'
export default {
  inject: ['reload'],
  name: 'Header',
  data () {
    return {
      languageValue: this.memoryData.lang,
      languageOptions: this.memoryData.langs,
      themeOptions: Config.theme,
      theme: this.localStorage.getTheme('default')
      // theme: this.$i18n.t('pc.header.style')[getTheme()]
    }
  },
  methods: {
    changeLanguage: function () {
      changeLanguage(this.languageValue)
      this.reload()
    },
    changeThemes: function () {
      // 将主题存储到localStorage
      this.localStorage.setTheme(this.theme)
      // 设置主题
      var style = document.getElementById('pc_style')
      style.href = `assets/theme/pc/${this.theme}/framework/css/style.css`
    }
  }
}
</script>

<style scoped>
  #header{
    margin-top: 20px;
    width: 100%;
    height:60px;
    font-size: 14px;
  }
</style>
