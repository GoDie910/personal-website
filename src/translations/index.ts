import type { Locale } from '@/types'
import { createI18n } from 'vue-i18n'
import en from './en/index'
import es from './es/index'
import pt from './pt/index'

export const locales: Locale[] = ['es', 'en', 'pt']

export default createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    en,
    es,
    pt,
  },
})
