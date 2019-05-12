<template>
  <div class="userManage">
    <!--用户登记信息组件-->
    <div>
      <UpdateUserInfo></UpdateUserInfo>
    </div>
    <!--重置密码组件-->
    <div>
      <ResetUserPassword></ResetUserPassword>
    </div>
  </div>
</template>

<script>
  import ResetUserPassword from '@/moduleA/pc/components/home/tables/ResetUserPassword.vue'
  import UpdateUserInfo from '@/moduleA/pc/components/home/forms/UpdateUserInfo.vue'

  export default {
    name: "UserManage",
    components: {
      UpdateUserInfo,
      ResetUserPassword
    },
  }
</script>

<style scoped>

</style>
