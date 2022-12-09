<template>
  <div>
    <MainScreen v-if="statusMatch === 'default'" @onStart="onHandleBeforeStart"></MainScreen>
    <InteractScreen v-if="statusMatch === 'match'"></InteractScreen>
  </div>
</template>
<script setup>
const statusMatch = ref("default")
const settings = ref({
  totalOfBlocks: 0,
  cardsContext: [],
  startedAt: null,
})
const time = ref(0)
function onHandleBeforeStart(config) {
  console.log("🚀 ~ file: index.vue:16 ~ onHandleBeforeStart ~ config", config)
  statusMatch.value = 'match'
}
</script>
