<template>
  <SectionBlock
    :label="t('about-me.journey.label')"
    :title="t('about-me.journey.title')"
  >
    <div class="timeline">
      <div
        v-for="item in journeyItems"
        :key="item.year"
        class="timeline-item"
      >
        <span class="timeline-year">{{ item.year }}</span>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </SectionBlock>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  import SectionBlock from './SectionBlock.vue'
  
  const { t, tm } = useI18n()
  
  const journeyItems = computed(() => tm('about-me.journey.items') as {
    year: string
    description: string
  }[])
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