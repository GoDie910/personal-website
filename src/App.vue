<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div class="app">
    <AppNavbar />

    <RouterView />
  </div>
</template>
