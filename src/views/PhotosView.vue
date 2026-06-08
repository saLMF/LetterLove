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

    <!-- Photobooth strip -->
    <div class="photo-strip">
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

      <p class="strip-caption">Where soft moments flow.</p>
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

/* The vertical "receipt" strip that holds the photos */
.photo-strip {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
  max-width: 340px;
  margin: clamp(30px, 8vw, 40px) auto 0;
  padding: 26px 22px 30px;

  /* ── PERUBAHAN: background samar menyatu dengan tema website ── */
  background: linear-gradient(
    160deg,
    rgba(42, 10, 22, 0.72) 0%,
    rgba(18, 4, 10, 0.82) 100%
  );
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  /* border tipis biar stripnya tetap "ada" tapi tidak terlalu mencolok */
  border: 1px solid rgba(200, 80, 100, 0.12);
  border-radius: 14px;

  box-shadow:
    0 2px 6px rgba(0, 0, 0, 0.4),
    0 18px 50px rgba(0, 0, 0, 0.55),
    inset 0 0 60px rgba(120, 20, 40, 0.08);
}

/* Each photo is a rounded, cool-toned card stacked vertically */
.photo-box {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  background: #1a0810;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(200, 80, 110, 0.08);
}
.photo-box img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.85) brightness(1.02) contrast(0.97);
}
.photo-box .plabel {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  font-family: "Great Vibes", cursive;
  font-size: clamp(16px, 4.5vw, 24px);
  color: #fff;
  padding: 10px 14px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.7);
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.45));
  width: 100%;
  text-align: center;
}

/* ── PERUBAHAN: warna teks caption disesuaikan ke tema gelap ── */
.strip-caption {
  margin-top: 6px;
  font-family: "Courier New", monospace;
  letter-spacing: 1px;
  font-size: 13px;
  color: rgba(210, 150, 170, 0.5);
}
</style>
