<template>
  <section class="sec letter-sec">
    <div class="letter-card">
      <div class="card-flowers">🌸 🌸 🌸</div>
      <span class="from-heart">from my heart</span>
      <h2>You are my <em>wildest dream</em> come true.</h2>
      <p>
        In a world full of ordinary moments, you are the extraordinary one. The
        way you laugh, the way you care, the way you simply exist — it fills
        every corner of my world with something I never knew I needed.
      </p>
      <p>
        No matter where life takes us, I promise to always cherish and adore
        you, to support you in every dream, and to love you with all that I am.
        You are my forever, and I can't wait to see what our future holds
        together.
      </p>
      <p>
        Like a secret garden blooming in the quietest part of my soul, you have
        grown into something so beautiful and rare. I am endlessly grateful for
        every moment we share, every smile you give, and every dream we build
        together.
      </p>
      <p>
        These flowers are not enough. No words ever could be. But they carry
        every unspoken feeling I hold for you, pressed between their petals like
        tiny love letters waiting to be found.
      </p>
      <p>
        I hope this little letter, wrapped in the petals of these flowers, can
        carry even a fraction of the love and admiration I have for you. You are
        my muse, my confidant, and the love of my life. I am so lucky to call
        you mine.
      </p>
      <span class="signature">~ Always yours 🌹</span>
    </div>
  </section>
</template>

<style scoped>
.letter-sec {
  display: flex;
  justify-content: center;
  background: radial-gradient(
    ellipse 70% 60% at 50% 50%,
    #1e0913 0%,
    #0a0106 100%
  );
}
.letter-card {
  max-width: clamp(300px, 95vw, 580px);
  width: 100%;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 22px;
  padding: clamp(32px, 8vw, 52px) clamp(24px, 6vw, 42px);
  text-align: center;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  animation: fadeUp 0.8s ease both;
}
.card-flowers {
  font-size: 26px;
  letter-spacing: 8px;
  margin-bottom: 10px;
}
.from-heart {
  display: block;
  font-family: "Great Vibes", cursive;
  font-size: 20px;
  color: var(--pink);
  margin-bottom: 24px;
}
.letter-card h2 {
  font-family: "Cormorant Garamond", serif;
  font-weight: 300;
  font-size: clamp(28px, 7vw, 52px);
  line-height: 1.2;
  color: #fff6fa;
  margin-bottom: 24px;
}
.letter-card h2 em {
  font-style: italic;
  color: var(--lpink);
}
.letter-card p {
  font-size: clamp(12px, 2.5vw, 13.5px);
  line-height: 1.85;
  color: var(--muted);
  margin-bottom: 14px;
}
.signature {
  display: block;
  font-family: "Great Vibes", cursive;
  font-size: 22px;
  color: var(--pink);
  margin-top: 22px;
}
</style>
