<template>
  <div class="event-wrap">
    <div
      class="bg-container"
      :style="{
        'background-image': `url(${bg_pc})`
      }"
    ></div>
    <Main />
  </div>
</template>

<script setup lang="ts">
import bg_pc from '@/assets/images/bg_pc.png'
import Main from '../Event/Main/index.vue'
</script>

<style scoped lang="scss">
@import './index';
</style>
