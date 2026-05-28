
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

<style lang="css" scoped>
.navbar {
  position: sticky;
  top: 0;

  width: 100%;

  z-index: 1000;

  backdrop-filter: blur(1.2rem);

  background: rgba(10, 10, 10, 0.65);

  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.05);

  box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.2);
}

.navbar-container {

  margin: 0 5vw;

  padding:
    clamp(1rem, 1.2vw, 1.8rem)
    clamp(1.5rem, 3vw, 4rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: clamp(1.2rem, 7.5vh, 2vw);

  font-weight: 800;

  letter-spacing: 0.2em;

  color: white;

  text-decoration: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.logo:hover {
  opacity: 0.7;

  transform: translateY(-0.1rem);
}

.nav-links {
  display: flex;
  align-items: center;

  gap: clamp(1.2rem, 10vh, 2.5vw);
}

.nav-link {
  position: relative;

  color: rgba(255, 255, 255, 0.72);

  text-decoration: none;

  font-size: clamp(1rem, 7.5vh, 2vw);

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

/* Tablet */
@media (max-width: 64rem) {
  .navbar-container {
    width: min(92vw, 90rem);
  }

  .nav-links {
    gap: 1.5rem;
  }
}

/* Mobile */
@media (max-width: 48rem) {
  .navbar-container {
    padding:
      1rem
      1.2rem;
  }

  .logo {
    font-size: 1.1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }
}

/* Very Small Phones */
@media (max-width: 30rem) {
  .navbar-container {
    flex-direction: column;

    gap: 1rem;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>