import { I18nManager, StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RH, RW, font } from '@/theme/utils'
import { WHITE, PRIMARY_BG_COLOR, ROW_DARK_BG_COLOR, PRICING_CIRCLE_ICON_BG_COLOR } from '@/theme'

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
    backgroundColor: ROW_DARK_BG_COLOR,
    borderRadius: RW(10),
  },
  planText: {
    color: WHITE,
    paddingHorizontal: RW(20),
    paddingVertical: RW(15),
    justifyContent: 'center',
    ...font('rw.regular', 14, WHITE, 20),
  },
  planContent: {
    paddingHorizontal: RW(25),
  },
  iconContainer: {
    width: RW(22),
    height: RW(22),
    borderRadius: RW(11),
    backgroundColor: PRICING_CIRCLE_ICON_BG_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: RW(9),
    height: RH(7.5),
  },
})
