import { I18nManager, StyleSheet } from 'react-native'

import { LABEL_DARK_COLOR, RH, RW, WHITE, font } from '@/theme'

export default StyleSheet.create({
  toolTipContainer: {
    borderRadius: RW(15),
    height: 'auto',
    maxWidth: RW(200),
    padding: RW(15),
    // marginTop: RH(10),
  },
  text: {
    ...font('rw.regular', 14, WHITE, 24),
  },
  textDark: {
    color: LABEL_DARK_COLOR,
  },
  pointerPos: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-14) } : { left: RW(-3) }),
  },
})
