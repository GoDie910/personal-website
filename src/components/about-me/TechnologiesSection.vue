<template>
  <SectionBlock
    :label="t('about-me.technologies.label')"
    :title="t('about-me.technologies.title')"
  >
    <div class="tech-grid">
      <div
        v-for="category in displayedCategories"
        :key="category.title"
        class="tech-card"
      >
        <h3>{{ t(category.title) }}</h3>

        <div class="skill-icons">
          <template
            v-for="skill in category.skills"
            :key="skill.name"
          >
            <Icon
              v-if="skill.icon"
              :icon="skill.icon"
            />

            <img
              v-else-if="skill.image"
              :src="skill.image"
              :alt="skill.name"
              class="skill-image"
            />
          </template>
        </div>
      </div>
    </div>

    <p class="tech-footer">
      {{ t('about-me.technologies.footer') }}
      <RouterLink to="/#skills-section">
        Skills section on the home page
      </RouterLink>
    </p>
  </SectionBlock>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { RouterLink } from 'vue-router'
  import { useI18n } from 'vue-i18n'

  import SectionBlock from './SectionBlock.vue'
  import { skillCategories } from '@/data/skills'
  
  const { t } = useI18n()
  
  // Hide Game Dev if you don't want it here.
  const displayedCategories = skillCategories
</script>

<style lang="css" scoped>
  .tech-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:1.5rem;
  }
  
  .tech-card{
    padding:1.5rem;
    border-radius:18px;
    border:1px solid rgba(255,255,255,.12);
    display:flex;
    flex-direction:column;
    transition:transform .2s;
  }
  
  .tech-card:hover{
    transform:translateY(-4px);
  }
  
  .tech-card h3{
    margin-bottom:1rem;
  }
  
  .skill-icons{
    display:flex;
    flex-wrap:wrap;
    gap:1rem;
  }
  
  .skill-icons :deep(svg),
  .skill-image {
    width: 2.25rem;
    height: 2.25rem;
  }
  
  .tech-footer{
    margin-top:2rem;
    text-align:center;
    opacity:.7;
  }
</style>