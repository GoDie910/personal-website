<template>
  <RouterLink
    to="/"
    class="logo"
  >
    DBA
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.logo {
  font-size: clamp(1.2rem, 1.25vw, 6.6vh);

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
</style>