<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const links = computed(() => [
  {
    name: t('nav-bar.links.home'),
    path: '/',
  },
  {
    name: t('nav-bar.links.projects'),
    path: '/projects',
  },
  {
    name: t('nav-bar.links.about'),
    path: '/about',
  },
  {
    name: t('nav-bar.links.contact'),
    path: '/contact',
  },
])
</script>

<template>
  <nav class="nav-links">
    <RouterLink
      v-for="link in links"
      :key="link.name"
      :to="link.path"
      class="nav-link"
    >
      {{ link.name }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav-links {
  display: flex;
  align-items: center;

  gap: clamp(1.2rem, 10vh, 2.5vw);
}

.nav-link {
  position: relative;

  color: rgba(255, 255, 255, 0.72);

  text-decoration: none;

  font-size: clamp(1rem, 1.25vw, 6.6vh);

  font-weight: 500;

  transition:
    color 0.2s ease,
    opacity 0.2s ease,
    transform 0.2s ease;
}

.nav-link:hover {
  color: white;

  transform: translateY(-0.1rem);
}

.nav-link.router-link-exact-active {
  color: white;
}

.nav-link.router-link-exact-active::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: -0.5em;

  width: 100%;
  height: 0.12em;

  background: white;

  border-radius: 999rem;
}

@media (max-width: 64rem) {
  .nav-links {
    gap: 1.5rem;
  }
}

@media (max-width: 48rem) {
  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}

@media (max-width: 30rem) {
  .nav-links {
    flex-wrap: wrap;

    justify-content: center;
  }
}
</style>