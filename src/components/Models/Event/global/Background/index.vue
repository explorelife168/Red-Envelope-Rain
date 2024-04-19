<template>
  <div
    class="bg-mobile"
    :style="{
      'background-image': `url(${bg_m})`
    }"
  ></div>
</template>
<script setup lang="ts">
import bg_m from '@/assets/images/bg_m.webp'
</script>

<style scoped lang="scss">
@import './index';
</style>
