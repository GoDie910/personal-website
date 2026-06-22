<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

import { locales } from '@/translations'
import { useAppStore } from '@/stores/app'
import type { Locale } from '@/types'
import { mdiTranslate } from '@mdi/js'

const appStore = useAppStore()

const isOpen = ref(false)

const locale = computed({
  get: () => appStore.locale,
  set: (value: string) => {
    appStore.locale = value as Locale
  },
})

const dropdownRef = ref<HTMLElement | null>(null)

function selectLanguage(lang: Locale) {
  locale.value = lang
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(event.target as Node)
  ) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    ref="dropdownRef"
    class="language-selector"
  >
    <button
      class="language-button"
      type="button"
      @click="isOpen = !isOpen"
    >
      <svg
        viewBox="0 0 24 24"
        width="20"
        height="20"
        aria-hidden="true"
      >
        <path
          :d="mdiTranslate"
          fill="currentColor"
        />
      </svg>
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="language-dropdown"
      >
        <button
          v-for="lang in locales"
          :key="lang"
          class="language-option"
          :class="{ active: locale === lang }"
          @click="selectLanguage(lang)"
        >
          {{ lang.toUpperCase() }}
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.language-selector {
  position: relative;
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;

  border: none;
  border-radius: 999rem;

  background: transparent;

  color: white;

  cursor: pointer;

  font-size: 1.2rem;

  transition:
    background-color 0.2s ease,
    transform 0.2s ease;
}

.language-button:hover {
  background: rgba(255, 255, 255, 0.08);

  transform: translateY(-0.1rem);
}

.language-dropdown {
  position: absolute;

  top: calc(100% + 0.5rem);
  right: 0;

  min-width: 5rem;

  overflow: hidden;

  border: 0.0625rem solid rgba(255, 255, 255, 0.08);
  border-radius: 0.75rem;

  backdrop-filter: blur(1rem);

  background: rgba(15, 15, 15, 0.95);

  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.25);

  z-index: 1000;
}

.language-option {
  display: block;

  width: 100%;

  padding: 0.75rem 1rem;

  border: none;

  background: transparent;

  color: rgba(255, 255, 255, 0.75);

  font-size: 0.9rem;
  font-weight: 500;

  text-align: center;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.08);

  color: white;
}

.language-option.active {
  color: white;

  background: rgba(255, 255, 255, 0.12);
}

/* Transition */

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;

  transform: translateY(-0.25rem);
}
</style>