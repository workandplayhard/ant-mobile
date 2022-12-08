import React, { useCallback, useState } from 'react'
import { I18nManager, StatusBar, StatusBarStyle } from 'react-native'
import RNRestart from 'react-native-restart'

import { DEFAULT_STATUSBAR } from '@/theme/colors'
import { TLang } from '@/types'
import { setStorageValue } from '@/utils'
import { APP_LANG_KEY, APP_LANGUAGES } from '@/constants'
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
  onChangeTheme: (args: ITheme) => void
  onChangeLanguage: ({ lng, _isRTL, restart }: IChangeLanguage) => void
}

export const AppContext = React.createContext<IAppContext>({
  appLang: 'en',
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
  const [appLang, setAppLang] = useState<TLang>('en')
  const [isRTL, setIsRTL] = useState<boolean>(
    I18nManager.isRTL && I18nManager.doLeftAndRightSwapInRTL,
  )

  const onChangeTheme = useCallback((nTheme: ITheme) => {
    setTheme((_theme) => ({ ..._theme, ...nTheme }))
  }, [])

  const onChangeLanguage = useCallback(({ lng, _isRTL, restart = true }: IChangeLanguage) => {
    i18n.changeLanguage(lng, () => {
      setStorageValue(APP_LANG_KEY, lng)
      setAppLang(lng)
      const rtl = _isRTL !== undefined ? _isRTL : lng === APP_LANGUAGES.HE
      setIsRTL(rtl)
      I18nManager.forceRTL(rtl)
      if (restart) {
        RNRestart.Restart()
      }
    })
  }, [])

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
