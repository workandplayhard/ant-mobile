import { StyleSheet, I18nManager } from 'react-native'

import { RW, RH, font } from '@/theme/utils'
import { PROFILE_GREETINGS_COLOR, WHITE } from '@/theme'
import { IS_IOS } from '@/constants'

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: IS_IOS ? RH(68) : RH(68),
  },
  image: {
    width: RW(52),
    height: 52,
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
