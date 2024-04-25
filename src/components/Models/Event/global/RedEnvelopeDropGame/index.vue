<template>
  <div class="envelope-drop-game">
    <canvas id="envelopeDropGameCanvas" class="envelope-drop-game-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { onMounted, ref, watchEffect } from 'vue'
import { RedEnvelopeDropGameCanvasClass } from '../../animation/RedEnvelopeDropGameAnimation/index'

const useStore = useCounterStore()
const app = ref<RedEnvelopeDropGameCanvasClass | undefined>(undefined)

watchEffect(() => {
  if (app.value) {
    useStore.actionGameScoreController(app.value.score)
  }
})
onMounted(() => {
  app.value = new RedEnvelopeDropGameCanvasClass()
  app.value.play()
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
