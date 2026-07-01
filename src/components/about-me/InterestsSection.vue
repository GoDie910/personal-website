<template>
    <SectionBlock
      :label="t('about-me.interests.label')"
      :title="t('about-me.interests.title')"
    >
      <div class="interests-grid">

        <div class="interest-card">
          <Icon icon="mdi:palette-outline" class="interest-icon" />
          <h3>{{ t('about-me.interests.items.ux.title') }}</h3>
          <p>{{ t('about-me.interests.items.ux.description') }}</p>
        </div>

        <div class="interest-card">
          <Icon icon="mdi:cog-outline" class="interest-icon" />
          <h3>{{ t('about-me.interests.items.architecture.title') }}</h3>
          <p>{{ t('about-me.interests.items.architecture.description') }}</p>
        </div>

        <div class="interest-card">
          <Icon icon="mdi:laptop" class="interest-icon" />
          <h3>{{ t('about-me.interests.items.web.title') }}</h3>
          <p>{{ t('about-me.interests.items.web.description') }}</p>
        </div>

        <div class="interest-card">
          <Icon icon="mdi:controller-classic-outline" class="interest-icon" />
          <h3>{{ t('about-me.interests.items.gamedev.title') }}</h3>
          <p>{{ t('about-me.interests.items.gamedev.description') }}</p>
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
  .interests-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:1.5rem;
  }
  
  .interest-card{
    padding:1.5rem;
    border-radius:18px;
    border:1px solid rgba(255,255,255,.12);
    transition:transform .2s;
  }
  
  .interest-card:hover{
    transform:translateY(-4px);
  }
  
  .interest-icon{
    display:block;
    margin-bottom:1rem;
    font-size:2rem;
  }
</style>