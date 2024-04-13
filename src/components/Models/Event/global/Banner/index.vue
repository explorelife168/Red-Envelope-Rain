<template>
  <div class="banner-container">
    <div
      class="logo"
      :style="{
        'background-image': `url(${logo})`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import logo from '@/assets/logo/logo.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
