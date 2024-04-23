<template>
  <div class="models-wrap">
    <Event />
    <RedEnvelopeDrop v-if="!gameSwitchStatus" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { computed } from 'vue'
import RedEnvelopeDrop from '../components/Models/Event/global/RedEnvelopeDrop/index.vue'
import Event from '../components/Models/Event/index.vue'

const useStore = useCounterStore()

const gameSwitchStatus = computed(() => useStore.gettersGameSwitchStatus)
</script>

<style scoped lang="scss"></style>
