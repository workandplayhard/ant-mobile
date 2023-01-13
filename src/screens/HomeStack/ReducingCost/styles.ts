import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RH, RW, font } from '@/theme/utils'
import {
  WHITE,
  ROW_DARK_BG_COLOR,
  GRAY,
  SUMMARY_CONTENT,
  TITLE_LIGHT_COLOR,
  PAGE_TITLE_COLOR,
  SUMMARY_BORDER,
  PRIMARY_BG_COLOR,
  SUMMARY_HEADER,
  REDUCING_CARD_BORDER,
  BUTTON_GRADIENT_START,
  TEXT_RED,
} from '@/theme'
import { SCREEN_WIDTH } from '@/constants'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: WHITE,
  },
  contentContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 1,
  },
  header: {
    ...font('rw.bold', 18, PAGE_TITLE_COLOR, 28),
    textAlign: 'center',
  },
  plan: {
    width: '100%',
    height: RW(50),
    backgroundColor: ROW_DARK_BG_COLOR,
    borderRadius: RW(10),
  },
  planText: {
    color: WHITE,
    paddingHorizontal: RW(25),
    paddingVertical: RW(15),
    justifyContent: 'center',
    ...font('rw.regular', 14, WHITE, 20),
  },
  planContent: {
    paddingHorizontal: RW(25),
  },
  planIconPos: {
    alignItems: 'center',
  },
  iconWrapper: {
    width: RW(60),
    height: RW(60),
    backgroundColor: GRAY,
    borderRadius: RW(15),
    alignItems: 'center',
    justifyContent: 'center',
  },
  planCost: {
    ...font('pp.bold', 16, SUMMARY_CONTENT, 28),
    width: RW(80),
    textAlign: 'center',
  },
  planTitle: {
    ...font('rw.regular', 14, TITLE_LIGHT_COLOR, 20),
  },
  planRow: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  line: {
    width: '100%',
    height: RH(1),
    backgroundColor: SUMMARY_BORDER,
  },
  averageContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(60),
    backgroundColor: PRIMARY_BG_COLOR,
    width: '100%',
    height: '100%',
    borderTopLeftRadius: RW(20),
    borderTopRightRadius: RW(20),
  },
  averageTitle: {
    ...font('rw.bold', 26, WHITE, 32),
  },
  averageRow: {
    width: '100%',
    height: '100%',
    overflow: 'visible',
  },
  customButton: {
    width: RW(113),
    backgroundColor: ROW_DARK_BG_COLOR,
    borderRadius: RW(30),
    justifyContent: 'center',
  },
  valueButton: {
    width: RW(166),
    borderRadius: RW(30),
    justifyContent: 'center',
    backgroundColor: ROW_DARK_BG_COLOR,
  },
  informationPos: {
    paddingLeft: RW(15),
    alignItems: 'center',
  },
  informationContentTitle: {
    ...font('rw.regular', 12, SUMMARY_HEADER, 20),
  },
  informationContentDescription: {
    ...font('pp.bold', 14, WHITE, 28),
  },
  informationRow: {
    justifyContent: 'space-between',
    backgroundColor: ROW_DARK_BG_COLOR,
    paddingLeft: RH(20),
    paddingVertical: RH(13),
    borderRadius: RW(12),
    height: RH(88),
  },
  informationTitle: {
    ...font('pp.bold', 30, WHITE, 36),
  },
  informationContent: {
    ...font('rw.regular', 14, SUMMARY_HEADER, 20),
  },
  yesPos: {
    paddingRight: RW(20),
  },
  cardBorder: {
    borderWidth: RW(3),
    borderColor: REDUCING_CARD_BORDER,
  },
  cardHeight: {
    height: RH(124),
  },
  congratulationContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(60),
    backgroundColor: PRIMARY_BG_COLOR,
    width: '100%',
    height: RH(379),
    borderRadius: RW(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  congratulationBackground: {
    position: 'absolute',
    top: 0,
  },
  congratulationTitle: {
    ...font('rw.bold', 26, WHITE, 32),
    textAlign: 'center',
  },
  congratulationContent: {
    ...font('rw.regular', 16, WHITE, 26),
    textAlign: 'center',
  },
  averagePlanText: {
    ...font('rw.regular', 16, WHITE, 24),
  },
  averagePlanSubTitle: {
    ...font('rw.bold', 18, WHITE, 28),
  },
  averagePlanCheckText: {
    ...font('rw.regular', 16, WHITE, 24),
  },
  insuranceWrapper: {
    borderWidth: RW(3),
    borderColor: BUTTON_GRADIENT_START,
    borderRadius: RW(35),
  },
  insuranceText: {
    ...font('rw.regular', 18, TEXT_RED, 30),
    letterSpacing: RW(1),
  },
  textStyle: {
    ...font('rw.semibold', 16, WHITE, 24),
  },
  questionIconPos: {
    ...(I18nManager.isRTL ? { left: RW(-4) } : { left: RW(-2) }),
  },
})
