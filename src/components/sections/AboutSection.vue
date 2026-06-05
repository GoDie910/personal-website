<script setup lang="ts">
const skills = [
  'Vue 3',
  'TypeScript',
  'Vuetify',
  'UI Architecture',
  'Game Systems',
  'Responsive Design',
  'Node.js',
  'PHP',
]
</script>

<template>
  <section class="about-section">
    <div class="section-header">
      <p class="section-label">ABOUT</p>

      <h2>Engineering interfaces with personality.</h2>
    </div>

    <div class="about-grid">
      <div class="about-text">
        <p>
          I enjoy building applications that feel intentional — from admin dashboards and responsive
          interfaces to experimental game-inspired systems.
        </p>

        <p>
          My main focus is frontend engineering with Vue 3, but I also explore backend systems,
          interaction design, and game development.
        </p>
      </div>

      <div class="skills-panel">
        <div
          v-for="skill in skills"
          :key="skill"
          class="skill-card"
        >
          {{ skill }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  width: 100%;

  padding:
    clamp(4rem, 8vh, 12rem)
    clamp(5vw, 8vw, 12vw);
}

.section-header {
  margin-bottom: clamp(2rem, 5vw, 6rem);
}

.section-label {
  margin-bottom: clamp(0.5rem, 1vw, 1.5rem);

  font-size: clamp(0.75rem, 1vw, 1.1rem);

  letter-spacing: 0.25em;

  color: #7c7c7c;
}

h2 {
  max-width: 16ch;

  font-size: clamp(2.25rem, 5vw, 8vh);

  line-height: 1.1;

  text-wrap: balance;
}

.about-grid {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: clamp(2rem, 4vw, 8rem);
}

.about-text {
  display: flex;
  flex-direction: column;

  gap: clamp(1rem, 2vw, 3rem);
}

.about-text p {
  max-width: 60ch;

  color: #a0a0a0;

  line-height: 1.8;

  font-size: clamp(1rem, 1.1vw, 1.35rem);
}

.skills-panel {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: clamp(0.75rem, 1vw, 1.5rem);
}

.skill-card {
  padding: clamp(1rem, 1.2vw, 1.8rem);

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: clamp(0.75rem, 1vw, 1.5rem);

  background: rgba(255, 255, 255, 0.03);

  backdrop-filter: blur(12px);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-0.25rem);

  border-color: rgba(255, 255, 255, 0.18);
}

/* Tablet */
@media (max-width: 64rem) {
  .about-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    max-width: 12ch;
  }
}

/* Mobile */
@media (max-width: 48rem) {
  .about-section {
    padding:
      clamp(4rem, 8vh, 6rem)
      5vw;
  }

  h2 {
    max-width: 100%;
  }

  .skills-panel {
    grid-template-columns: 1fr;
  }
}
</style>