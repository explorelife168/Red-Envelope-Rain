import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // status
  const countDownName = ref('活動時間剩下')
  const gameStartTime = ref('2024-03-30T00:00:00')
  const gameEndTime = ref('2024-04-30T00:00:00')
  const gameSwitchStatus = ref(false)
  const gameScore = ref(0)

  // getter
  const gettersCountDownName = computed(() => countDownName.value)

  const gettersConvertGameStartTime = computed(() => {
    const convertStartTime = new Date(gameStartTime.value).getTime()
    return convertStartTime
  })

  const gettersConvertGameEndTime = computed(() => {
    const convertEndTime = new Date(gameEndTime.value).getTime()
    return convertEndTime
  })

  const gettersGameSwitchStatus = computed(() => gameSwitchStatus.value)

  const getterGameScoreController = computed(() => gameScore.value)

  // action
  const actionsGameSwitchStatusController = () => {
    return (gameSwitchStatus.value = !gameSwitchStatus.value)
  }

  const actionGameScoreController = (val: number) => {
    gameScore.value = val
  }

  return {
    countDownName,
    gameStartTime,
    gameEndTime,
    gettersGameSwitchStatus,
    getterGameScoreController,

    gettersCountDownName,
    gettersConvertGameStartTime,
    gettersConvertGameEndTime,
    actionsGameSwitchStatusController,
    actionGameScoreController
  }
})
