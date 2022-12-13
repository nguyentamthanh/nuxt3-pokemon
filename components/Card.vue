<template>
  <div class="card mb-4 mr-4 inline-block w-100px h-140px">
    <div
      class="transition-transform duration-1000 w-full h-full transform cursor-pointer relative preserve-3d transition transform-[1]"
      @click="onToggleFlibCard"
      :class="{ '-rotate-y-180': isFlipped }"
    >
      <div
        class="absolute w-full h-full backface-hidden rounded-2xl p-4 shadow-lg"
      >
        <div class="w-full h-full flex justify-center items-center">
          <img
            class="w-60px h-60px"
            src="../assets/images/icon_back.png"
            alt=""
          />
        </div>
      </div>
      <div
        class="-rotate-y-180 transform absolute w-full h-full backface-hidden rounded-2xl p-4 shadow-lg"
      >
        <div class="w-full h-full flex justify-center items-center">
          <img
            class=""
            :src="`/_nuxt/assets/images/${imgBackFaceUrl}`"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  imgBackFaceUrl: {
    type: String,
    require: true,
  },
  card: {
    type: Object,
  },
});

const emit = defineEmits(["onFlip"]);
const isFlipped = ref(false);
function onToggleFlibCard() {
  isFlipped.value = !isFlipped.value;
  if (isFlipped.value) {
    emit("onFlip", props.card);
  }
}
function onFlibBack() {
  // console.log("🚀 ~ file: Card.vue:59 ~ onFlibBack ~ card", card);
  // setTimeout(() => {
  //   isFlipped.value = false;
  // }, 2000);
  isFlipped.value = false;
  console.log(
    "🚀 ~ file: Card.vue:59 ~ onFlibBack ~ isFlipped.value",
    isFlipped.value
  );
}
function test() {
  alert("sdahvfgvfas");
}
</script>
