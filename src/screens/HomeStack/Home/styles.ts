import { StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, font } from '@/theme/utils'
import { SCREEN_WIDTH } from '@/constants'
import { PRIMARY_BG_COLOR, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RW(40),
    width: SCREEN_WIDTH,
    flexDirection: 'column',
    height: '100%',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  cardNumberButton: {
    width: RW(189),
    height: RW(49),
  },
  cardNumberText: {
    ...font('rw.regular', 12, WHITE, 14),
  },
  showCVVButton: {
    width: RW(126),
    height: RW(49),
  },
  showCVVText: {
    ...font('rw.regular', 12, WHITE, 14),
  },
  moneySpentText: {
    ...font('pp.regular', 20, WHITE, 30),
  },
  button: {
    width: '100%',
    height: '100%',
  },
})
