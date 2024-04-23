<template>
  <div class="main-wrap">
    <Background />
    <component :is="gameSwitchStatus"></component>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'
import Background from '../../Event/global/Background/index.vue'
import Homepage from '../Main/Homepage/index.vue'
import clickDropGame from '../global/ClickDropGame/index.vue'

const useStore = useCounterStore()

const gameSwitchStatus = computed(() =>
  useStore.gettersGameSwitchStatus ? clickDropGame : Homepage
)
</script>

<style scoped lang="scss">
@import './index';
</style>
