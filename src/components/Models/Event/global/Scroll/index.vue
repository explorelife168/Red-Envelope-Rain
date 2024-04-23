<template>
  <div class="scroll-container">
    <!-- scroll-top -->
    <div class="scroll-top" :style="{ 'background-image': `url(${scroll_top})` }">
      <div class="expend-text">
        <div class="expend-ch" v-text="'您的消費金額'"></div>
        <div class="expend-money" v-text="'$88,000'"></div>
      </div>
      <div class="frequency-text">
        <div class="remain-ch" v-text="'遊戲剩餘次數'"></div>
        <div class="remain-counter">8<span>/次</span></div>
      </div>
    </div>
    <!-- scroll-paper -->
    <div class="scroll-paper" :style="{ 'background-image': `url(${scroll_paper})` }">
      <div class="refresh-ranking-title" :style="{ 'background-image': `url(${refresh})` }"></div>
      <div class="rank" v-for="(rank, index) in ranks" :key="index">
        <div :class="`rank-${index + 1}`" :style="{ 'background-image': `url(${rank.rank})` }">
          <div class="user-info-container">
            <div class="user-info">{{ rank.user_id_text }}</div>
            <div class="user-info-id">{{ rank.user_id }}</div>
          </div>
          <div class="score-container">
            <div class="score-text">{{ rank.score_text }}</div>
            <div class="score">{{ rank.score }}</div>
          </div>
        </div>
      </div>
      <div class="award-title" :style="{ 'background-image': `url(${award_title})` }"></div>
      <div class="award" :style="{ 'background-image': `url(${award})` }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import award from '@/assets/images/award.webp'
import award_title from '@/assets/images/award_title.webp'
import rank_1 from '@/assets/images/rank_1.webp'
import rank_2 from '@/assets/images/rank_2.webp'
import rank_3 from '@/assets/images/rank_3.webp'
import refresh from '@/assets/images/refresh.webp'
import scroll_top from '@/assets/images/scroll_bg.webp'
import scroll_paper from '@/assets/images/scroll_paper_bg.webp'
import { ref } from 'vue'

const ranks = ref([
  { rank: rank_1, user_id_text: '會員編號', user_id: '00908001', score_text: '分數', score: 888 },
  { rank: rank_2, user_id_text: '會員編號', user_id: '00908032', score_text: '分數', score: 868 },
  { rank: rank_3, user_id_text: '會員編號', user_id: '00907057', score_text: '分數', score: 780 }
])
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
