<script setup>
import { ref, onMounted } from "vue"

const qualities = [
  { icon: "🌹", title: "Your Smile", text: "It lights up every room and every corner of my heart simultaneously." },
  { icon: "✨", title: "Your Soul", text: "Rare, genuine, and more beautiful than any flower ever grown." },
  { icon: "🌸", title: "Your Kindness", text: "The way you love the world makes me want to be better every single day." },
  { icon: "🌙", title: "Your Laughter", text: "The universe's favourite melody. My most treasured song." },
  { icon: "🌺", title: "Your Strength", text: "You carry so much grace through everything. I admire you endlessly." },
  { icon: "💖", title: "Simply You", text: "Every version of you, every moment — you are more than enough." },
]

const revealed = ref(qualities.map(() => false))

onMounted(() => {
  qualities.forEach((_, i) => {
    setTimeout(() => {
      revealed.value[i] = true
    }, 120 + i * 110)
  })
})
</script>

<template>
  <section class="sec qualities-sec">
    <span class="sec-sub">a few of the reasons</span>
    <h2 class="sec-title">All The Little Things<br /><em>I Adore</em></h2>
    <div class="q-grid">
      <div
        v-for="(q, i) in qualities"
        :key="q.title"
        class="q-card"
        :class="{ reveal: revealed[i] }"
        :style="{ transitionDelay: i * 0.09 + 's' }"
      >
        <span class="q-icon">{{ q.icon }}</span>
        <h3>{{ q.title }}</h3>
        <p>{{ q.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.qualities-sec {
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 50%, #1c0a12 0%, #0a0106 100%);
}
.q-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 14px;
  max-width: 800px;
  margin: 40px auto 0;
}
.q-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 30px 20px;
  text-align: center;
  transition:
    opacity 0.6s ease,
    transform 0.6s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(28px);
}
.q-card.reveal {
  opacity: 1;
  transform: none;
}
.q-card:hover {
  transform: translateY(-5px) !important;
  background: rgba(255, 255, 255, 0.07);
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.3);
}
.q-icon {
  font-size: 30px;
  display: block;
  margin-bottom: 12px;
}
.q-card h3 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 400;
  font-size: 21px;
  color: #fff6fa;
  margin-bottom: 8px;
}
.q-card p {
  font-size: 12px;
  line-height: 1.75;
  color: var(--muted);
}
</style>
