<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const props = defineProps({
  active: { type: Boolean, default: false },
})

const petals = ref([])
const colors = ["#e8607a", "#f09ab8", "#c94070", "#ff7090", "#f8b0c8", "#d45a78"]
const sizes = [8, 10, 11, 8, 12, 9, 10]
let timer = null
let id = 0

function spawn() {
  const w = sizes[Math.floor(Math.random() * sizes.length)]
  const c = colors[Math.floor(Math.random() * colors.length)]
  const key = id++
  petals.value.push({
    key,
    left: Math.random() * 100 + "vw",
    width: w + "px",
    height: w * 0.65 + "px",
    bg: c,
    pd: (7 + Math.random() * 9).toFixed(1) + "s",
    pdelay: (Math.random() * 2).toFixed(2) + "s",
    po: (0.4 + Math.random() * 0.35).toFixed(2),
    pr: (300 + Math.random() * 200).toFixed(0) + "deg",
  })
  setTimeout(() => {
    petals.value = petals.value.filter((p) => p.key !== key)
  }, 22000)
}

function start() {
  if (timer) return
  for (let i = 0; i < 20; i++) setTimeout(spawn, i * 60)
  timer = setInterval(spawn, 320)
}

function stop() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  if (props.active) start()
})

onBeforeUnmount(stop)

defineExpose({ start, stop })
</script>

<template>
  <div id="petalBox" aria-hidden="true">
    <div
      v-for="p in petals"
      :key="p.key"
      class="petal"
      :style="{
        left: p.left,
        width: p.width,
        height: p.height,
        background: p.bg,
        '--pd': p.pd,
        '--pdelay': p.pdelay,
        '--po': p.po,
        '--pr': p.pr,
      }"
    />
  </div>
</template>

<style scoped>
.petal {
  position: fixed;
  pointer-events: none;
  z-index: 5;
  border-radius: 50% 20% 50% 20%;
  opacity: 0;
  animation: petalFall var(--pd, 10s) var(--pdelay, 0s) linear infinite;
}
@keyframes petalFall {
  0% {
    transform: translateY(-30px) rotate(0deg) scaleX(1);
    opacity: 0;
  }
  8% {
    opacity: var(--po, 0.65);
  }
  88% {
    opacity: var(--po, 0.55);
  }
  100% {
    transform: translateY(110vh) rotate(var(--pr, 400deg)) scaleX(0.8);
    opacity: 0;
  }
}
</style>
