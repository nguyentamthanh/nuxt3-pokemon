<template>
    <div
        class="w-full h-full absolute top-0 left-0 z-[2px] flex items-center flex-col bg-primaryDark text-primaryLight pt-10">
        <h1 class="uppercase font-bold text-lg">POKEMON BY THANH KUN</h1>
        <p class="font-semibold text-lg">
            Select mode game to start game
        </p>
        <div class="modes">
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
const emit = defineEmits()
function onStart(totalOfBlocks) {
    emit("onStart", { totalOfBlocks });
}
</script>
<style lang="css" scoped>
.modes {
    display: flex;
    margin-top: 2rem;
}

.modes button {
    font: var(--font);
    width: 150px;
    height: 150px;
    background: transparent;
    box-shadow: none;
    border: 1px solid var(--light);
    color: var(--light);
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
    margin: 0 1rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
}

.modes button:hover {
    background-color: var(--light);
    color: var(--dark);
}

.modes button span:first-child {
    font-size: 2rem;
}

.modes button span:last-child {
    display: block;
    font-size: 1.25rem;
    margin-top: 0.5rem;
}
</style>