<template>
  <div class="app">
    <AppNavbar />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { watch } from 'vue'
  import { RouterView } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { useAppStore } from '@/stores/app'

  import AppNavbar from '@/components/layout/AppNavbar.vue'

  const { locale } = useI18n()
  const appStore = useAppStore()

  // Sync locale
  watch(
    () => appStore.locale,
    newLocale => {
      locale.value = newLocale
      document.documentElement.lang = newLocale
    },
    { immediate: true },
  )
</script>
