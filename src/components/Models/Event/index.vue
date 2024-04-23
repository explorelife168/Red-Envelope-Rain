<template>
  <div class="event-wrap">
    <div
      class="bg-container"
      :style="{
        'background-image': `url(${bg_pc})`
      }"
    ></div>
    <Banner v-if="!GameSwitchStatus" />
    <Main />
  </div>
</template>

<script setup lang="ts">
import bg_pc from '@/assets/images/bg_pc.webp'
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'
import Main from '../Event/Main/index.vue'
import Banner from './global/Banner/index.vue'

const useStore = useCounterStore()

const GameSwitchStatus = computed(() => useStore.gettersGameSwitchStatus)
</script>

<style scoped lang="scss">
@import './index';
</style>
