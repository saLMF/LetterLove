<script setup>
const flowers = [
  {emoji: "🌹", tip: "Red Rose — My love for you"},
  {emoji: "🌸", tip: "Cherry Blossom — Your beauty"},
  {emoji: "🍀", tip: "Lotus — Your pure heart"},
  {emoji: "🌺", tip: "Hibiscus — Our passion"},
  {emoji: "🌻", tip: "Sunflower — You are my sunshine"},
  {emoji: "🌷", tip: "Tulip — Our perfect love"},
  {emoji: "💐", tip: "Bouquet — Everything, for you"},
];
</script>

<template>
  <section class="sec garden-sec">
    <span class="sec-sub">our secret garden</span>
    <h2 class="sec-title">A Garden Grown<br /><em>Just For You</em></h2>
    <div class="flower-row">
      <div
        v-for="f in flowers"
        :key="f.tip"
        class="f-item"
      >
        <span class="f-tip">{{ f.tip }}</span>
        <span class="f-emoji">{{ f.emoji }}</span>
        <div class="f-stem"></div>
      </div>
    </div>
    <div class="hover-hint">
      ✨ hover each flower to discover its meaning ✨
    </div>
  </section>
</template>

<style scoped>
.garden-sec {
  text-align: center;
  background: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    #200b15 0%,
    #0a0106 100%
  );
}
.flower-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
  margin: 44px 0 16px;
}
.f-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.f-emoji {
  font-size: clamp(28px, 6vw, 38px);
  display: block;
  transition: transform 0.3s ease;
}
.f-stem {
  width: 2px;
  height: 56px;
  background: linear-gradient(to bottom, #4e9e50, #2a5a2a);
  margin-top: 3px;
}
.f-tip {
  position: absolute;
  bottom: calc(100% + 6px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(20, 4, 13, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 10px;
  padding: 7px 12px;
  font-size: 11px;
  color: var(--lpink);
  white-space: nowrap;
  letter-spacing: 0.5px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.f-item:hover .f-tip {
  opacity: 1;
}
.f-item:hover .f-emoji {
  transform: scale(1.3) rotate(-5deg);
}
.hover-hint {
  font-size: 10.5px;
  letter-spacing: 2.5px;
  color: rgba(255, 175, 200, 0.35);
  margin-top: 4px;
}
</style>
