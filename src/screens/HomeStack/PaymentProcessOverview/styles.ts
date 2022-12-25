import { StyleSheet } from 'react-native'

import {
  RW,
  PRIMARY_BG_COLOR,
  WHITE,
  font,
  PAGE_HORIZONTAL_PADDING,
  RH,
  TRANSPARENT,
  TEXT_INPUT_BG_COLOR,
} from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'

export const modalInitialHeight = RH(550)

export default StyleSheet.create({
  modalizeWrapper: {
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
    flex: 1,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    paddingTop: RH(35),
    paddingBottom: RH(40),
  },
  modalTitle: {
    ...font('rw.bold', 20, WHITE, 28),
  },
  scrollContainerInitial: {
    maxHeight: RH(360),
  },
  progressOverview: {
    ...font('rw.thin', 16, WHITE, 26),
  },
  handle: {
    backgroundColor: WHITE,
    top: RH(20),
    width: RW(80),
    height: RH(3),
    borderRadius: RW(2),
  },
  icon: {
    width: RW(83),
    height: RW(81),
    backgroundColor: TEXT_INPUT_BG_COLOR,
    borderRadius: RW(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRow: {
    justifyContent: 'space-between',
  },
  indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: RW(5),
  },
  isRTL: {
    transform: [{ rotate: '180deg' }],
  },
})
