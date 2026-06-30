<template>
  <main class="contact-view">
    <section class="hero">
      <p class="section-label">
        {{ t('contact.label') }}
      </p>

      <h1>
        {{ t('contact.hero.title') }}
      </h1>

      <p class="hero-description">
        {{ t('contact.hero.description') }}
      </p>

      <p class="location">
        {{ t('contact.hero.location') }}
      </p>
    </section>

    <section class="contact-section">
      <div class="contact-grid">

        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card resume"
        >
          <div class="card-header">
            <Icon icon="simple-icons:adobeacrobatreader" class="card-icon resume-icon" />

            <h2>
              {{ t('contact.cards.resume.title') }}
            </h2>
          </div>

          <p>
            {{ t('contact.cards.resume.description') }}
          </p>

          <span class="contact-link">
            {{ t('contact.cards.resume.action') }}
          </span>
        </a>

        <a
          href="mailto:diego.bedrinana.910@gmail.com"
          class="contact-card email"
        >
          <div class="card-header">
            <Icon icon="simple-icons:gmail" class="card-icon gmail-icon" />

            <h2>
              {{ t('contact.cards.email.title') }}
            </h2>
          </div>

          <p>
            {{ t('contact.cards.email.description') }}
          </p>

          <span class="contact-link">
            {{ t('contact.cards.email.action') }}
          </span>
        </a>

        <a
          href="https://github.com/GoDie910"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card github"
        >
          <div class="card-header">
            <Icon icon="simple-icons:github" class="card-icon github-icon" />

            <h2>
              {{ t('contact.cards.github.title') }}
            </h2>
          </div>

          <p>
            {{ t('contact.cards.github.description') }}
          </p>

          <span class="contact-link">
            {{ t('contact.cards.github.action') }}
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/diego-bed-alb/"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-card linkedin"
        >
          <div class="card-header">
            <Icon icon="simple-icons:linkedin" class="card-icon linkedin-icon" />

            <h2>
              {{ t('contact.cards.linkedin.title') }}
            </h2>
          </div>

          <p>
            {{ t('contact.cards.linkedin.description') }}
          </p>

          <span class="contact-link">
            {{ t('contact.cards.linkedin.action') }}
          </span>
        </a>

      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
import { useI18n } from "vue-i18n"

const { t } = useI18n()
</script>

<style scoped>
.contact-view {
  width: min(1200px, 90%);
  margin: 0 auto;
  padding: 6rem 0;
}

.hero {
  margin-bottom: 5rem;
}

.section-label {
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.7;
  margin-bottom: 1rem;
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
  margin-bottom: 1.5rem;
}

.location {
  font-weight: 600;
  opacity: 0.75;
}

.contact-section {
  margin-bottom: 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  display: block;
  text-decoration: none;
  color: inherit;

  padding: 2rem;

  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: 28px;
  height: 28px;
  flex-shrink: 0;

  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}

.contact-card:hover .card-icon {
  transform: scale(1.1);
}

.resume-icon {
  color: #ec1c24;
}

.gmail-icon {
  color: #ea4335;
}

.github-icon {
  color: #ffffff;
}

.linkedin-icon {
  color: #0a66c2;
}

.contact-card h2 {
  margin: 0;
}

.contact-card p {
  line-height: 1.7;
  opacity: 0.85;
  margin-bottom: 1rem;
}

.contact-link {
  font-weight: 600;
}

.email:hover {
  border-color: #ea4335;
}

.github:hover {
  border-color: #6e5494;
}

.linkedin:hover {
  border-color: #0a66c2;
}

.resume:hover {
  border-color: #22c55e;
}

@media (max-width: 768px) {
  .contact-view {
    width: 92%;
    padding: 4rem 0;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }
}
</style>