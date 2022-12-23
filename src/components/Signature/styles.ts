import { StyleSheet } from 'react-native'

import { RH, TEXT_INPUT_DARK_BG_COLOR, TRANSPARENT } from '@/theme'

export default StyleSheet.create({
  container: {
    width: '100%',
    height: RH(89),
    borderRadius: RH(20),
    overflow: 'hidden',
    backgroundColor: TEXT_INPUT_DARK_BG_COLOR,
  },
  signature: {
    width: '100%',
    height: '100%',
    borderRadius: RH(20),
    backgroundColor: TRANSPARENT,
  },
})
