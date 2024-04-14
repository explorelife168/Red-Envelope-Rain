import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const countDownName = ref('活動時間剩下')
  const gameStartTime = ref('2024-03-30T00:00:00')
  const gameEndTime = ref('2024-04-30T00:00:00')

  const gettersCountDownName = computed(() => {
    return countDownName.value
  })

  const gettersConvertGameStartTime = computed(() => {
    const convertStartTime = new Date(gameStartTime.value).getTime()
    return convertStartTime
  })

  const gettersConvertGameEndTime = computed(() => {
    const convertEndTime = new Date(gameEndTime.value).getTime()
    return convertEndTime
  })
  return {
    countDownName,
    gameStartTime,
    gameEndTime,
    gettersCountDownName,
    gettersConvertGameStartTime,
    gettersConvertGameEndTime
  }
})
