import { StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, font } from '@/theme/utils'
import { PRIMARY_BG_COLOR, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    paddingVertical: RW(40),
    width: '100%',
    flexDirection: 'column',
    height: '100%',
  },
  scrollContent: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  buttonRow: {
    justifyContent: 'space-between',
    display: 'flex',
    width: '100%',
    height: RW(49),
  },
  buttonHeight: {
    height: RW(49),
  },
  cardNumber: {
    flexShrink: 4,
    paddingRight: RW(10),
  },
  cardNumberText: {
    ...font('rw.regular', 12, WHITE, 14),
  },
  showCVV: {
    flexShrink: 6,
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
  progressRow: {
    justifyContent: 'center',
  },
})
