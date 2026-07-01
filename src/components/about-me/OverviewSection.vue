<template>
    <SectionBlock
      :label="t('about-me.overview.label')"
      :title="t('about-me.overview.title')"
    >
      <div class="stats-grid">

        <div class="stat-card">
          <Icon icon="mdi:briefcase-outline" class="stat-icon" />
          <h3>{{ t('about-me.overview.items.experience.title') }}</h3>
          <p>{{ t('about-me.overview.items.experience.description') }}</p>
        </div>

        <div class="stat-card">
          <Icon icon="mdi:rocket-launch-outline" class="stat-icon" />
          <h3>{{ t('about-me.overview.items.projects.title') }}</h3>
          <p>{{ t('about-me.overview.items.projects.description') }}</p>
        </div>

        <div class="stat-card">
          <Icon icon="mdi:tools" class="stat-icon" />
          <h3>{{ t('about-me.overview.items.technology.title') }}</h3>
          <p>{{ t('about-me.overview.items.technology.description') }}</p>
        </div>

        <div class="stat-card">
          <Icon icon="mdi:office-building-cog-outline" class="stat-icon" />
          <h3>{{ t('about-me.overview.items.architecture.title') }}</h3>
          <p>{{ t('about-me.overview.items.architecture.description') }}</p>
        </div>

      </div>
    </SectionBlock>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { useI18n } from 'vue-i18n'
  import SectionBlock from './SectionBlock.vue'
  
  const { t } = useI18n()
</script>

<style lang="css" scoped>
  .stats-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:1.5rem;
  }
  
  .stat-card{
    padding:1.5rem;
    border-radius:18px;
    border:1px solid rgba(255,255,255,.12);
    transition:transform .2s;
  }
  
  .stat-card:hover{
    transform:translateY(-4px);
  }
  
  .stat-icon{
    display:block;
    margin-bottom:1rem;
    font-size:2rem;
  }
</style>