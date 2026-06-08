<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

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

const selectedCategory = ref(0)

const currentCategory = computed(
  () => skillCategories[selectedCategory.value]!,
)
const iconDefault: string = 'mdi:code-tags'
const iconMap: Record<string, string> = {
  'Vue 3': 'logos:vue',
  TypeScript: 'logos:typescript-icon',
  JavaScript: 'logos:javascript',
  Vuetify: 'logos:vuetifyjs',
  HTML5: 'logos:html-5',
  CSS3: 'logos:css-3',
  SCSS: 'logos:sass',

  PHP: 'logos:php',
  'Node.js': 'logos:nodejs-icon',
  MySQL: 'logos:mysql',

  Git: 'logos:git-icon',
  GitHub: 'logos:github-icon',
  'GitHub Actions': 'logos:github-actions',
  Netlify: 'logos:netlify',

  Godot: 'logos:godot-icon',
  Unity: 'logos:unity',

  Figma: 'logos:figma',

  'Responsive Design': 'mdi:cellphone-responsive',
  'UI Architecture': 'mdi:view-dashboard-outline',
  'REST APIs': 'mdi:api',
  Authentication: 'mdi:shield-lock-outline',
  'Business Logic': 'mdi:cog-outline',
  SQL: 'mdi:database',
  'Relational Modeling': 'mdi:relation-many-to-many',
  'Data Management': 'mdi:database-cog',
  'CI/CD': 'mdi:source-branch-sync',
  Deployment: 'mdi:rocket-launch-outline',
  'Game Design': 'mdi:controller-classic-outline',
  'Systems Design': 'mdi:sitemap-outline',
  Balancing: 'mdi:scale-balance',
  Prototyping: 'mdi:test-tube',
  VSCodium: 'mdi:code-braces',
  'Technical Documentation': 'mdi:file-document-outline',
  'Agile Workflows': 'mdi:sync',
  'Problem Solving': 'mdi:lightbulb-outline',
}

const getIcon = (skill: string) =>
  iconMap[skill] ?? iconDefault
</script>

<template>
  <section class="skills-section">
    <div class="section-header">
      <p class="section-label">SKILLS</p>

      <h2>Technologies, tools, and domains I work with.</h2>
    </div>

    <div class="category-tabs">
      <button
        v-for="(category, index) in skillCategories"
        :key="category.title"
        class="category-pill"
        :class="{ active: selectedCategory === index }"
        @click="selectedCategory = index"
      >
        {{ category.title }}
      </button>
    </div>

    <div class="technology-grid">
      <article
        v-for="skill in currentCategory.skills"
        :key="skill"
        class="technology-card"
      >
        <Icon
          :icon="getIcon(skill)"
          class="technology-icon"
        />
    
        <span>{{ skill }}</span>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  width: 100%;

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

.category-tabs {
  display: flex;

  gap: 0.75rem;

  overflow-x: auto;

  margin-bottom: 3rem;

  padding-bottom: 0.5rem;

  scrollbar-width: none;
}

.category-tabs::-webkit-scrollbar {
  display: none;
}

.category-pill {
  flex-shrink: 0;

  padding: 0.75rem 1.25rem;

  border-radius: 999px;

  border: 1px solid rgba(255, 255, 255, 0.08);

  background: rgba(255, 255, 255, 0.03);

  color: #d0d0d0;

  cursor: pointer;

  transition: all 0.2s ease;
}

.category-pill:hover {
  border-color: rgba(255, 255, 255, 0.18);
}

.category-pill.active {
  background: rgba(255, 255, 255, 0.12);

  border-color: rgba(255, 255, 255, 0.25);

  color: white;
}

.technology-grid {
  display: grid;

  grid-template-columns: repeat(
    auto-fit,
    minmax(180px, 1fr)
  );

  gap: 1rem;
}

.technology-card {
  display: flex;

  align-items: center;

  gap: 1rem;

  padding: 1rem 1.25rem;

  border-radius: 1rem;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.technology-card:hover {
  transform: translateY(-4px);

  border-color: rgba(255, 255, 255, 0.18);

  background: rgba(255, 255, 255, 0.05);
}

.technology-icon {
  flex-shrink: 0;

  font-size: 2rem;
}

.technology-card span {
  font-size: 0.95rem;

  color: #d8d8d8;
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

  .technology-grid {
    grid-template-columns: 1fr;
  }
}
</style>