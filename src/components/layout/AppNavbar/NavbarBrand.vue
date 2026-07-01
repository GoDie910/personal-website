<template>
  <RouterLink
    to="/"
    class="logo"
  >
    <img
      :src="logo"
      alt="Logo"
    >
  </RouterLink>
</template>

<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import logo from '@/assets/logo.svg'
</script>

<style scoped>
  .logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }
  
  .logo img {
    display: block;
    width: 48px;   /* or whatever size you want */
    height: auto;
  }
  
  .logo:hover {
    opacity: 0.7;
    transform: translateY(-0.1rem);
  }
</style>