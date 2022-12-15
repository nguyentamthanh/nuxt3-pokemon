<template>
  <div>
    <h1>interacter</h1>
    <Card
      v-for="(card, index) in cardsContext"
      :key="index"
      ref="myChild"
      :imgBackFaceUrl="`${card}.png`"
      :card="{ index: index, price: card }"
      @onFlip="checkRule"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  cardsContext: {
    type: Array,
    default: function () {
      return [];
    },
  },
});

const myChild = ref(null);
console.log("🚀 ~ file: InteractScreen.vue:26 ~ myChild", myChild);

let rules = [];
function checkRule(card) {
  if (rules.length === 2) return false;
  rules.push(card);
  if (rules.length === 2 && rules[0].price === rules[1].price) {
  } else if (rules.length === 2 && rules[0].price !== rules[1].price) {
    //close  two card
    console.log("Wrong...");
    // ref[rules[0].index].onFlibBack();
    console.log(
      "🚀 ~ file: InteractScreen.vue:46 ~ checkRule ~ ref[rules[0].index]",
      ref(rules[0].index).value.onFlibBack()
    );
    //reset rules

    rules = [];
  } else {
    return false;
  }
}
</script>
