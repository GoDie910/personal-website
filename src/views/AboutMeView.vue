<template>
  <main class="about-view">
    <HeroSection />
    <OverviewSection />
    <TechnologiesSection />
    <InterestsSection />
    <JourneySection />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/about-me/HeroSection.vue'
import OverviewSection from '@/components/about-me/OverviewSection.vue'
import TechnologiesSection from '@/components/about-me/TechnologiesSection.vue'
import InterestsSection from '@/components/about-me/InterestsSection.vue'
import JourneySection from '@/components/about-me/JourneySection.vue'
</script>

<style scoped>
.about-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

@media (max-width: 768px) {
  .about-view {
    width: 92%;
    padding: 4rem 0;
  }
}
</style>