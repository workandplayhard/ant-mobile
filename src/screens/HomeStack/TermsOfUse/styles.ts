import { StyleSheet } from 'react-native'

import { BLACK, HOME_SUBTITLE_COLOR, RW, PRIMARY_BG_COLOR, WHITE, font, PAGE_HORIZONTAL_PADDING } from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'

export default StyleSheet.create({
  container: {
    padding: PAGE_HORIZONTAL_PADDING,
  },
  modalizeWrapper: {
    padding: RW(30),
    backgroundColor: PRIMARY_BG_COLOR,
    height: SCREEN_HEIGHT,
  },
  modalizeTitle: {
    ...font('rw.bold', 20, WHITE, 28),
    textAlign: 'left',
  },
  modalizeContent: {
    ...font('rw.thin', 16, WHITE, 26),
    textAlign: 'left',
  },
  modalizeSignature: {
    ...font('rw.thin', 16, HOME_SUBTITLE_COLOR, 26),
    textAlign: 'left',
  },
  handle: {
    backgroundColor: WHITE,
    top: RW(40),
    width: RW(80),
  },
  modal: {
    backgroundColor: PRIMARY_BG_COLOR,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
  },
  modalNonBorder: {
    backgroundColor: PRIMARY_BG_COLOR,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  pickerModalContainer: {
    flex: 1,
    paddingHorizontal: RW(30),
    paddingVertical: RW(50),
  },
  pickerTitle: {
    ...font('rw.bold', 24, BLACK, 28),
    textAlign: 'left',
  },
})
