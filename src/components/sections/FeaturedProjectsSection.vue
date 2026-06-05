<script setup lang="ts">
const projects = [
  {
    title: 'Cambio Express Dashboard',
    description:
      'Responsive financial dashboard for managing multi-currency bank accounts and operations.',
    stack: ['Vue 3', 'Vuetify', 'TypeScript'],
  },
  {
    title: 'Werewolf RPG Project',
    description:
      'Narrative RPG inspired by Vampyr where social relationships and hunting mechanics coexist.',
    stack: ['RPG Maker', 'Game Design', 'Narrative Systems'],
  },
  {
    title: 'Card Game Prototype',
    description:
      'Experimental roguelike card game inspired by Balatro and system-heavy strategy design.',
    stack: ['Game Systems', 'Balancing', 'Prototype Design'],
  },
]
</script>

<template>
  <section
    id="featured-projects"
    class="projects-section"
  >
    <div class="section-header">
      <p class="section-label">PROJECTS</p>

      <h2>Selected work and experiments.</h2>
    </div>

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.title"
        class="project-card"
      >
        <div class="project-top">
          <p class="project-index">PROJECT</p>

          <h3>{{ project.title }}</h3>
        </div>

        <p class="project-description">
          {{ project.description }}
        </p>

        <div class="stack-list">
          <span
            v-for="item in project.stack"
            :key="item"
            class="stack-badge"
          >
            {{ item }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding:
    clamp(5rem, 10vh, 10rem)
    clamp(5vw, 8vw, 12vw);
}

.section-header {
  margin-bottom: clamp(3rem, 5vw, 6rem);
}

.section-label {
  margin-bottom: 1rem;

  font-size: clamp(0.75rem, 1vw, 1rem);

  letter-spacing: 0.25em;

  color: #7c7c7c;
}

h2 {
  max-width: 16ch;

  font-size: clamp(2.5rem, 5vw, 5rem);

  line-height: 1.1;

  text-wrap: balance;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: 2rem;
}

.project-card {
  padding: 2rem;

  min-height: 300px;

  border-radius: 1.5rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition: 0.25s ease;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card:hover {
  transform: translateY(-6px);

  border-color: rgba(255, 255, 255, 0.18);
}

.project-index {
  margin-bottom: 1rem;

  color: #7c7c7c;
  letter-spacing: 0.15rem;
  font-size: 0.8rem;
}

h3 {
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

.project-description {
  color: #a0a0a0;
  line-height: 1.7;

  margin-bottom: 2rem;
}

.stack-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.stack-badge {
  padding: 0.5rem 0.9rem;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.06);

  font-size: 0.9rem;
}

@media (max-width: 48rem) {
  .projects-section {
    padding:
      clamp(4rem, 8vh, 6rem)
      5vw;
  }

  h2 {
    max-width: 100%;
  }
}
</style>