<script setup>
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

// Ordered list of section routes
const sections = [
  { name: "hero", label: "Home" },
  { name: "letter", label: "Letter" },
  { name: "qualities", label: "Adore" },
  { name: "garden", label: "Garden" },
  { name: "photos", label: "Photos" },
  { name: "final", label: "Forever" },
]

const currentIndex = computed(() =>
  sections.findIndex((s) => s.name === route.name)
)

const prev = computed(() =>
  currentIndex.value > 0 ? sections[currentIndex.value - 1] : null
)
const next = computed(() =>
  currentIndex.value < sections.length - 1
    ? sections[currentIndex.value + 1]
    : null
)

function go(name) {
  router.push({ name })
}
</script>

<template>
  <nav class="nav" aria-label="Section navigation">
    <div class="dots">
      <button
        v-for="s in sections"
        :key="s.name"
        class="dot"
        :class="{ active: s.name === route.name }"
        :aria-label="`Go to ${s.label}`"
        :aria-current="s.name === route.name ? 'page' : undefined"
        @click="go(s.name)"
      />
    </div>

    <div class="arrows">
      <button
        class="arrow"
        :disabled="!prev"
        :aria-label="prev ? `Back to ${prev.label}` : 'No previous section'"
        @click="prev && go(prev.name)"
      >
        ← {{ prev ? prev.label : "" }}
      </button>
      <button
        class="arrow next"
        :disabled="!next"
        :aria-label="next ? `Continue to ${next.label}` : 'No next section'"
        @click="next && go(next.name)"
      >
        {{ next ? next.label : "" }} →
      </button>
    </div>
  </nav>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 18px;
  background: linear-gradient(to bottom, rgba(14, 2, 8, 0.85), transparent);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.dots {
  display: flex;
  gap: 9px;
}
.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid rgba(255, 180, 205, 0.4);
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
}
.dot:hover {
  background: rgba(240, 168, 190, 0.4);
}
.dot.active {
  background: var(--pink);
  border-color: var(--pink);
  transform: scale(1.25);
}
.arrows {
  display: flex;
  gap: 8px;
}
.arrow {
  font-family: "Nunito", sans-serif;
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--lpink);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 7px 14px;
  cursor: pointer;
  transition:
    background 0.3s ease,
    opacity 0.3s ease;
}
.arrow:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.09);
}
.arrow:disabled {
  opacity: 0;
  pointer-events: none;
}
@media (max-width: 480px) {
  .arrow {
    padding: 7px 10px;
  }
}
</style>
