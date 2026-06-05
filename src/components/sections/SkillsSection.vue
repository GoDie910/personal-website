<script setup lang="ts">
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'Vue 3',
      'TypeScript',
      'JavaScript',
      'Vuetify',
      'HTML5',
      'CSS3',
      'SCSS',
      'Responsive Design',
      'UI Architecture',
    ],
  },

  {
    title: 'Backend',
    skills: [
      'PHP',
      'Node.js',
      'REST APIs',
      'Authentication',
      'Business Logic',
    ],
  },

  {
    title: 'Databases',
    skills: [
      'MySQL',
      'SQL',
      'Relational Modeling',
      'Data Management',
    ],
  },

  {
    title: 'DevOps',
    skills: [
      'Git',
      'GitHub',
      'GitHub Actions',
      'Netlify',
      'CI/CD',
      'Deployment',
    ],
  },

  {
    title: 'Game Development',
    skills: [
      'Godot',
      'Unity',
      'RPG Maker MZ',
      'Game Design',
      'Systems Design',
      'Balancing',
      'Prototyping',
    ],
  },

  {
    title: 'Tools & Misc',
    skills: [
      'VSCodium',
      'Figma',
      'Technical Documentation',
      'Agile Workflows',
      'Problem Solving',
    ],
  },
]
</script>

<template>
  <section class="skills-section">
    <div class="section-header">
      <p class="section-label">SKILLS</p>

      <h2>Technologies, tools, and domains I work with.</h2>
    </div>

    <div class="skills-grid">
      <article
        v-for="category in skillCategories"
        :key="category.title"
        class="skill-category"
      >
        <h3>{{ category.title }}</h3>

        <div class="skills-list">
          <span
            v-for="skill in category.skills"
            :key="skill"
            class="skill-badge"
          >
            {{ skill }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  width: 100%;

  padding:
    clamp(4rem, 8vh, 12rem)
    clamp(5vw, 8vw, 12vw);
}

.section-header {
  margin-bottom: clamp(3rem, 5vw, 6rem);
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

.skills-grid {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  gap: clamp(1.5rem, 2vw, 2rem);
}

.skill-category {
  padding: clamp(1.5rem, 2vw, 2rem);

  border-radius: 1.5rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  backdrop-filter: blur(12px);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.skill-category:hover {
  transform: translateY(-4px);

  border-color: rgba(255, 255, 255, 0.18);
}

h3 {
  margin-bottom: 1.5rem;

  font-size: clamp(1.1rem, 1.2vw, 1.35rem);

  font-weight: 700;
}

.skills-list {
  display: flex;

  flex-wrap: wrap;

  gap: 0.75rem;
}

.skill-badge {
  padding: 0.55rem 0.9rem;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.06);

  border: 1px solid rgba(255, 255, 255, 0.05);

  font-size: 0.9rem;

  color: #d0d0d0;
}

@media (max-width: 48rem) {
  .skills-section {
    padding:
      clamp(4rem, 8vh, 6rem)
      5vw;
  }

  h2 {
    max-width: 100%;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>