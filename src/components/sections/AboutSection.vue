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
  padding: 8rem 8vw;
}

.section-header {
  margin-bottom: 4rem;
}

.section-label {
  margin-bottom: 1rem;

  font-size: 0.85rem;
  letter-spacing: 0.2rem;

  color: #7c7c7c;
}

h2 {
  max-width: 700px;

  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-text p {
  color: #a0a0a0;
  line-height: 1.8;
  font-size: 1.05rem;
}

.skills-panel {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.skill-card {
  padding: 1.2rem;

  border: 1px solid rgba(255, 255, 255, 0.08);

  border-radius: 16px;

  background: rgba(255, 255, 255, 0.03);

  backdrop-filter: blur(12px);

  transition: 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-4px);

  border-color: rgba(255, 255, 255, 0.18);
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>