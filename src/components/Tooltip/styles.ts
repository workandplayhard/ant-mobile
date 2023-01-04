import { I18nManager, StyleSheet } from 'react-native'

import { PRIMARY_BG_COLOR, RW, WHITE, font } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    left: RW(11),
    borderRadius: RW(15),
  },
  text: {
    ...font('rw.regular', 14, WHITE, 24),
  },
  pointerPos: {
    position: 'absolute',
    left: I18nManager.isRTL ? RW(-169) : RW(-156),
  },
})
