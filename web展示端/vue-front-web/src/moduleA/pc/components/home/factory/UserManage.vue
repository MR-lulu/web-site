<template>
  <div class="userManage">
    <!--用户登记信息组件-->
    <div>
      <UpdateUserInfo></UpdateUserInfo>
    </div>
    <!--重置密码组件-->
    <div>
      <ResetUserPassword v-if="isRouterAlive"></ResetUserPassword>
    </div>
  </div>
</template>

<script>
  import ResetUserPassword from '@/moduleA/pc/components/home/tables/ResetUserPassword.vue'
  import UpdateUserInfo from '@/moduleA/pc/components/home/forms/UpdateUserInfo.vue'
  import {getLoginUserInfo} from '@/store/sessionstorage/index.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "UserManage",
    components: {
      UpdateUserInfo,
      ResetUserPassword
    },
    data() {
      return {
        isRouterAlive: false,
        userInfo: '',
      }
    },
    created() {
      // 初始化获取用户信息
      this.userInfo = JSON.parse(getLoginUserInfo());
      if (!Tools.isNull(this.userInfo) && this.userInfo.level == 1) {
        this.isRouterAlive = true;
      }
    }
  }
</script>

<style scoped>

</style>
