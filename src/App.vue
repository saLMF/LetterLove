<script setup>
import {ref} from "vue";
import IntroGift from "./components/IntroGift.vue";
import PetalField from "./components/PetalField.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

const opened = ref(false);
const introOut = ref(false);
const flashOn = ref(false);
const flashOff = ref(false);
const petalRef = ref(null);

function openGift() {
  if (opened.value) return;
  // flash pink
  flashOn.value = true;
  setTimeout(() => {
    flashOn.value = false;
    flashOff.value = true;
    introOut.value = true;
    opened.value = true;
    petalRef.value?.start();
    setTimeout(() => {
      flashOff.value = false;
    }, 900);
  }, 320);
}
</script>

<template>
  <!-- FLASH OVERLAY -->
  <div
    id="flash"
    :class="{on: flashOn, off: flashOff}"
    aria-hidden="true"
  ></div>

  <!-- INTRO SCREEN -->
  <IntroGift
    v-if="!introOut || !opened"
    :out="introOut"
    @open="openGift"
  />

  <!-- MUSIC PLAYER -->
  <MusicPlayer :show="opened" />

  <!-- FALLING PETALS -->
  <PetalField
    ref="petalRef"
    :active="false"
  />

  <!-- MAIN CONTENT -->
  <div
    id="main"
    :class="{show: opened}"
  >
    <router-view v-slot="{Component}">
      <transition
        name="page"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
#flash {
  position: fixed;
  inset: 0;
  z-index: 800;
  background: #ffd6e4;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease;
}
#flash.on {
  opacity: 1;
}
#flash.off {
  opacity: 0;
  transition: opacity 0.9s ease;
}

#main {
  opacity: 0;
  transition: opacity 1.1s ease;
  min-height: 100vh;
}
#main.show {
  opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
