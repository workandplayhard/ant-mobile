import { StyleSheet } from 'react-native'

import {
  HOME_SUBTITLE_COLOR,
  RW,
  PRIMARY_BG_COLOR,
  WHITE,
  font,
  PAGE_HORIZONTAL_PADDING,
  RH,
  TRANSPARENT,
} from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'

export const modalInitialHeight = RH(550)

export default StyleSheet.create({
  container: {
    paddingHorizontal: RW(25),
  },
  modal: {
    backgroundColor: TRANSPARENT,
    borderTopLeftRadius: RW(0),
    borderTopRightRadius: RW(0),
  },
  modalChildren: {
    backgroundColor: PRIMARY_BG_COLOR,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    height: modalInitialHeight,
  },
  modalChildrenLg: {
    height: SCREEN_HEIGHT,
  },
  wrapper: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    height: '100%',
    flex: 1,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    paddingTop: RH(35),
    paddingBottom: RH(40),
  },
  wrapperLg: {
    paddingTop: RH(85),
    height: SCREEN_HEIGHT,
  },
  modalTitle: {
    ...font('rw.bold', 20, WHITE, 28),
    textAlign: 'left',
  },
  scrollContainerInitial: {
    height: RH(160),
  },
  termsOfUse: {
    ...font('rw.thin', 16, WHITE, 26),
    textAlign: 'left',
  },
  signatureLabel: {
    ...font('rw.thin', 16, HOME_SUBTITLE_COLOR, 26),
    textAlign: 'left',
  },
  handle: {
    backgroundColor: WHITE,
    top: RH(20),
    width: RW(80),
    height: RH(3),
    borderRadius: RW(2),
  },
  handleLg: {
    top: RH(70),
  },
})
