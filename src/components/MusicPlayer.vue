<script setup>
import {ref, computed, onMounted, onBeforeUnmount} from "vue";

const props = defineProps({
  show: {type: Boolean, default: false},
});

const scrollY = ref(0);

// Progressive blur: ramps from 0 over the first ~700px of scrolling,
// maxing out at 8px of blur and 0.5 opacity.
const MAX_BLUR = 8;
const RAMP = 700;

const blur = computed(() =>
  Math.min(MAX_BLUR, (scrollY.value / RAMP) * MAX_BLUR),
);
const dim = computed(() => 1 - Math.min(0.5, (scrollY.value / RAMP) * 0.5));
const scale = computed(() => 1 - Math.min(0.05, (scrollY.value / RAMP) * 0.05));

const playerStyle = computed(() => {
  if (!props.show) return {};
  return {
    filter: `blur(${blur.value.toFixed(2)}px)`,
    opacity: dim.value.toFixed(2),
    transform: `scale(${scale.value.toFixed(3)})`,
  };
});

function onScroll() {
  scrollY.value = window.scrollY;
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, {passive: true});
  onScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div
    id="player"
    :class="{show}"
    :style="playerStyle"
    aria-label="Music player"
  >
    <iframe
      data-testid="embed-iframe"
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/track/0bHer4P44xn8jcyMH0EMs8?utm_source=generator=0"
      width="100%"
      height="152"
      frameborder="0"
      allowfullscreen
      allow="
        autoplay;
        clipboard-write;
        encrypted-media;
        fullscreen;
        picture-in-picture;
      "
      loading="lazy"
      title="A song for you"
    ></iframe>
  </div>
</template>

<style scoped>
#player {
  position: fixed;
  bottom: 18px;
  left: 18px;
  z-index: 700;
  width: 300px;
  max-width: calc(100vw - 36px);
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.65);
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s ease,
    filter 0.25s ease,
    transform 0.25s ease;
}
#player.show {
  pointer-events: auto;
}
/* Restore full clarity on hover so it stays usable while scrolled */
#player.show:hover {
  filter: none !important;
  opacity: 1 !important;
  transform: none !important;
}
#player iframe {
  display: block;
  border-radius: 12px;
}

/* Responsive sizing */
@media (max-width: 768px) {
  #player {
    width: 260px;
    bottom: 14px;
    left: 14px;
  }
}
@media (max-width: 480px) {
  #player {
    width: calc(100vw - 28px);
    bottom: 12px;
    left: 14px;
    right: 14px;
  }
}
</style>
