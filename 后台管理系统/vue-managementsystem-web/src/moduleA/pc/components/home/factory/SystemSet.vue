<template>
  <div class="parts-type">
    <div>
      <router-view v-if="isRouterAlive"></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SystemSet",
  }
</script>

<style scoped>

  .parts-type {
  }
</style>
