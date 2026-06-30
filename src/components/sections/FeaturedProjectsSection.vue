<template>
  <section
    id="featured-projects"
    class="projects-section"
  >
    <div class="section-header">
      <p class="section-label">{{ t('landing.projects.label') }}</p>

      <h2>{{ t('landing.projects.title') }}</h2>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import ProjectCard from '@/components/projects/ProjectCard.vue'
  import { projects } from '@/data/projects'
  import { useI18n } from 'vue-i18n'

  const { t } = useI18n()
  
  const featuredProjects = projects.filter(
    project => project.featured,
  )
</script>

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
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1.5rem;
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