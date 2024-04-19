<template>
  <div class="home-wrap">
    <Title />
    <CountdownBar />
    <Scroll />
    <GameStartBtn />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import CountdownBar from '../../global/CountdownBar/index.vue'
import Footer from '../../global/Footer/index.vue'
import GameStartBtn from '../../global/GameStartBtn/index.vue'
import Scroll from '../../global/Scroll/index.vue'
import Title from '../../global/Title/index.vue'
</script>

<style scoped lang="scss">
@import './index';
</style>
