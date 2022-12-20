import { StyleSheet, I18nManager } from 'react-native'

import { RW, font, GRAY, DARK_RED, LIGHT_RED, TEXT_RED, TRANSPARENT } from '@/theme'

export default StyleSheet.create({
  cell: {
    alignItems: 'center',
    backgroundColor: GRAY,
    borderRadius: RW(6),
    height: RW(38),
    justifyContent: 'center',
    borderWidth: RW(1),
    borderColor: TRANSPARENT,
    flex: 1,
  },
  focusedCell: {
    borderColor: DARK_RED,
    backgroundColor: LIGHT_RED,
  },
  middleCell: {
    marginHorizontal: RW(4),
  },
  cellText: {
    ...font('pp.semibold', 24, TEXT_RED),
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlign: 'center',
    width: '100%',
    backgroundColor: TRANSPARENT,
  },
  container: {
    width: '100%',
  },
  row: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
})
