
<script setup lang="ts">
import { RouterLink } from 'vue-router'

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Projects',
    path: '/projects',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
]
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <RouterLink
        to="/"
        class="logo"
      >
        YA
      </RouterLink>

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
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;

  z-index: 1000;

  backdrop-filter: blur(18px);

  background: rgba(10, 10, 10, 0.65);

  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar-container {
  width: min(1400px, 100%);
  margin: 0 auto;

  padding: 1.2rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.2rem;
  font-weight: 800;
  letter-spacing: 0.2rem;

  color: white;
  text-decoration: none;

  transition: 0.2s ease;
}

.logo:hover {
  opacity: 0.7;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  position: relative;

  color: rgba(255, 255, 255, 0.7);

  text-decoration: none;

  font-size: 0.95rem;
  font-weight: 500;

  transition: 0.2s ease;
}

.nav-link:hover {
  color: white;
}

.nav-link.router-link-exact-active {
  color: white;
}

.nav-link.router-link-exact-active::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: -0.4rem;

  width: 100%;
  height: 2px;

  background: white;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 1rem 1.2rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }
}
</style>