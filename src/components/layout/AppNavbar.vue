<script setup lang="ts">
import LanguageSelector from './AppNavbar/LanguageSelector.vue'
import NavbarBrand from './AppNavbar/NavbarBrand.vue'
import NavbarLinks from './AppNavbar/NavbarLinks.vue'
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <NavbarBrand />

      <LanguageSelector />

      <NavbarLinks />
    </div>
  </header>
</template>

<style scoped>
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
  padding:
    clamp(1rem, 1.2vw, 1.8rem)
    clamp(1.5rem, 3vw, 4rem);

  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 48rem) {
  .navbar-container {
    padding:
      1rem
      1.2rem;
  }
}

@media (max-width: 30rem) {
  .navbar-container {
    flex-direction: column;

    gap: 1rem;
  }
}
</style>