<template>
  <div>
    <MainScreen></MainScreen>
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
</script>
