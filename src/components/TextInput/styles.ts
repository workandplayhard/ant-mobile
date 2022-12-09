import { StyleSheet } from 'react-native'

import { font, RW, RH } from '@/theme/utils'
import { TEXT_INPUT_BG_COLOR, TEXT_INPUT_FONT_COLOR } from '@/theme'

export default StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: '100%',
    borderRadius: RW(15),
    paddingVertical: RH(18),
    paddingHorizontal: RW(20),
    backgroundColor: TEXT_INPUT_BG_COLOR,
    textAlign: 'left',
    ...font('pp.thin', 16, TEXT_INPUT_FONT_COLOR, 24),
  },
})
