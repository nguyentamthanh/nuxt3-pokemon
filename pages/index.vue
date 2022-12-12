<template>
  <div>
    <MainScreen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart"></MainScreen>
    <InteractScreen v-if="statusMatch === 'match'"></InteractScreen>
  </div>
</template>
<script setup>
import { shuffled } from "../utils/array"
const statusMatch = ref("default")
const settings = ref({
  totalOfBlocks: 0,
  cardsContext: [],
  startedAt: null,
})
const time = ref(0)
function onHandleBeforeStart(config) {
  statusMatch.value = 'match'
  settings.value.totalOfBlocks = config.totalOfBlocks
  const firstCards = Array.from({ length: settings.value.totalOfBlocks / 2 }, (_, i) => i + 1)
  const secondCards = [...firstCards]
  const cards = [...firstCards, ...secondCards]
  settings.value.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))))
  console.log("🚀 ~ file: index.vue:23 ~ onHandleBeforeStart ~ settings.value.cardsContext", settings.value.cardsContext)
}
</script>
