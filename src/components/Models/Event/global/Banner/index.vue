<template>
  <div class="banner-container">
    <div class="banner">
      <div class="border"></div>
      <div
        class="logo"
        :style="{
          'background-image': `url(${logo})`
        }"
      ></div>
      <div
        class="user-info"
        :style="{
          'background-image': `url(${user_icon})`
        }"
      >
        <div class="user-info-id">會員編號 <span>00908001</span></div>
      </div>
      <div
        class="game-info"
        :style="{
          'background-image': `url(${game_info})`
        }"
      ></div>
    </div>
    <div class="banner-block"></div>
  </div>
</template>

<script setup lang="ts">
import game_info from '@/assets/images/game_info.png'
import user_icon from '@/assets/images/user_icon.png'
import logo from '@/assets/logo/logo.png'
</script>
<style scoped lang="scss">
@import './index.scss';
</style>
