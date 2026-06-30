<template>
  <section id="skills-section" class="skills-section">

    <div class="section-header">
      <p class="section-label">
        {{ t('landing.skills.label') }}
      </p>
      <h2>
        {{ t('landing.skills.title') }}
      </h2>
    </div>

    <div class="category-tabs">
      <button
        v-for="category in skillCategories"
        :key="category.title"
        class="category-pill"
        :class="{ active: selectedCategory === category.title }"
        @click="selectedCategory = category.title"
      >
        {{ t(category.title) }}
      </button>
    </div>

    <div class="technology-grid">
      <article
        v-for="skill in currentCategory.skills"
        :key="skill.name"
        class="technology-item"
      >
        <template v-if="skill.image">
          <img
            :src="skill.image"
            :alt="skill.name"
            class="technology-icon technology-image"
          >
        </template>
        <Icon
          v-else
          :icon="skill.icon!"
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
  import { useI18n } from 'vue-i18n'
  import { skillCategories } from '@/data/skills'

  const { t } = useI18n()

  const selectedCategory = ref(skillCategories[0]?.title)
  const currentCategory = computed(() =>
    skillCategories.find(c => c.title === selectedCategory.value)!
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

.technology-image {
  width: clamp(3rem, 5vw, 4.5rem);

  height: clamp(3rem, 5vw, 4.5rem);

  object-fit: contain;
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