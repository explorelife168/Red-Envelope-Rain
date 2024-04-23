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
      <div class="time-count"><span class="time">30</span> 秒</div>

      <div class="score" v-text="'888'"></div>

      <div
        class="game-countdown-bar-container"
        :style="{
          'background-image': `url(${game_countdown_bg})`
        }"
      >
        <div
          class="game-countdown-bar-blood"
          :style="{ 'background-image': `url(${game_countdown_bar})` }"
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
    <div class="ready-start-game" v-if="countDownGameStartValue > -1">
      <span v-if="countDownGameStartValue > 0">{{ countDownGameStartValue }}</span>
      <span class="here-we-go" v-if="!countDownGameStartValue">{{ '遊戲開始' }}</span>
    </div>
    {{ countDownGameStartValue }}
    <!-- 底部雲 -->
    <div
      class="bg-game-footer"
      :style="{
        'background-image': `url(${bg_m_game_footer})`
      }"
    ></div>
  </div>
</template>
<script setup lang="ts">
import bg_m from '@/assets/images/bg_m.webp'
import bg_m_game_footer from '@/assets/images/bg_m_game_footer.webp'
import clock from '@/assets/images/clock.webp'
import game_countdown_bar from '@/assets/images/countdown_bar.webp'
import game_countdown_bg from '@/assets/images/countdown_bg.webp'
import game_countdown_cover from '@/assets/images/countdown_cover.webp'
import { onMounted, ref } from 'vue'

const countDownGameStartValue = ref(3)

const countDownController = () => {
  if (countDownGameStartValue.value > -1) {
    countDownGameStartValue.value -= 1
  }
}
const timer = setInterval(countDownController, 1000)

onMounted(() => {
  if (!countDownGameStartValue.value) {
    clearInterval(timer)
  } else {
    timer
  }
})
</script>

<style scoped lang="scss">
@import './index';
</style>
