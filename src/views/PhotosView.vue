<script setup>
import foto1 from "../assets/img/foto1.jpeg";
import foto2 from "../assets/img/foto2.jpeg";
import foto3 from "../assets/img/foto3.jpeg";
import foto4 from "../assets/img/foto4.jpeg";

const photos = [
  {src: foto1, label: "so", alt: "A romantic portrait among cherry blossoms"},
  {
    src: foto2,
    label: "beautiful",
    alt: "A couple walking through a rose garden at dusk",
  },
  {
    src: foto3,
    label: "my",
    alt: "Hands holding a small bouquet of pink flowers",
  },
  {src: foto4, label: "everything", alt: "Flower petals by candlelight"},
];
</script>

<template>
  <section class="sec photos-sec">
    <span class="sec-sub">captured in time</span>
    <h2 class="sec-title">Our Beautiful<br /><em>Pictures</em></h2>
    <div class="photo-grid">
      <div
        v-for="p in photos"
        :key="p.label"
        class="photo-box"
      >
        <img
          :src="p.src"
          :alt="p.alt"
        />
        <div class="plabel">{{ p.label }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.photos-sec {
  text-align: center;
  background: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    #1c0a12 0%,
    #0a0106 100%
  );
}
.photo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  max-width: 950px;
  margin: 40px auto 0;
}
.photo-box {
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  background: #1a0a14;
  border: 1px solid var(--border);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.photo-box img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.photo-box .plabel {
  position: relative;
  z-index: 1;
  font-family: "Great Vibes", cursive;
  font-size: clamp(18px, 4vw, 22px);
  color: #fff;
  padding: 14px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  width: 100%;
  text-align: center;
}
</style>
