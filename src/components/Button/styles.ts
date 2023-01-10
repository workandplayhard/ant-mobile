import { I18nManager, StyleSheet } from 'react-native'

import { WHITE, font, RH, RW } from '@/theme'

export default StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  background: {
    width: '100%',
    borderWidth: RW(1),
    borderColor: 'transparent',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    overflow: 'hidden',
    borderRadius: RW(30),
    width: '100%',
  },
  xs: {
    borderRadius: RW(32),
    paddingVertical: RH(10),
  },
  sm: {
    borderRadius: RW(30),
    paddingVertical: RH(12),
  },
  md: {
    borderRadius: RW(30),
    paddingVertical: RH(14),
  },
  lg: {
    borderRadius: RW(32),
    paddingVertical: RH(18),
  },
  custom: {
    borderRadius: RW(30),
    paddingVertical: RH(16),
  },
  xsText: {
    ...font('rw.semibold', 14, WHITE, 20),
  },
  smText: {
    ...font('rw.semibold', 16, WHITE, 24),
  },
  mdText: {
    ...font('rw.semibold', 12, WHITE, 14),
  },
  lgText: {
    ...font('rw.semibold', 18, WHITE, 30),
  },
})
