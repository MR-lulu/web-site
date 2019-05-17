<template>
  <div class="parts-type">
    <!--零件类型组件-->
    <PartsType v-if="isRouterAlive == 'partsType'"></PartsType>
  </div>
</template>

<script>
  import PartsType from '@/moduleA/pc/components/home/tables/PartsType.vue'

  export default {
    name: "SystemSet",
    components: {
      PartsType
    },
    data() {
      return {
        isRouterAlive: ''
      }
    },
    created() {
      this.isRouterAlive = this.$route.query.component;
    },
  }
</script>

<style scoped>

  .parts-type {
  }
</style>
