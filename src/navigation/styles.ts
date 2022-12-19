import { StyleSheet } from 'react-native'

import { font, RW, RH } from '@/theme/utils'
import { TEXT_INPUT_BG_COLOR, TEXT_INPUT_FONT_COLOR } from '@/theme'

export default StyleSheet.create({
  border: {
    position: 'absolute',
    width: RW(80),
    height: RH(8),
    bottom: RW(-16),
    borderTopLeftRadius: RW(15),
    borderTopRightRadius: RW(15),
  },
})
