<template>
  <main class="about-view">

    <!-- HERO -->
    <section class="hero">
      <p class="section-label">
        {{ t('about-me.hero.label') }}
      </p>

      <h1>
        {{ t('about-me.hero.title') }}
      </h1>

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

    <!-- OVERVIEW -->
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

    <!-- TECHNOLOGIES -->
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

    <!-- INTERESTS -->
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

    <!-- JOURNEY -->
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

  </main>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SectionBlock from '@/components/about-me/SectionBlock.vue';

const { t } = useI18n()
</script>

<style scoped>
/* =========================
   Layout
   ========================= */

.about-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

.content-section {
  margin-bottom: 6rem;
}

/* =========================
   Hero
   ========================= */

.hero {
  margin-bottom: 6rem;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.hero-description {
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.85;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 2rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.75rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-actions {
  margin-top: 2rem;
}

.cv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid currentColor;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.cv-button:hover {
  transform: translateY(-2px);
  opacity: 0.85;
}

/* =========================
   Shared Section Styles
   ========================= */

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
}

.section-header {
  margin-bottom: 2rem;
}

.section-header h2 {
  font-size: 2rem;
}

/* =========================
   Cards & Grids
   ========================= */

.stats-grid,
.tech-grid,
.interests-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.stat-card,
.tech-card,
.interest-card {
  padding: 1.5rem;
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  transition: transform 0.2s ease;
}

.stat-card:hover,
.tech-card:hover,
.interest-card:hover {
  transform: translateY(-4px);
}

.stat-icon,
.interest-card span {
  display: block;
  margin-bottom: 1rem;
  font-size: 2rem;
}

/* =========================
   Technologies
   ========================= */

.tech-card {
  display: flex;
  flex-direction: column;
}

.tech-card h3 {
  margin-bottom: 1rem;
}

.skill-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.skill-icons :deep(svg) {
  font-size: 2.25rem;
}

.tech-footer {
  margin-top: 2rem;
  text-align: center;
  opacity: 0.7;
}

/* =========================
   Timeline
   ========================= */

.timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.timeline-item {
  padding-left: 1.5rem;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
}

.timeline-year {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.timeline-item p {
  margin: 0;
  line-height: 1.7;
  opacity: 0.85;
}

/* =========================
   Responsive
   ========================= */

@media (max-width: 768px) {
  .about-view {
    width: 92%;
    padding: 4rem 0;
  }

  .content-section {
    margin-bottom: 4rem;
  }

  .hero-badges {
    flex-direction: column;
  }
}
</style>