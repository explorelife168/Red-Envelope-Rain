<template>
  <div
    class="game-start-btn"
    @click="gameSwitchStatusController()"
    :style="{ 'background-image': `url(${game_start_btn})` }"
  >
    <div class="start-text" v-text="'開始遊戲'"></div>
  </div>
</template>

<script setup lang="ts">
import game_start_btn from '@/assets/images/game_btn.webp'
import { useCounterStore } from '@/stores/counter'

const useStore = useCounterStore()

const gameSwitchStatusController = () => {
  useStore.actionsGameSwitchStatusController()
}
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
