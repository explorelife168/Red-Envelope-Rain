import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const countDownName = ref('活動時間剩下')

  const gettersCountDownName = computed(() => {
    return countDownName.value
  })

  return { countDownName, gettersCountDownName }
})
