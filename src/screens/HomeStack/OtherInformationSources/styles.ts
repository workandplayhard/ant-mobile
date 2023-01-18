import { StyleSheet } from 'react-native'

import {
  RW,
  RH,
  font,
  WHITE,
  BLACK,
  PAGE_TITLE_COLOR,
  PRIMARY_BG_COLOR,
  PAGE_HORIZONTAL_PADDING,
  OTHER_INFORMATION_SUB_SOURCE_BG_COLOR,
  OTHER_INFORMATION_SUB_SOURCE_DROP_BORDER,
  SOURCE_MODAL_BUTTON_BORDER,
} from '@/theme'
import { IS_IOS, SCREEN_WIDTH } from '@/constants'

export const informationModalHeight = RH(517)

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    width: '100%',
    flexDirection: 'column',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  financialGap: {
    marginTop: RW(2),
  },
  circle: {
    width: RW(5),
    height: RW(5),
    backgroundColor: PAGE_TITLE_COLOR,
    borderRadius: SCREEN_WIDTH / 2,
    justifyContent: 'center',
    alignItems: 'center',
    top: RW(12),
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
    ...font('rw.semibold', 18, PAGE_TITLE_COLOR, 24),
  },
  dropdownPos: {
    marginTop: IS_IOS ? RH(5) : RH(-50),
  },
  financialRow: {
    justifyContent: 'space-between',
  },
  image: {
    width: RW(50),
    height: RW(50),
  },
  dropdownText: {
    ...font('rw.medium', 16, BLACK, 24),
  },
  subSourceIcon: {
    width: RW(20),
    height: RW(20),
  },
  subSourceIconPos: {
    paddingLeft: RW(11),
  },
  subSourceInformationText: {
    ...font('rw.regular', 16, PAGE_TITLE_COLOR, 24),
  },
  subSourcePeriodText: {
    ...font('rw.semibold', 16, PAGE_TITLE_COLOR, 24),
  },
  subSourcePeriodDropBorder: {
    borderColor: OTHER_INFORMATION_SUB_SOURCE_DROP_BORDER,
  },
  subSourceFooterList: {
    marginBottom: RW(10),
  },
  subSourceFooterListItem: {
    ...font('rw.regular', 16, PAGE_TITLE_COLOR, 24),
    paddingLeft: RW(20),
  },
  subSourceFooterListItemRTL: {
    paddingRight: RW(20),
  },
  modalizeWrapper: {
    paddingHorizontal: RW(25),
  },
  modal: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'flex-end',
  },
  modalChildren: {
    backgroundColor: PRIMARY_BG_COLOR,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    height: informationModalHeight,
  },
  wrapper: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    flex: 1,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    paddingTop: RH(20),
    paddingBottom: RH(40),
    backgroundColor: PRIMARY_BG_COLOR,
  },
  modalTitle: {
    ...font('rw.bold', 20, WHITE, 28),
  },
  modalContent: {
    ...font('rw.thin', 16, WHITE, 26),
  },
  scrollContainerInitial: {
    maxHeight: RH(160),
  },
  handleWrapper: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  handle: {
    top: 0,
    position: 'absolute',
    width: RW(80),
    height: RH(3),
    borderRadius: RW(2),
    backgroundColor: WHITE,
  },
  buttonBorder: {
    borderColor: SOURCE_MODAL_BUTTON_BORDER,
  },
})
