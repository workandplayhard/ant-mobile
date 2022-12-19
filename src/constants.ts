import { Dimensions, Platform } from 'react-native'

import { TLang } from './types'

export const SERVER_ENDPOINT = __DEV__ ? 'http://localhost:4001' : 'http://localhost:4001'

export const IS_IOS = Platform.OS === 'ios'

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
