<script setup>
import HeroView from "./HeroView.vue";
import LetterView from "./LetterView.vue";
import QualitiesView from "./QualitiesView.vue";
import GardenView from "./GardenView.vue";
import PhotosView from "./PhotosView.vue";
import FinalView from "./FinalView.vue";
</script>

<template>
  <main class="page">
    <HeroView />
    <LetterView />
    <QualitiesView />
    <GardenView />
    <PhotosView />
    <FinalView />
  </main>
</template>

<style scoped>
.page {
  width: 100%;
}
</style>
