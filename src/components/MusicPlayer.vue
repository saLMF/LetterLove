<script setup>
defineProps({
  show: {type: Boolean, default: false},
});
</script>

<template>
  <div
    id="player"
    :class="{show}"
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
  transition: opacity 0.8s ease;
}
#player.show {
  opacity: 1;
  pointer-events: auto;
}
#player iframe {
  display: block;
  border-radius: 12px;
}
</style>
