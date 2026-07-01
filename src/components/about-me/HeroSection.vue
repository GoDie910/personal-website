<template>
  <section class="hero">
    <p class="section-label">
      {{ t('about-me.hero.label') }}
    </p>

    <h1>{{ t('about-me.hero.title') }}</h1>

    <p class="hero-description">
      {{ t('about-me.hero.description') }}
    </p>

    <div class="hero-badges">
      <div class="badge">
        <Icon icon="mdi:map-marker-outline" />
        <span>{{ t('about-me.hero.badges.location') }}</span>
      </div>

      <div class="badge">
        <Icon icon="mdi:briefcase-outline" />
        <span>{{ t('about-me.hero.badges.role') }}</span>
      </div>

      <div class="badge">
        <Icon icon="mdi:web" />
        <span>{{ t('about-me.hero.badges.type') }}</span>
      </div>
    </div>

    <div class="hero-actions">
      <a
        href="/cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="cv-button"
      >
        {{ t('about-me.hero.actions.downloadCv') }}
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  margin-bottom: 6rem;
}

.section-label {
  font-size: .85rem;
  font-weight: 700;
  letter-spacing: .15em;
  opacity: .7;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: clamp(2.5rem,5vw,4.5rem);
  line-height:1.1;
  margin-bottom:1.5rem;
}

.hero-description {
  max-width:700px;
  font-size:1.1rem;
  line-height:1.8;
  opacity:.85;
}

.hero-badges{
  display:flex;
  flex-wrap:wrap;
  gap:.75rem;
  margin-top:2rem;
}

.badge{
  display:inline-flex;
  align-items:center;
  gap:.5rem;
  padding:.75rem 1rem;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.12);
}

.hero-actions{
  margin-top:2rem;
}

.cv-button{
  display:inline-flex;
  justify-content:center;
  align-items:center;
  padding:.9rem 1.5rem;
  border-radius:12px;
  text-decoration:none;
  font-weight:600;
  border:1px solid currentColor;
  transition:.2s;
}

.cv-button:hover{
  transform:translateY(-2px);
  opacity:.85;
}

@media (max-width:768px){
  .hero-badges{
    flex-direction:column;
  }
}
</style>