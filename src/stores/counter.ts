import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const countDownName = ref('活動時間剩下')
  const doubleCount = computed(() => count.value * 2)
  const getterCountDownName = computed(() => countDownName.value)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
