import React, { useCallback, useEffect, useState } from 'react'
import { I18nManager, StatusBar, StatusBarStyle } from 'react-native'
import * as RNLocalize from 'react-native-localize'
import RNRestart from 'react-native-restart'

import { DEFAULT_STATUSBAR } from '@/theme/colors'
import { TLang } from '@/types'
import { setStorageValue, getStorageValue } from '@/utils'
import { APP_LANG_KEY, APP_DEFAULT_LANG, APP_LANGUAGES } from '@/constants'
import i18n from '@/i18n'

interface IChangeLanguage {
  lng: TLang
  _isRTL?: boolean
  restart?: boolean
}

interface ITheme {
  statusBarColor: string
  statusBarStyle: Maybe<StatusBarStyle>
}

interface IAppContext {
  appLang: TLang
  isRTL: boolean
  onChangeTheme: (args: Partial<ITheme>) => void
  onChangeLanguage: ({ lng, _isRTL, restart }: IChangeLanguage) => void
}

export const AppContext = React.createContext<IAppContext>({
  appLang: APP_DEFAULT_LANG,
  isRTL: false,
  onChangeTheme: () => undefined,
  onChangeLanguage: () => undefined,
})

const defaultTheme: ITheme = {
  statusBarStyle: 'dark-content',
  statusBarColor: DEFAULT_STATUSBAR,
}

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(defaultTheme)
  const [appLang, setAppLang] = useState<TLang>(APP_DEFAULT_LANG)
  const [isRTL, setIsRTL] = useState<boolean>(
    I18nManager.isRTL && I18nManager.doLeftAndRightSwapInRTL,
  )

  const onChangeTheme = useCallback((nTheme: Partial<ITheme>) => {
    setTheme((_theme) => ({ ..._theme, ...nTheme }))
  }, [])

  const onChangeLanguage = useCallback(
    ({ lng = APP_DEFAULT_LANG, _isRTL, restart = true }: IChangeLanguage) => {
      setStorageValue(APP_LANG_KEY, lng)
      const rtl = _isRTL !== undefined ? _isRTL : lng === APP_LANGUAGES.HE
      setIsRTL(rtl)
      I18nManager.forceRTL(rtl)
      i18n.changeLanguage(lng, () => {
        setAppLang(lng)
        if (restart) {
          RNRestart.Restart()
        }
      })
    },
    [],
  )

  useEffect(() => {
    const checkLang = async () => {
      let language = await getStorageValue<TLang | undefined>(APP_LANG_KEY)

      let _isRTL = language ? language === APP_LANGUAGES.HE : undefined

      if (!language) {
        const localeData = RNLocalize.getLocales()
        const currentDeviceLang = localeData[0]?.languageCode || APP_LANGUAGES.HE
        language = currentDeviceLang === APP_LANGUAGES.EN ? APP_LANGUAGES.EN : APP_LANGUAGES.HE
        _isRTL = localeData[0]?.isRTL
      }

      onChangeLanguage({ lng: language as TLang, _isRTL, restart: false })
    }
    checkLang()
  }, [onChangeLanguage])

  useEffect(() => {
    I18nManager.allowRTL(appLang === APP_LANGUAGES.HE)
  }, [appLang])

  const value = React.useMemo(
    () => ({
      isRTL,
      appLang,
      onChangeTheme,
      onChangeLanguage,
    }),
    [isRTL, appLang, onChangeTheme, onChangeLanguage],
  )

  return (
    <AppContext.Provider value={value}>
      <StatusBar translucent barStyle={theme.statusBarStyle} backgroundColor={DEFAULT_STATUSBAR} />
      {children}
    </AppContext.Provider>
  )
}
