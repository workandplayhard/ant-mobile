import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RW, font } from '@/theme/utils'
import { WHITE, PRIMARY_BG_COLOR, TEXT_INPUT_BG_COLOR } from '@/theme'

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: PRIMARY_BG_COLOR,
    padding: PAGE_HORIZONTAL_PADDING,
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
    width: RW(350),
    height: RW(140),
    zIndex: 1,
  },
  plan: {
    width: '100%',
    height: RW(50),
    backgroundColor: TEXT_INPUT_BG_COLOR,
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
})
