import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, font } from '@/theme/utils'
import { WHITE, SIGNUP_BG_COLOR, TEXT_INPUT_BG_COLOR, HOME_SUBTITLE_COLOR } from '@/theme'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: WHITE,
  },
  header: {
    height: '100%',
    backgroundColor: SIGNUP_BG_COLOR,
    padding: PAGE_HORIZONTAL_PADDING,
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 1,
  },
  homeTitle: {
    ...font('rw.bold', 26, WHITE, 32),
    textAlign: 'center',
    marginTop: RW(130),
  },
  homeSubTitle: {
    ...font('rw.regular', 14, HOME_SUBTITLE_COLOR, 26),
    textAlign: 'center',
    paddingBottom: RW(20),
  },
  plan: {
    width: '100%',
    height: RW(50),
    backgroundColor: TEXT_INPUT_BG_COLOR,
    borderRadius: RW(10),
    marginBottom: RW(20),
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
  buttonPosition: {
    marginBottom: RW(40),
  }
})
