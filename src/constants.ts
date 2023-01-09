import { StatusBar, Dimensions, Platform } from 'react-native'

import { RH } from './theme'
import { TLang } from './types'

export const SERVER_ENDPOINT = __DEV__ ? 'http://localhost:4001' : 'http://localhost:4001'

export const IS_IOS = Platform.OS === 'ios'

export const STATUS_BAR = IS_IOS ? RH(35) : StatusBar.currentHeight || 0
export const NAV_HEADER = IS_IOS ? RH(60) : RH(65)
export const HEADER_HEIGHT = STATUS_BAR + NAV_HEADER + RH(5)

export const APP_DEFAULT_LANG: TLang = 'en'
export const APP_LANG_KEY = '@Lang'
export const APP_TOKEN_KEY = '@Token'

export const APP_LANGUAGES: Record<'EN' | 'HE', TLang> = {
  EN: 'en',
  HE: 'he',
}

export const NAV_HEADER_OPTION = {
  headerShown: false,
  headerShadowVisible: false,
  headerTransparent: true,
}

export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width
