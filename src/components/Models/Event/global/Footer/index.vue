<template>
  <div
    class="footer-cloud"
    :style="{
      'background-image': `url(${footer_cloud})`
    }"
  >
    <div
      class="footer-red-envelope"
      :style="{
        'background-image': `url(${footer_red_envelope})`
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import footer_cloud from '@/assets/images/footer_1.webp'
import footer_red_envelope from '@/assets/images/footer_2.webp'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
