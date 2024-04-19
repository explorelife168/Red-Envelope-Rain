<template>
  <div class="envelope-drop">
    <canvas id="envelopeDropCanvas" class="envelope-drop-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RedEnvelopeDropCanvasClass } from '../../animation/RedEnvelopeDrop/index'

const app = ref<RedEnvelopeDropCanvasClass | undefined>(undefined)

onMounted(() => {
  app.value = new RedEnvelopeDropCanvasClass()
  app.value.play()
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
