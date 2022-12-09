import { StyleSheet } from 'react-native'

import { font, RW, normalizePixel } from '@/theme/utils'
import { SCREEN_WIDTH } from '@/constants'

export default StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: SCREEN_WIDTH - RW(60),
    borderRadius: normalizePixel(15),
    padding: normalizePixel(20),
    backgroundColor: '#2C2B30',
    ...font('pp.thin', 16, '#5E626C', 24),
  },
})
