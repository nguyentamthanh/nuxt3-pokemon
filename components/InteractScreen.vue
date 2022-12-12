<template>
  <div>
    <h1>interacter</h1>
    <Card
      v-for="(card, index) in cardsContext"
      :key="index"
      :imgBackFaceUrl="`${card}.png`"
    />
  </div>
</template>
<script setup>
const props = defineProps({
  cardsContext: {
    type: Array,
    default: function () {
      return [];
    },
  },
});
</script>
