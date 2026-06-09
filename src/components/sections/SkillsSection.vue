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
        :key="skill.name"
        class="technology-item"
      >
        <Icon
          :icon="skill.icon"
          class="technology-icon"
        />
        
        <span class="technology-name">
          {{ skill.name }}
        </span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '@iconify/vue'

type Skill = {
  name: string
  icon: string
}

type SkillCategory = {
  title: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'Vue 3', icon: 'logos:vue' },
      { name: 'Angular', icon: 'logos:angular-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS', icon: 'logos:css-3' },
      { name: 'Responsive Design', icon: 'mdi:monitor-cellphone' },
      { name: 'UI Architecture', icon: 'mdi:view-dashboard-outline' },
      { name: 'GSAP', icon: 'simple-icons:gsap' },
      { name: 'PixiJS', icon: 'mdi:vector-polygon' },
      { name: 'Vuetify', icon: 'logos:vuetifyjs' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Pinia', icon: 'logos:pinia' },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'FastAPI', icon: 'logos:fastapi-icon' },
      { name: 'ASP.NET Core', icon: 'logos:dotnet' },
      { name: 'PHP', icon: 'logos:php' },
      { name: 'REST APIs', icon: 'mdi:api' },
      { name: 'WebSockets', icon: 'mdi:connection' },
      { name: 'Authentication', icon: 'mdi:shield-lock-outline' },
      { name: 'Business Logic', icon: 'mdi:cog-outline' },
    ],
  },

  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'logos:postgresql' },
      { name: 'MySQL', icon: 'logos:mysql' },
      { name: 'SQL Server', icon: 'mdi:database-cog' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
    ],
  },

  {
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'logos:github-icon' },
      { name: 'GitHub Actions', icon: 'logob-icon' },
      { name: 'Netlify', icon: 'logos:netls:github-actions' },
      { name: 'GitLab', icon: 'logos:gitlaify' },
      { name: 'Vitest', icon: 'logos:vitest' },
      { name: 'CI/CD', icon: 'mdi:source-branch-sync' },
      { name: 'Deployment', icon: 'mdi:rocket-launch-outline' },
    ],
  },

  {
    title: 'Game Dev',
    skills: [
      { name: 'Godot', icon: 'logos:godot-icon' },
      { name: 'Unity', icon: 'logos:unity' },
      { name: 'RPG Maker MZ', icon: 'mdi:sword-cross' },  
      { name: 'Systems Design', icon: 'mdi:sitemap-outline' },
    ],
  },

  {
    title: 'Tools & Misc',
    skills: [
      { name: 'VS Code', icon: 'logos:visual-studio-code' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Swagger', icon: 'logos:swagger' },
      { name: 'Technical Documentation', icon: 'mdi:file-document-outline' },
      { name: 'Debugging', icon: 'mdi:bug-outline' },
      { name: 'Code Review', icon: 'mdi:source-pull' },
      { name: 'Agile Workflows', icon: 'mdi:sync' },
    ],
  },
]

const selectedCategory = ref(0)

const currentCategory = computed(
  () => skillCategories[selectedCategory.value]!,
)
</script>

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
  display: grid;

  grid-template-columns: repeat(
    auto-fit,
    minmax(140px, 1fr)
  );  

  gap: 0.75rem;

  margin-bottom: 3rem;
}

.category-pill {
  width: 100%;

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
    minmax(120px, 1fr)
  );

  gap: 2rem;
}

.technology-item {
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 0.75rem;

  text-align: center;

  transition: transform 0.2s ease;
}

.technology-item:hover {
  transform: translateY(-4px);
}

.technology-icon {
  font-size: clamp(3rem, 5vw, 4.5rem);

  transition: transform 0.2s ease;
}

.technology-item:hover .technology-icon {
  transform: scale(1.08);
}

.technology-name {
  font-size: 0.9rem;

  color: #d8d8d8;
}

@media (max-width: 48rem) {
  .technology-grid {
    grid-template-columns: repeat(
      3,
      minmax(0, 1fr)
    );

    gap: 1.5rem;
  }

  .technology-icon {
    font-size: 3rem;
  }

  .technology-name {
    font-size: 0.85rem;
  }
}
</style>