<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
</script>

<template>
  <section class="sec hero">
    <div class="hero-sub">🌸 a love letter in bloom</div>
    <h1>For You,</h1>
    <h1 class="italic">My Everything</h1>
    <p class="hero-desc">
      Every petal holds a whisper of how much you mean to me.
    </p>
    <span class="hero-flower">🌸</span>
    <button class="scroll-hint" @click="router.push({ name: 'letter' })">
      <span>SCROLL TO DISCOVER</span>
      <span class="scroll-arrow">↓</span>
    </button>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(ellipse 80% 70% at 50% 40%, #280b18 0%, #0e0208 100%);
  padding: clamp(40px, 8vw, 90px) clamp(16px, 5vw, 24px);
}
.hero-sub {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Great Vibes", cursive;
  font-size: clamp(18px, 4vw, 22px);
  color: var(--pink);
  margin-bottom: 14px;
  opacity: 0;
  animation: fadeUp 0.8s 0.3s ease forwards;
}
.hero h1 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-size: clamp(40px, 12vw, 88px);
  line-height: 1.1;
  color: #fff6fa;
  opacity: 0;
  animation: fadeUp 0.8s 0.5s ease forwards;
  word-spacing: 100vw;
}
.hero h1.italic {
  font-style: italic;
  color: var(--lpink);
  animation-delay: 0.65s;
}
.hero-desc {
  margin-top: 22px;
  font-size: clamp(12px, 2.5vw, 13px);
  letter-spacing: 1.2px;
  color: var(--muted);
  max-width: clamp(280px, 90vw, 360px);
  line-height: 1.7;
  opacity: 0;
  animation: fadeUp 0.8s 0.85s ease forwards;
}
.hero-flower {
  font-size: clamp(40px, 10vw, 52px);
  margin-top: 34px;
  opacity: 0;
  animation:
    fadeUp 0.8s 1.05s ease forwards,
    float 4s 2s ease-in-out infinite;
}
.scroll-hint {
  margin-top: clamp(24px, 5vw, 36px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-family: "Nunito", sans-serif;
  font-size: clamp(8px, 2vw, 9px);
  letter-spacing: 4px;
  color: rgba(255, 190, 215, 0.35);
  background: none;
  border: none;
  cursor: pointer;
  opacity: 0;
  animation: fadeUp 0.8s 1.25s ease forwards;
}
.scroll-arrow {
  animation: bounce 2s ease-in-out infinite;
  font-size: 14px;
  color: rgba(255, 190, 215, 0.4);
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(7px);
  }
}
</style>
