<template>
  <SectionBlock
    :label="t('about-me.technologies.label')"
    :title="t('about-me.technologies.title')"
  >
    <div class="tech-grid">
      <div class="tech-card">
        <h3>{{ t('about-me.technologies.categories.frontend') }}</h3>
        <div class="skill-icons">
          <Icon icon="logos:vue" />
          <Icon icon="logos:angular-icon" />
          <Icon icon="logos:react" />
          <Icon icon="logos:typescript-icon" />
          <Icon icon="logos:vuetifyjs" />
          <Icon icon="logos:vitejs" />
        </div>
      </div>
      <div class="tech-card">
        <h3>{{ t('about-me.technologies.categories.backend') }}</h3>
        <div class="skill-icons">
          <Icon icon="logos:dotnet" />
          <Icon icon="logos:php" />
          <Icon icon="logos:nodejs-icon" />
          <Icon icon="logos:fastapi-icon" />
          <Icon icon="mdi:api" />
        </div>
      </div>
      <div class="tech-card">
        <h3>{{ t('about-me.technologies.categories.databases') }}</h3>
        <div class="skill-icons">
          <Icon icon="logos:postgresql" />
          <Icon icon="logos:mysql" />
          <Icon icon="logos:mongodb-icon" />
          <Icon icon="mdi:database-cog" />
        </div>
      </div>
      <div class="tech-card">
        <h3>{{ t('about-me.technologies.categories.devops') }}</h3>
        <div class="skill-icons">
          <Icon icon="logos:git-icon" />
          <Icon icon="logos:github-icon" />
          <Icon icon="logos:github-actions" />
          <Icon icon="logos:gitlab-icon" />
          <Icon icon="logos:netlify" />
        </div>
      </div>
      <div class="tech-card">
        <h3>{{ t('about-me.technologies.categories.tools') }}</h3>
        <div class="skill-icons">
          <Icon icon="logos:visual-studio-code" />
          <Icon icon="logos:figma" />
          <Icon icon="logos:postman-icon" />
          <Icon icon="logos:swagger" />
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
  
  const { t } = useI18n()
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
  
  .skill-icons :deep(svg){
    font-size:2.25rem;
  }
  
  .tech-footer{
    margin-top:2rem;
    text-align:center;
    opacity:.7;
  }
</style>