<template>
  <div
    class="countdown-bar-container"
    :style="{
      'background-image': `url(${countdown_bg})`
    }"
  >
    <div class="countdown-bar-blood"></div>
    <div
      class="countdown-bar-cover"
      :style="{
        'background-image': `url(${countdown_cover})`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import countdown_bg from '@/assets/images/countdown_bg.png'
import countdown_cover from '@/assets/images/countdown_cover.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
