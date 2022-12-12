import { I18nManager, StyleSheet } from 'react-native'

import { RW } from '@/theme/utils'

export default StyleSheet.create({
  radio: {
    width: RW(40),
    height: RW(40),
    transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
  },
})
