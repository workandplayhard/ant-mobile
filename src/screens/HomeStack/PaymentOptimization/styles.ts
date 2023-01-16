import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, RH, font } from '@/theme/utils'
import {
  BLACK,
  WHITE,
  TITLE_LIGHT_COLOR,
  DASHBOARD_SHADOW_COLOR,
  STEP_INACTIVE_BG_COLOR,
  TRANSPARENT,
} from '@/theme'
import { SCREEN_WIDTH } from '@/constants'

export default StyleSheet.create({
  scrollContainer: {
    backgroundColor: 'transparent',
  },
  contentContainerStyle: {
    alignContent: 'center',
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
  save: {
    width: '100%',
    backgroundColor: WHITE,
    borderRadius: RW(15),
    shadowColor: DASHBOARD_SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: RW(17),
    },
    shadowOpacity: 0.08,
    shadowRadius: RW(15),
    elevation: 5,
    zIndex: 1,
  },
  space: {
    width: SCREEN_WIDTH,
    height: RH(150),
    backgroundColor: WHITE,
    position: 'absolute',
    bottom: 0,
  },
  saveParent: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    backgroundColor: TRANSPARENT,
    zIndex: 1,
  },
  saveTitle: {
    ...font('rw.regular', 18, BLACK, 28),
    textAlign: 'center',
    marginTop: RH(40),
  },
  savePrice: {
    ...font('pp.bold', 36, BLACK, 35),
    textAlign: 'center',
    paddingTop: RH(20),
  },
  saveDateParent: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: RH(30),
    justifyContent: 'space-between',
    marginBottom: RH(40),
  },
  saveDateDescription: {
    ...font('rw.regular', 14, TITLE_LIGHT_COLOR, 24),
  },
  saveDateTime: {
    ...font('pp.regular', 15, BLACK, 28),
    paddingTop: RH(5),
  },
  saveButton: {
    width: RW(52),
    height: RW(52),
    right: 0,
    transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
  },
  header: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'column',
    paddingBottom: RH(30),
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  headerGreetings: {
    ...font('rw.regular', 20, WHITE, 35),
  },
  headerGreetingsContent: {
    ...font('rw.semibold', 20, WHITE, 35),
  },
  contentContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingBottom: RH(10),
    paddingTop: RH(40),
    backgroundColor: WHITE,
    alignItems: 'center',
  },
  contentIconContainer: {
    justifyContent: 'space-between',
  },
  contentDescriptionContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RH(30),
    width: '100%',
    padding: RW(5),
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
    width: SCREEN_WIDTH - 166,
    ...font('rw.semibold', 14, BLACK, 24),
  },
  contentDescriptionBottom: {
    marginBottom: RW(80),
  },
  buttonContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    backgroundColor: WHITE,
    paddingTop: RH(40),
    paddingBottom: RH(20),
  },
})
