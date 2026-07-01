<template>
  <section class="content-section">
    <div class="section-header">
      <p v-if="label" class="section-label">
        {{ label }}
      </p>

      <h2 v-if="title">
        {{ title }}
      </h2>
    </div>

    <slot />
  </section>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  title?: string
}>()
</script>

<style lang="css" scoped>
  .content-section {
    margin-bottom: 6rem;
  }

  .section-header {
    margin-bottom: 1.5rem;
  }
</style>