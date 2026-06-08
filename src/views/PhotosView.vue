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
  max-width: 800px;
  margin: clamp(30px, 8vw, 40px) auto 0;
  padding: 24px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
  border: 3px solid rgba(255, 200, 221, 0.4);
  border-radius: 2px;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.4), 0 8px 20px rgba(0, 0, 0, 0.6);
}

.photo-box {
  border-radius: 0;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
  background: #0f0509;
  border: 2px solid rgba(255, 200, 221, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8);
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
  font-size: clamp(14px, 3.5vw, 22px);
  color: #fff;
  padding: clamp(10px, 3vw, 14px);
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));
  width: 100%;
  text-align: center;
}
</style>
