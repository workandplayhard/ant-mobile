import i18n, { t as _t, TOptions, StringMap } from 'i18next'
import { initReactI18next } from 'react-i18next'

import { APP_DEFAULT_LANG } from '@/constants'

import resources from './locale'

const languageDetector: any = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb(APP_DEFAULT_LANG),
  init: () => null,
  cacheUserLanguage: () => null,
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: APP_DEFAULT_LANG,
    resources,
    debug: true,
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    ns: ['translation', 'thermography'],
    interpolation: {
      escapeValue: false,
    },
  })

export const t = (key: string, options?: TOptions<StringMap> & { defaultValue?: string }) =>
  _t(key, { ...(options || {}), defaultValue: options?.defaultValue || '' })

export default i18n
