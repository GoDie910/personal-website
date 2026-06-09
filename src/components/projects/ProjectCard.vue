<template>
  <article class="project-card">
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
</template>

<script setup lang="ts">
interface Project {
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  github: string
  demo: string
}

defineProps<{
  project: Project
}>()
</script>

<style scoped>
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
</style>