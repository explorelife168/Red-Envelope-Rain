<template>
  <div
    class="bg-game-mobile"
    :style="{
      'background-image': `url(${bg_m})`
    }"
  >
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
</script>

<style scoped lang="scss">
@import './index';
</style>
