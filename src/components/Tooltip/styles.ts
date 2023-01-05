import { StyleSheet } from 'react-native'

import { LABEL_DARK_COLOR, RW, WHITE, font } from '@/theme'

export default StyleSheet.create({
  toolTipContainer: {
    borderRadius: RW(15),
    // width: 'auto',
    height: 'auto',
    maxWidth: RW(200),
    padding: RW(15),
  },
  text: {
    ...font('rw.regular', 14, WHITE, 24),
  },
  textDark: {
    color: LABEL_DARK_COLOR,
  },
})
