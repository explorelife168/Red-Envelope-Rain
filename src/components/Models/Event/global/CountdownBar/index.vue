<template>
  <div
    class="countdown-bar-container"
    :style="{
      'background-image': `url(${countdown_bg})`
    }"
  >
    <div
      class="countdown-bar-blood"
      :style="{ width: `${percentage}%`, 'background-image': `url(${countdown_bar})` }"
    ></div>

    <div
      class="countdown-bar-cover"
      :style="{
        'background-image': `url(${countdown_cover})`
      }"
    ></div>
    <div class="content">
      <span class="high-light" v-show="countdownStatus !== '活動已結束'">
        {{ `${gettersCountDownName}` }}</span
      >
      {{ countdownStatus }}
    </div>
  </div>
</template>

<script setup lang="ts">
import countdown_bar from '@/assets/images/countdown_bar.webp'
import countdown_bg from '@/assets/images/countdown_bg.webp'
import countdown_cover from '@/assets/images/countdown_cover.webp'
import { useCounterStore } from '@/stores/counter'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const useStore = useCounterStore()

const countdownStatus = ref('')
const percentage = ref()
const countdownInterval = ref()
const progressInterval = ref()

const gettersCountDownName = computed(() => useStore.gettersCountDownName)
const gameStartTime = computed(() => useStore.gettersConvertGameStartTime)
const gameEndTime = computed(() => useStore.gettersConvertGameEndTime)

const countdownGameEndTime = () => {
  const currentTime = new Date().getTime()
  let remainTime = (gameEndTime.value - currentTime) / 1000
  const days = Math.floor(remainTime / (3600 * 24))
    .toString()
    .padStart(2, '0')
  const hours = Math.floor((remainTime % (3600 * 24)) / 3600)
    .toString()
    .padStart(2, '0')
  const minutes = Math.floor((remainTime % 3600) / 60)
    .toString()
    .padStart(2, '0')
  const seconds = Math.floor(remainTime % 60)
    .toString()
    .padStart(2, '0')

  countdownStatus.value = `${days}天${hours}小時${minutes}分${seconds}  結束` ?? '活動已結束'
}

const progressPercentage = () => {
  const currentTime = gameEndTime.value - new Date().getTime()
  const gameTime = gameEndTime.value - gameStartTime.value
  percentage.value = (currentTime / gameTime) * 100
}

onMounted(() => {
  countdownGameEndTime()
  progressPercentage()
  countdownInterval.value = setInterval(() => {
    countdownGameEndTime()
  }, 1000)
  progressInterval.value = setInterval(() => {
    progressPercentage()
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(countdownInterval.value)
  clearInterval(progressInterval.value)
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
