<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
</script>

<template>
  <div class="app">
    <AppNavbar />

    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.page-content {
  padding-top: 80px;
}
</style>