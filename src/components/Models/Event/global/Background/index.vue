<template>
  <div
    class="bg-mobile-container"
    :style="{
      'background-image': `url(${bg_m})`
    }"
  ></div>
</template>
<script setup lang="ts">
import bg_m from '@/assets/images/bg_m.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
