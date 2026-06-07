<script setup>
import { ref, onMounted } from "vue"

const sparkles = ref([])
const stars = ref([])
const starChars = ["✦", "✧", "⋆", "·", "✦", "⋆"]

onMounted(() => {
  const dots = []
  for (let i = 0; i < 38; i++) {
    const s = (2 + Math.random() * 5).toFixed(1) + "px"
    dots.push({
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      size: s,
      d: (1.2 + Math.random() * 2.5).toFixed(2) + "s",
      dl: (Math.random() * 3).toFixed(2) + "s",
    })
  }
  sparkles.value = dots

  const st = []
  for (let i = 0; i < 22; i++) {
    st.push({
      char: starChars[Math.floor(Math.random() * starChars.length)],
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      fs: (8 + Math.random() * 12).toFixed(0) + "px",
      d: (1.8 + Math.random() * 2.5).toFixed(2) + "s",
      dl: (Math.random() * 3).toFixed(2) + "s",
    })
  }
  stars.value = st
})

defineProps({
  out: { type: Boolean, default: false },
})

const emit = defineEmits(["open"])
</script>

<template>
  <div
    id="intro"
    :class="{ out }"
    role="button"
    tabindex="0"
    aria-label="Tap to open your gift"
    @click="emit('open')"
    @keydown.enter="emit('open')"
    @keydown.space.prevent="emit('open')"
  >
    <span
      v-for="(sp, i) in sparkles"
      :key="'sp' + i"
      class="sp"
      :style="{
        left: sp.left,
        top: sp.top,
        width: sp.size,
        height: sp.size,
        '--d': sp.d,
        '--dl': sp.dl,
      }"
    />
    <span
      v-for="(s, i) in stars"
      :key="'st' + i"
      class="sp star"
      :style="{ left: s.left, top: s.top, '--fs': s.fs, '--d': s.d, '--dl': s.dl }"
      >{{ s.char }}</span
    >

    <div class="gift-wrap">
      <span class="gift-emoji">🎁</span>
      <div class="tap-hint">✨ tap to open ✨</div>
    </div>
  </div>
</template>

<style scoped>
#intro {
  position: fixed;
  inset: 0;
  z-index: 900;
  background: radial-gradient(ellipse 70% 60% at 50% 45%, #2c0c1c 0%, #110208 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.6s ease;
}
#intro.out {
  opacity: 0;
  pointer-events: none;
}

.sp {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 140, 175, 0.85);
  animation: twinkle var(--d, 2s) var(--dl, 0s) infinite ease-in-out;
}
.sp.star {
  background: none;
  color: rgba(255, 160, 190, 0.9);
  font-size: var(--fs, 12px);
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes twinkle {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
}

.gift-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  position: relative;
  z-index: 2;
}
.gift-emoji {
  font-size: clamp(80px, 18vw, 110px);
  animation:
    float 3.2s ease-in-out infinite,
    glow 2.5s ease-in-out infinite;
  transition: transform 0.15s;
  user-select: none;
}
.gift-emoji:hover {
  transform: scale(1.08);
}
@keyframes glow {
  0%,
  100% {
    filter: drop-shadow(0 0 14px rgba(220, 80, 130, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 32px rgba(220, 80, 130, 0.9));
  }
}
.tap-hint {
  font-family: "Nunito", sans-serif;
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 3.5px;
  color: rgba(255, 170, 200, 0.55);
  animation: pulse 2.2s ease-in-out infinite;
}
@keyframes pulse {
  0%,
  100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}
</style>
