<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="hero-label">
        {{ t('landing.hero.label') }}
      </p>

      <h1>
        {{ t('landing.hero.title.line1') }}<br />
        {{ t('landing.hero.title.line2') }}<br />
        {{ t('landing.hero.title.line3') }}
      </h1>

      <p class="hero-description">
        {{ t('landing.hero.description') }}
      </p>

      <div class="hero-actions">
        <button class="primary-button" @click="scrollToProjects">
          {{ t('landing.hero.actions.viewProjects') }}
        </button>

        <a
          class="github-cta"
          href="https://github.com/GoDie910"
          target="_blank"
          rel="noopener"
        >
          {{ t('landing.hero.actions.github') }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  
  const scrollToProjects = () => {
    const section = document.getElementById('featured-projects')

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
</script>

<style scoped>
.hero-section {
  position: relative;

  min-height: 100vh;
  width: 100%;

  display: flex;

  padding:
    clamp(5rem, 10vh, 10rem)
    clamp(5vw, 8vw, 12vw);

  overflow: hidden;

  background:
    radial-gradient(
      circle at top right,
      rgba(0, 255, 170, 0.15),
      transparent 30%
    ),
    radial-gradient(
      circle at bottom left,
      rgba(0, 150, 255, 0.12),
      transparent 25%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: clamp(1rem, 1.5vw, 3vw);
}

.hero-label {
  letter-spacing: 0.35em;

  font-size: clamp(0.8rem, 2.2vw, 6.6vh);

  color: #7c7c7c;
}

h1 {
  max-width: 60vw;

  font-size: clamp(3.5rem, 5vw, 10vh);

  line-height: 0.9;

  font-weight: 800;

  text-wrap: balance;
}

.hero-description {
  max-width: 38ch;

  font-size: clamp(0.8rem, 1.5vw, 4vh);

  line-height: 1.8;

  color: #a0a0a0;
}

.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: clamp(1rem, 2vw, 4vh);
}

.primary-button {
  border: none;

  cursor: pointer;

  padding:
    clamp(0.9rem, 1vw, 2vh)
    clamp(1.4rem, 2vw, 4vh);

  border-radius: clamp(0.8rem, 1vw, 2vh);

  background: white;
  color: black;

  font-size: clamp(0.95rem, 1.5vw, 4vh);

  font-weight: 700;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-0.15rem);

  opacity: 0.9;
}

a {
  color: white;

  text-decoration: none;

  font-size: clamp(1rem, 1.5vw, 4vh);

  opacity: 0.7;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

a:hover {
  opacity: 1;

  transform: translateY(-0.1rem);
}

/* Tablet */
@media (max-width: 64rem) {
  h1 {
    max-width: 12ch;
  }
}

/* Mobile */
@media (max-width: 48rem) {
  .hero-section {
    padding:
      clamp(4rem, 8vh, 6rem)
      5vw;
  }

  .hero-content {
    width: 100%;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button {
    width: 100%;
  }

  a {
    text-align: center;
  }

  h1 {
    max-width: 100%;

    font-size: clamp(3rem, 14vw, 5rem);

    line-height: 0.95;
  }

  .hero-description {
    max-width: 100%;
  }
}
</style>
