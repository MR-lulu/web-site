<template>
  <div class="websiteHomePage">
    <!--零件点击量图表组件-->
    <div>
      <PartsTypeChart></PartsTypeChart>
    </div>
    <!--用户登记信息组件-->
    <div>
      <UserRegistration></UserRegistration>
    </div>
    <!--用户留言组件-->
    <div>
      <UserMessages></UserMessages>
    </div>
  </div>
</template>

<script>
  import PartsTypeChart from '@/moduleA/pc/components/home/charts/PartsTypeChart.vue'
  import UserRegistration from '@/moduleA/pc/components/home/tables/UserRegistration.vue'
  import UserMessages from '@/moduleA/pc/components/home/tables/UserMessages.vue'

  export default {
    name: "WebsiteHomePage",
    components: {
      PartsTypeChart,
      UserRegistration,
      UserMessages
    },

  }
</script>

<style>

</style>
