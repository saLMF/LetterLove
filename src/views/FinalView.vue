<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<template>
  <section class="sec final-sec">
    <span class="final-flowers">🌸 🌺 🌹 🌸 🌷</span>
    <span class="sec-sub">always &amp; forever</span>
    <h2>You Are Loved<br /><em>Beyond Words</em></h2>
    <p class="final-p">
      No matter where life takes us, know that somewhere in the universe, there
      is a garden blooming with every feeling I have ever held for you. You
      deserve the world. You deserve all the flowers. You deserve everything.
    </p>
    <span class="final-heart">💗</span>
    <div class="final-sign">Made with love, just for you 🌸</div>
    <button
      class="restart"
      @click="router.push({name: 'hero'})"
    >
      ↺ read it again
    </button>
  </section>
</template>

<style scoped>
.final-sec {
  text-align: center;
  background: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    #200b15 0%,
    #0a0106 100%
  );
  padding-bottom: 130px;
}
.final-flowers {
  font-size: 26px;
  letter-spacing: 10px;
  margin-bottom: 16px;
  display: block;
}
.final-sec h2 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-size: clamp(32px, 10vw, 68px);
  line-height: 1.2;
  color: #fff6fa;
}
.final-sec h2 em {
  font-style: italic;
  color: var(--lpink);
}
.final-p {
  max-width: clamp(280px, 90vw, 480px);
  margin: 26px auto;
  font-size: clamp(12px, 2.5vw, 13.5px);
  line-height: 1.85;
  color: var(--muted);
}
.final-heart {
  font-size: clamp(40px, 10vw, 52px);
  display: block;
  margin: 26px auto;
  animation: heartbeat 1.6s ease-in-out infinite;
}
@keyframes heartbeat {
  0%,
  100% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.18);
  }
  30% {
    transform: scale(1);
  }
  45% {
    transform: scale(1.12);
  }
}
.final-sign {
  font-family: "Great Vibes", cursive;
  font-size: 24px;
  color: var(--pink);
}
.restart {
  margin-top: 34px;
  font-family: "Nunito", sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  color: var(--lpink);
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 9px 20px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.restart:hover {
  background: rgba(255, 255, 255, 0.09);
}
</style>
