<template>
  <div
    class="bg-game-mobile"
    :style="{
      'background-image': `url(${bg_m})`
    }"
  >
    <!-- 時鐘區塊 -->
    <div
      class="bg-game-clock"
      :style="{
        'background-image': `url(${clock})`
      }"
    >
      <!-- 時間倒數數字 -->
      <div class="time-count">
        <span class="time">{{ gameAfterCountDownValue }}</span> 秒
      </div>
      <!-- 分數 -->
      <div class="score" v-text="`${score}`"></div>

      <!-- 血條倒數 -->
      <div
        class="game-countdown-bar-container"
        :style="{
          'background-image': `url(${game_countdown_bg})`
        }"
      >
        <div
          class="game-countdown-bar-blood"
          :style="{
            width: `${progress}%`,
            'background-image': `url(${game_countdown_bar})`
          }"
        ></div>

        <div
          class="game-countdown-bar-cover"
          :style="{
            'background-image': `url(${game_countdown_cover})`
          }"
        ></div>
      </div>
    </div>

    <!-- 遊戲開始倒數 -->
    <div class="ready-start-game" v-if="gameStartBeforeCountDownValue > -1">
      <span v-if="gameStartBeforeCountDownValue > 0">{{ gameStartBeforeCountDownValue }}</span>
      <span class="here-we-go" v-if="!gameStartBeforeCountDownValue">{{ '遊戲開始' }}</span>
    </div>

    <!-- 底部雲 -->
    <div
      class="bg-game-footer"
      :style="{
        'background-image': `url(${bg_m_game_footer})`
      }"
    ></div>
    <RedEnvelopeDropGame />
  </div>
</template>
<script setup lang="ts">
import bg_m from '@/assets/images/bg_m.webp'
import bg_m_game_footer from '@/assets/images/bg_m_game_footer.webp'
import clock from '@/assets/images/clock.webp'
import game_countdown_bar from '@/assets/images/countdown_bar.webp'
import game_countdown_bg from '@/assets/images/countdown_bg.webp'
import game_countdown_cover from '@/assets/images/countdown_cover.webp'
import { useCounterStore } from '@/stores/counter'
import { computed, onMounted, ref, watch } from 'vue'
import RedEnvelopeDropGame from '../RedEnvelopeDropGame/index.vue'

const useStore = useCounterStore()
const score = computed(() => useStore.getterGameScoreController)

//遊戲三秒倒數
const gameStartBeforeCountDownValue = ref(3)
const beforeInterval = ref()

const gameStartBeforeCountDownController = () => {
  if (gameStartBeforeCountDownValue.value > -1) {
    gameStartBeforeCountDownValue.value -= 1
  }
}
const beforeGameInterval = () => {
  if (gameStartBeforeCountDownValue.value > 0) {
    beforeInterval.value = setInterval(gameStartBeforeCountDownController, 1000)
  } else {
    clearInterval(beforeInterval.value)
  }
}

// 遊戲開始三十秒倒數
const gameAfterCountDownValue = ref(30)
const AfterInterval = ref()

const gameStartAfterCountDownController = () => {
  if (gameAfterCountDownValue.value > 0) {
    gameAfterCountDownValue.value -= 1
  }
}

const AfterGameInterval = () => {
  if (gameAfterCountDownValue.value > 0) {
    AfterInterval.value = setInterval(gameStartAfterCountDownController, 1000)
    progressInterval.value = setInterval(progressPercentage, 1000)
  } else {
    clearInterval(AfterInterval.value)
    clearInterval(progressInterval.value)
    console.log(progress.value)
  }
}

// 扣血條
const progress = ref(100)
const progressInterval = ref()

const progressPercentage = () => {
  progress.value = (gameAfterCountDownValue.value / 30) * 100
}

watch(gameStartBeforeCountDownValue, (newVal) => {
  if (newVal === -1) {
    AfterGameInterval()
  }
})

onMounted(() => {
  beforeGameInterval()
})
</script>

<style scoped lang="scss">
@import './index';
</style>
