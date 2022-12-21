import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, font } from '@/theme/utils'
import {
  BLACK,
  WHITE,
  SIGNUP_BG_COLOR,
  TEXT_INPUT_FONT_COLOR,
  DASHBOARD_SHADOW_COLOR,
  STEP_INACTIVE_BG_COLOR,
} from '@/theme'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: WHITE,
  },
  contentContainerStyle: {
    alignContent: 'center',
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 1,
  },
  iconWrapper: {
    alignItems: 'center',
    width: RW(60),
    height: RW(60),
    backgroundColor: STEP_INACTIVE_BG_COLOR,
    borderRadius: RW(15),
    justifyContent: 'center',
    marginRight: RW(15),
  },
  box: {
    backgroundColor: 'white',
    borderRadius: RW(15),
    shadowColor: DASHBOARD_SHADOW_COLOR,
    shadowOffset: {
      width: RW(17),
      height: RW(17),
    },
    shadowOpacity: 0.08,
    shadowRadius: RW(15),
    elevation: 5,
  },
  save: {
    width: '100%',
    height: RW(245),
    backgroundColor: WHITE,
    borderRadius: RW(15),
    shadowColor: DASHBOARD_SHADOW_COLOR,
    shadowOffset: {
      width: RW(17),
      height: RW(17),
    },
    shadowOpacity: 0.08,
    shadowRadius: RW(15),
    elevation: 5,
  },
  saveParent: {
    width: '100%',
    marginTop: RW(250),
    position: 'absolute',
    zIndex: 1,
    alignItems: 'center',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  saveTitle: {
    ...font('rw.regular', 18, BLACK, 28),
    textAlign: 'center',
    marginTop: RW(40),
  },
  savePrice: {
    ...font('pp.bold', 36, BLACK, 35),
    textAlign: 'center',
    paddingTop: RW(20),
  },
  saveDateParent: {
    padding: PAGE_HORIZONTAL_PADDING,
    justifyContent: 'space-between',
  },
  saveDateDescription: {
    ...font('rw.regular', 14, TEXT_INPUT_FONT_COLOR, 24),
  },
  saveDateTime: {
    ...font('pp.regular', 15, BLACK, 28),
    paddingTop: RW(5),
  },
  saveButton: {
    width: RW(52),
    height: RW(52),
    right: 0,
  },
  header: {
    justifyContent: 'center',
    height: RW(347),
    backgroundColor: SIGNUP_BG_COLOR,
    padding: PAGE_HORIZONTAL_PADDING,
  },
  headerGreetings: {
    ...font('rw.regular', 20, WHITE, 35),
  },
  headerGreetingsContent: {
    ...font('rw.semibold', 20, WHITE, 35),
  },
  contentContainer: {
    padding: PAGE_HORIZONTAL_PADDING,
    paddingBottom: RW(60),
  },
  contentIconContainer: {
    marginTop: RW(184),
  },
  contentDescriptionContainer: {
    height: RW(76),
    justifyContent: 'space-between',
    marginTop: RW(30),
    width: '100%',
    padding: RW(5),
    marginVertical: RW(60),
  },
  contentDescriptionImg: {
    backgroundColor: STEP_INACTIVE_BG_COLOR,
    width: RW(66),
    height: RW(66),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RW(15),
  },
  contentDescriptionContext: {
    width: RW(250),
    height: RW(86),
    padding: RW(20),
    ...font('rw.semibold', 14, BLACK, 24),
  },
})
