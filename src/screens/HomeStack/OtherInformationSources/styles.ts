import { StyleSheet } from 'react-native'

import {
  RW,
  WHITE,
  PAGE_HORIZONTAL_PADDING,
  RH,
  OTHER_INFORMATION_SUB_SOURCE_BG_COLOR,
  font,
  TITLE_COLOR,
  BLACK,
  OTHER_INFORMATION_SUB_SOURCE_DROP_BORDER,
  TRANSPARENT,
  PRIMARY_BG_COLOR,
} from '@/theme'
import { SCREEN_HEIGHT } from '@/constants'

export const informationModalHeight = RH(517)

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    paddingVertical: RW(40),
    width: '100%',
    flexDirection: 'column',
    height: '100%',
  },
  financialGap: {
    marginTop: RW(26),
  },
  circle: {
    width: 5,
    height: 5,
    backgroundColor: '#000033',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    top: 12,
    position: 'absolute',
  },
  paddingHorizontalStandard: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  line: {
    marginHorizontal: PAGE_HORIZONTAL_PADDING,
    height: RW(2),
    backgroundColor: OTHER_INFORMATION_SUB_SOURCE_DROP_BORDER,
  },
  subSource: {
    height: RW(55),
    backgroundColor: OTHER_INFORMATION_SUB_SOURCE_BG_COLOR,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    justifyContent: 'center',
  },
  subSourceText: {
    ...font('rw.semibold', 18, TITLE_COLOR, 24),
  },
  dropdownPos: {
    marginTop: RW(-20),
  },
  financialRow: {
    justifyContent: 'space-between',
  },
  image: {
    width: RW(30),
    height: RW(30),
  },
  dropdownText: {
    ...font('rw.medium', 16, BLACK, 24),
  },
  subSourceIcon: {
    width: 20,
    height: 20,
  },
  subSourceIconPos: {
    paddingLeft: RW(15),
  },
  subSourceInformationText: {
    ...font('rw.regular', 16, TITLE_COLOR, 24),
  },
  subSourcePeriodText: {
    ...font('rw.semibold', 16, TITLE_COLOR, 24),
  },
  subSourcePeriodDropBorder: {
    borderColor: OTHER_INFORMATION_SUB_SOURCE_DROP_BORDER,
  },
  subSourceFooterList: {
    marginBottom: RW(10),
  },
  subSourceFooterListItem: {
    ...font('rw.regular', 16, TITLE_COLOR, 24),
    paddingLeft: RW(20),
  },
  subSourceFooterListItemRTL: {
    paddingRight: RW(20),
  },
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
    height: informationModalHeight,
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
    maxHeight: RH(160),
  },
  handle: {
    backgroundColor: WHITE,
    top: RH(20),
    width: RW(80),
    height: RH(3),
    borderRadius: RW(2),
  },
  background: {
    backgroundColor: '#00000080',
  },
})
