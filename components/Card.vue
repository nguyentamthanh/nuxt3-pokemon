<template>
  <div class="card mb-4 mr-4 inline-block w-90px h-120px">
    <div
      class="card__inner w-full h-full transform cursor-pointer relative"
      @click="onToggleFlibCard"
      :class="{ 'is-flipped': isFlipped }"
    >
      <div
        class="card__face card__face--front absolute w-full h-full backface-hidden rounded-2xl p-4 shadow-lg"
      >
        <div class="card__content"></div>
      </div>
      <div
        class="card__face card__face--back absolute w-full h-full backface-hidden rounded-2xl p-4 shadow-lg"
      >
        <div class="card__content"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
  // imgBackFaceUrl: {
  //     type: String,
  //     require: true
  // }
});

const isFlipped = ref(false);
function onToggleFlibCard() {
  isFlipped.value = !isFlipped.value;
}
</script>
<style scoped lang="css">
.card__inner {
  transition: transform 1s;
  transform-style: preserve-3d;
}

.card__inner.is-flipped {
  transform: rotateY(-180deg);
}

.card__face--front .card__content {
  background: url("../assets/images/icon_back.png") no-repeat center;
  background-size: 40px 60px;
  height: 100%;
  width: 100%;
}

.card__face--back {
  background-color: var(--light);
  transform: rotateY(-180deg);
}

.card__face--back .card__content {
  background-image: contain;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
}
</style>
