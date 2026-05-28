<script setup lang="ts">
const scrollToProjects = () => {
  const section = document.getElementById('featured-projects')

  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-content">
      <p class="hero-label">SOFTWARE ENGINEER</p>

      <h1>
        Building systems,<br />
        interfaces,<br />
        and interactive experiences.
      </h1>

      <p class="hero-description">
        Frontend developer focused on Vue 3, UI architecture, dashboards, and game-inspired
        experiences.
      </p>

      <div class="hero-actions">
        <button class="primary-button" @click="scrollToProjects">
          View Projects
        </button>

        <a href="https://github.com/" target="_blank" rel="noopener">
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;

  min-height: 100vh;
  width: 100%;

  display: flex;

  padding: 0;
  padding-left: 10vw;
  padding-top: 5vh;

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

  width: 85vw;

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

    padding: 0 5vw;
    padding-top: 5vh;
  }

  .hero-content {
    width: 100%;
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

/* Small Phones */
@media (max-width: 30rem) {
  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .primary-button {
    width: 100%;
  }
}
</style>
