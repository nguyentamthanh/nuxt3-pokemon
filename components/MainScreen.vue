<template>
  <div class="">
    <h1 class="">POKEMON BY THANH KUN</h1>
    <p class="">Select mode game to start game</p>
    <div class="">
      <button @click="onStart(16)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(36)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(64)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(100)">
        <span>10x10</span>
        <span>Super Hard</span>
      </button>
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits();
function onStart(totalOfBlocks) {
  emit("onStart", { totalOfBlocks });
}
</script>
<style lang="css"></style>
