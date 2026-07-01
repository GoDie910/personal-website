<template>
  <SectionBlock
    :label="t('about-me.journey.label')"
    :title="t('about-me.journey.title')"
  >
    <div class="timeline">
      <div class="timeline-item">
        <span class="timeline-year">2022</span>
        <p>{{ t('about-me.journey.items["2022"]') }}</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">2023</span>
        <p>{{ t('about-me.journey.items["2023"]') }}</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">2024</span>
        <p>{{ t('about-me.journey.items["2024"]') }}</p>
      </div>
      <div class="timeline-item">
        <span class="timeline-year">Today</span>
        <p>{{ t('about-me.journey.items.today') }}</p>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n'
  import SectionBlock from './SectionBlock.vue'
  
  const { t } = useI18n()
</script>

<style lang="css" scoped>
  .timeline{
    display:flex;
    flex-direction:column;
    gap:1.5rem;
  }
  
  .timeline-item{
    padding-left:1.5rem;
    border-left:2px solid rgba(255,255,255,.15);
  }
  
  .timeline-year{
    display:block;
    margin-bottom:.5rem;
    font-weight:700;
  }
  
  .timeline-item p{
    margin:0;
    line-height:1.7;
    opacity:.85;
  }
</style>