<template>
  <main class="projects-view">
    <section class="hero">
      <p class="section-label">{{ t('projects.label') }}</p>

      <h1>{{ t('projects.title') }}</h1>

      <p class="hero-description">
        {{ t('projects.description') }}
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
          {{ t(filter) }}
        </button>
      </div>
    </section>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import ProjectCard from '@/components/projects/ProjectCard.vue'
  import { projects } from '@/data/projects'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  
  const projectCategories = new Set(
    projects.flatMap(project => project.categories),
  )
  
  const filterAll = 'project.categories.all'
  const filters = [filterAll, ...projectCategories]
  
  const selectedFilter = ref(filterAll)
  
  const filteredProjects = computed(() => {
    if (selectedFilter.value === filterAll) {
      return projects
    }
  
    return projects.filter(project =>
      project.categories.includes(selectedFilter.value),
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