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
    <div class="hero-background"></div>

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

  display: flex;
  align-items: center;

  padding: 0 8vw;

  overflow: hidden;
}

.hero-background {
  position: absolute;
  inset: 0;

  background:
    radial-gradient(circle at top right, rgba(0, 255, 170, 0.15), transparent 30%),
    radial-gradient(circle at bottom left, rgba(0, 150, 255, 0.12), transparent 25%);
}

.hero-content {
  position: relative;
  z-index: 2;

  max-width: 700px;
}

.hero-label {
  margin-bottom: 1rem;

  letter-spacing: 0.25rem;
  font-size: 0.85rem;
  color: #7c7c7c;
}

h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 0.95;
  font-weight: 800;

  margin-bottom: 2rem;
}

.hero-description {
  max-width: 550px;

  font-size: 1.15rem;
  line-height: 1.7;

  color: #a0a0a0;

  margin-bottom: 2.5rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.primary-button {
  border: none;
  cursor: pointer;

  padding: 1rem 1.6rem;

  border-radius: 12px;

  background: white;
  color: black;

  font-weight: 700;

  transition: 0.2s ease;
}

.primary-button:hover {
  transform: translateY(-2px);
}

a {
  color: white;
  text-decoration: none;

  opacity: 0.7;
}

a:hover {
  opacity: 1;
}
</style>