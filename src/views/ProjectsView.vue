<template>
  <main class="projects-view">
    <section class="hero">
      <p class="section-label">PROJECTS</p>

      <h1>Things I've built.</h1>

      <p class="hero-description">
        A collection of software products, web applications, and game
        development projects focused on creating useful and engaging
        experiences.
      </p>
    </section>

    <section class="filters-section">
      <div class="filters">
        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-button"
          :class="{ active: selectedFilter === filter }"
          @click="selectedFilter = filter"
        >
          {{ filter }}
        </button>
      </div>
    </section>

    <section class="projects-section">
      <div class="projects-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
        >
          <img
            :src="project.image"
            :alt="project.title"
            class="project-image"
          />

          <h3>{{ project.title }}</h3>

          <p>{{ project.description }}</p>

          <div class="project-tags">
            <span
              v-for="tech in project.technologies"
              :key="tech"
            >
              {{ tech }}
            </span>
          </div>

          <div class="project-links">
            <a
              v-if="project.github"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              v-if="project.demo"
              :href="project.demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const selectedFilter = ref('All')

const filters = [
  'All',
  'Software',
  'Games',
  'Vue',
  'TypeScript',
  'Godot',
  'PHP',
]

const projects = [
  {
    title: 'Trainimize',
    category: 'Software',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200&q=80',
    description:
      'A fitness tracking platform focused on logging workouts, exercises, sets, and repetitions while providing analytics and progress tracking.',
    technologies: ['Vue', 'TypeScript', 'Fitness'],
    github: '',
    demo: '',
  },

  {
    title: 'Tinnitus',
    category: 'Software',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    description:
      'A medical platform supporting tinnitus treatment through patient management, scheduling, communication, and therapy tools.',
    technologies: ['Vue', 'Healthcare', 'Scheduling'],
    github: '',
    demo: '',
  },

  {
    title: 'Jormun',
    category: 'Games',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&q=80',
    description:
      'A narrative-focused game jam project exploring storytelling, atmosphere, and player immersion.',
    technologies: ['Godot', 'Game Jam'],
    github: '',
    demo: 'https://godie910.itch.io/jormun',
  },

  {
    title: 'Goblin Game',
    category: 'Games',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&q=80',
    description:
      'An RPG Maker project centered around progression systems, world-building, and role-playing mechanics.',
    technologies: ['RPG Maker'],
    github: 'https://github.com/GoDie910/test-rmmz-ggg',
    demo: '',
  },

  {
    title: 'Experimental Projects',
    category: 'Games',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80',
    description:
      'A collection of prototypes and technical experiments focused on gameplay systems, progression, AI behavior, and player interaction.',
    technologies: ['Godot', 'Unity', 'RPG Maker'],
    github: '',
    demo: '',
  },
]

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'All') {
    return projects
  }

  return projects.filter(
    project =>
      project.category === selectedFilter.value ||
      project.technologies.includes(selectedFilter.value),
  )
})
</script>

<style scoped>
.projects-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

.hero {
  margin-bottom: 4rem;
}

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-description {
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.filters-section {
  margin-bottom: 3rem;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-button {
  padding: 0.7rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.filter-button:hover {
  transform: translateY(-2px);
}

.filter-button.active {
  border-color: rgba(255, 255, 255, 0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.3);
}

.project-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.25rem;
}

.project-card h3 {
  margin-bottom: 0.75rem;
}

.project-card p {
  line-height: 1.8;
  opacity: 0.85;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.25rem;
}

.project-tags span {
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  font-size: 0.85rem;
  background: rgba(255, 255, 255, 0.08);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
}

.project-links a {
  text-decoration: none;
  font-weight: 600;
}

@media (max-width: 768px) {
  .projects-view {
    width: 92%;
    padding: 4rem 0;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>