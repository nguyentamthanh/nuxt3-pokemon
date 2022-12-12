<template>
  <div>
    <MainScreen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart"
    ></MainScreen>
    <InteractScreen
      v-if="statusMatch === 'match'"
      :cardsContext="settings.cardsContext"
    ></InteractScreen>
  </div>
</template>
<script setup>
import { shuffled } from "../utils/array";
const statusMatch = ref("default");
const settings = ref({
  totalOfBlocks: 0,
  cardsContext: [],
  startedAt: null,
});
const time = ref(0);
function onHandleBeforeStart(config) {
  settings.value.totalOfBlocks = config.totalOfBlocks;

  const firstCards = Array.from(
    { length: settings.value.totalOfBlocks / 2 },
    (_, i) => i + 1
  );

  const secondCards = [...firstCards];

  const cards = [...firstCards, ...secondCards];

  settings.value.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));

  settings.value.startedAt = new Date().getTime();

  //data ready
  statusMatch.value = "match";
}
</script>
