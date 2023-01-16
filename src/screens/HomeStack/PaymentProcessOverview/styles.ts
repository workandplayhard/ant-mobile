import { StyleSheet } from 'react-native'

import {
  RW,
  PRIMARY_BG_COLOR,
  WHITE,
  font,
  PAGE_HORIZONTAL_PADDING,
  RH,
  TRANSPARENT,
  TEXT_INPUT_DARK_BG_COLOR,
} from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'

export const modalInitialHeight = RH(562)

export default StyleSheet.create({
  modalizeWrapper: {
    paddingHorizontal: RW(25),
  },
  modal: {
    alignItems: 'flex-end',
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
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(30),
    flex: 1,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    backgroundColor: PRIMARY_BG_COLOR,
    alignItems: 'center',
  },
  wrapperLg: {
    paddingTop: RH(85),
    height: SCREEN_HEIGHT,
  },
  modalTitle: {
    ...font('rw.bold', 20, WHITE, 28),
  },
  scrollContainerInitial: {
    maxHeight: RH(130),
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
  handleLg: {
    top: RH(70),
  },
  icon: {
    width: RW(83),
    height: RW(81),
    backgroundColor: TEXT_INPUT_DARK_BG_COLOR,
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
