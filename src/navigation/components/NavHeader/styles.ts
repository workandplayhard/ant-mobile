import { StyleSheet } from 'react-native'

import { RW, RH, font } from '@/theme/utils'
import { WHITE } from '@/theme'

export default StyleSheet.create({
  image: {
    width: RW(52),
    height: 52,
    borderRadius: RW(26),
  },
  greetings: {
    ...font('pp.regular', 12, 'rgba(255, 255, 255, 0.8)', 15),
    marginVertical: RH(7),
  },
  content: {
    ...font('pp.regular', 18, WHITE, 18),
  },
  adjust: {
    paddingHorizontal: RH(15),
  },
  profile: {
    flexDirection: 'row',
  },
})
