import type { Locale } from '@/types'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: 'es' as Locale,
  }),
  actions: {
    // LOCALE
    setLocale(locale: Locale) {
      this.locale = locale
    },
  },
})
