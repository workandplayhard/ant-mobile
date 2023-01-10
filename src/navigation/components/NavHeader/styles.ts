import { StyleSheet, I18nManager } from 'react-native'

import { RW, RH, font } from '@/theme/utils'
import { PROFILE_GREETINGS_COLOR, WHITE } from '@/theme'
import { HEADER_BOTTOM, HEADER_HEIGHT, STATUS_BAR } from '@/constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingRight: RW(6),
    minHeight: HEADER_HEIGHT,
    paddingTop: STATUS_BAR,
    paddingBottom: HEADER_BOTTOM,
  },
  image: {
    width: RH(52),
    height: RH(52),
    borderRadius: RW(26),
  },
  greetings: {
    ...font('pp.regular', 12, PROFILE_GREETINGS_COLOR, 15),
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
  iconContainer: {
    transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
  },
})
