<template>
  <div class="title-container">
    <div
      class="title"
      :style="{
        'background-image': `url(${title})`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import title from '@/assets/images/title.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
