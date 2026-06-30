<template>
  <section class="about-section">
    <div class="section-header">
      <p class="section-label">
        {{ t('landing.about.label') }}
      </p>

      <h2>
        {{ t('landing.about.title') }}
      </h2>
    </div>

    <div class="about-list">
      <div
        v-for="(item, index) in aboutItems"
        :key="index"
        class="about-item"
      >
        <span class="about-icon">✓</span>

        <p>{{ item }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'

  const { t, tm } = useI18n()

  const aboutItems = computed(() => tm('landing.about.items') as string[])
</script>

<style scoped>
.about-section {
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

.about-list {
  display: flex;
  flex-direction: column;

  gap: clamp(1rem, 1.5vw, 1.75rem);

  max-width: 100%;
}

.about-item {
  display: flex;
  align-items: flex-start;

  gap: 1rem;
}

.about-icon {
  flex-shrink: 0;

  color: white;

  font-weight: 700;
}

.about-item p {
  margin: 0;

  color: #a0a0a0;

  line-height: 1.7;

  font-size: clamp(1rem, 1.1vw, 1.35rem);
}

@media (max-width: 48rem) {
  .about-section {
    padding:
      clamp(4rem, 8vh, 6rem)
      5vw;
  }

  h2 {
    max-width: 100%;
  }
}
</style>