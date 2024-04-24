<template>
  <div class="envelope-drop-game">
    <canvas id="envelopeDropGameCanvas" class="envelope-drop-game-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RedEnvelopeDropGameCanvasClass } from '../../animation/RedEnvelopeDropGameAnimation/index'

const app = ref<RedEnvelopeDropGameCanvasClass | undefined>(undefined)

onMounted(() => {
  app.value = new RedEnvelopeDropGameCanvasClass()
  app.value.play()
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
