<template>
  <div class="title-container">
    <div
      class="title"
      :style="{
        'background-image': `url(${activity_title})`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import activity_title from '@/assets/images/activity_title.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
