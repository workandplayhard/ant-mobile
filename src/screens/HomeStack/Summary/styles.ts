import { StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RH, RW, font } from '@/theme/utils'
import {
  BLACK,
  CATEGORY_CONTENT,
  GRAY,
  PRIMARY_BG_COLOR,
  SUMMARY_BORDER,
  SUMMARY_CONTENT,
  SUMMARY_HEADER,
  TEXT_INPUT_PLACEHOLDER_DARK_COLOR,
  TITLE_LIGHT_COLOR,
  TOTAL_DESCRIPTION,
  TRANSPARENT,
  WHITE,
} from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    flexDirection: 'column',
    alignItems: 'center',
    justifycontent: 'center',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: RH(64),
  },
  closePos: {
    justifyContent: 'flex-end',
  },
  scrollContainer: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  line: {
    width: '100%',
    height: RH(1),
    backgroundColor: SUMMARY_BORDER,
  },
  dotLine: {
    borderTopWidth: RW(1),
    borderStyle: 'dashed',
    borderTopColor: SUMMARY_BORDER,
    width: '100%',
  },
  card: {
    padding: RW(20),
    borderRadius: RW(15),
    borderWidth: RW(1),
    borderColor: SUMMARY_BORDER,
  },
  catagoryContainer: {
    padding: RW(20),
    borderRadius: RW(15),
    borderWidth: RW(1),
    borderColor: SUMMARY_BORDER,
  },
  catagoryRow: {
    justifyContent: 'space-between',
  },
  iconWrapper: {
    width: RW(60),
    height: RW(60),
    backgroundColor: GRAY,
    borderRadius: RW(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  catagoryPos: {
    paddingLeft: RW(20),
  },
  catagoryTitle: {
    ...font('rw.regular', 12, SUMMARY_HEADER, 20),
  },
  catagoryContent: {
    ...font('pp.bold', 14, SUMMARY_CONTENT, 28),
  },
  catagoryColEnd: {
    alignItems: 'flex-end',
  },
  catagoryResultTitle: {
    ...font('pp.bold', 30, CATEGORY_CONTENT, 36),
  },
  catagoryResultContent: {
    ...font('rw.regular', 14, CATEGORY_CONTENT, 20),
  },
  catagoryResult: {
    textAlign: 'center',
    ...font('rw.regular', 14, SUMMARY_CONTENT, 24),
  },
  footerRow: {
    justifyContent: 'space-between',
  },
  totalAmounth: {
    ...font('rw.bold', 26, SUMMARY_CONTENT, 32),
  },
  totalAmounthPos: {
    paddingTop: RH(5),
  },
  totalAmounthCount: {
    ...font('pp.bold', 30, SUMMARY_CONTENT, 36),
  },
  totalAmounthText: {
    ...font('rw.regular', 14, SUMMARY_CONTENT, 20),
    paddingBottom: RH(7),
  },
  informationPos: {
    paddingLeft: RW(11),
  },
  informationContentTitle: {
    ...font('rw.regular', 12, SUMMARY_HEADER, 20),
  },
  informationContentDescription: {
    ...font('pp.bold', 14, SUMMARY_CONTENT, 28),
  },
  informationRow: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: GRAY,
    paddingHorizontal: RH(20),
    paddingVertical: RH(15),
    borderRadius: RW(12),
  },
  informationTitle: {
    ...font('pp.bold', 30, SUMMARY_CONTENT, 36),
  },
  informationContent: {
    ...font('rw.regular', 14, SUMMARY_HEADER, 20),
  },
  totalRow: {
    width: '100%',
    justifyContent: 'space-between',
  },
  totalCount: {
    ...font('pp.bold', 30, TOTAL_DESCRIPTION, 36),
  },
  totalDescription: {
    ...font('rw.regular', 14, TOTAL_DESCRIPTION, 20),
  },
  totalContent: {
    ...font('rw.semibold', 14, SUMMARY_CONTENT, 24),
  },
  totalCol: {
    paddingLeft: RW(20),
  },
  totalTitle: {
    ...font('rw.regular', 14, TEXT_INPUT_PLACEHOLDER_DARK_COLOR, 20),
  },
  documentModal: {
    borderRadius: RW(20),
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  downloadModal: {
    alignItems: 'flex-end',
  },
  wrapper: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(40),
    flex: 1,
    borderRadius: RW(20),
    backgroundColor: WHITE,
  },
  downloadWrapper: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(30),
    flex: 1,
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
    backgroundColor: PRIMARY_BG_COLOR,
    alignItems: 'center',
  },
  modalTitle: {
    textAlign: 'center',
    ...font('rw.bold', 26, BLACK, 32),
    width: '100%',
  },
  modalSubTitle: {
    textAlign: 'center',
    ...font('rw.regular', 14, BLACK, 26),
    width: '100%',
  },
  documentIconText: {
    ...font('pp.bold', 16, SUMMARY_CONTENT, 28),
    marginTop: RH(10),
  },
  documentContent: {
    ...font('rw.bold', 16, SUMMARY_CONTENT, 26),
    textAlign: 'center',
  },
  input: {
    borderWidth: RW(1),
    borderColor: SUMMARY_BORDER,
    backgroundColor: TRANSPARENT,
    ...font('pp.regular', 16, WHITE, 24),

  },
  documentRow: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentIconPos: {
    alignItems: 'center',
  },
  documentIconsAlign: {
    alignItems: 'center',
    marginLeft: RW(40),
  },
  documentBtnBorder: {
    borderColor: TITLE_LIGHT_COLOR,
  },
  documentText: {
    color: TITLE_LIGHT_COLOR,
  },
  downloadText: {
    ...font('rw.bold', 20, WHITE, 28),
    textAlign: 'center',
    paddingVertical: RW(30),
  },
  downloadBtn: {
    borderColor: WHITE,
    borderWidth: RW(3),
  },
  emailBack: {
    ...font('rw.semibold', 18, WHITE, 22),
    textAlign: 'center',
    paddingLeft: RW(8),
  },
  emailTitle: {
    ...font('rw.bold', 20, WHITE, 28),
    textAlign: 'center',
  },
  successText: {
    ...font('rw.bold', 20, WHITE, 28),
    textAlign: 'center',
  },
  successRow: {
    justifyContent: 'center',
  },
  successProvider: {
    ...font('rw.regular', 14, WHITE, 24),
    textAlign: 'center',
  },
  successMail: {
    ...font('rw.semibold', 16, WHITE, 24),
    textAlign: 'center',
  },
  mailIconWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  isRTL: {
    transform: [{ rotate: '180deg' }],
  },
})
