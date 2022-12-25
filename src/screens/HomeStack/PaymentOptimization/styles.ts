import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, RH, font } from '@/theme/utils'
import {
  BLACK,
  WHITE,
  TITLE_LIGHT_COLOR,
  DASHBOARD_SHADOW_COLOR,
  STEP_INACTIVE_BG_COLOR,
} from '@/theme'

export default StyleSheet.create({
  scrollContainer: {
    height: '100%',
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
    height: RW(245),
    backgroundColor: WHITE,
    borderRadius: RW(15),
    marginTop: RH(-85),
    shadowColor: DASHBOARD_SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: RW(17),
    },
    shadowOpacity: 0.08,
    shadowRadius: RW(15),
    elevation: 5,
  },
  saveParent: {
    zIndex: 1,
    width: '100%',
    height: 0,
    alignItems: 'center',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    backgroundColor: WHITE,
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
    ...font('rw.regular', 14, TITLE_LIGHT_COLOR, 24),
  },
  saveDateTime: {
    ...font('pp.regular', 15, BLACK, 28),
    paddingTop: RW(5),
  },
  saveButton: {
    width: RW(52),
    height: RW(52),
    right: 0,
    transform: [{ rotate: I18nManager.isRTL ? '180deg' : '0deg' }],
  },
  header: {
    justifyContent: 'center',
    height: RW(280),
    borderColor: 'red',
    padding: PAGE_HORIZONTAL_PADDING,
  },
  headerGreetings: {
    ...font('rw.regular', 20, WHITE, 35),
  },
  headerGreetingsContent: {
    ...font('rw.semibold', 20, WHITE, 35),
  },
  contentContainer: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingTop: RW(190),
    paddingBottom: RW(60),
    backgroundColor: WHITE,
  },
  contentIconContainer: {
    justifyContent: 'space-between',
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
  contentDescriptionBottom: {
    marginBottom: RW(60),
  },
})
