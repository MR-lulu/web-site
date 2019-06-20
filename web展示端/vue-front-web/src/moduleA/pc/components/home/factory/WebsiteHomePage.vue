<template>
  <div class="websiteHomePage">
    <!--零件点击量图表组件-->
    <div>
      <PartsChart></PartsChart>
    </div>
    <!--零件点击量统计表-->
    <div>
      <PartsClickCount></PartsClickCount>
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
  import PartsChart from '@/moduleA/pc/components/home/charts/PartsChart.vue'
  import UserRegistration from '@/moduleA/pc/components/home/tables/UserRegistration.vue'
  import UserMessages from '@/moduleA/pc/components/home/tables/UserMessages.vue'
  import PartsClickCount from '@/moduleA/pc/components/home/tables/PartsClickCount.vue'

  export default {
    name: "WebsiteHomePage",
    components: {
      PartsChart,
      UserRegistration,
      UserMessages,
      PartsClickCount
    },

  }
</script>

<style>

</style>
