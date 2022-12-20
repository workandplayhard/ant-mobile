import { I18nManager, StyleSheet } from 'react-native'

import { BLACK, font, PAGE_HORIZONTAL_PADDING, RH, RW, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: '#222126',
    height: '100%',
  },
  title: {
    ...font('rw.bold', 26, WHITE, 32),
    width: '100%',
    paddingTop: RH(134),
    paddingBottom: RH(40),
  },
  textField: {
    ...font('rw.regular', 16, WHITE),
    width: '100%',
    height: 60,
    borderRadius: RW(16),
    paddingHorizontal: RW(20),
    paddingVertical: RH(5),
    marginBottom: RH(20),
    textAlign: 'left',
    backgroundColor: '#2C2B30',
  },
  rtlInput: {
    textAlign: 'right',
  },
  button: {
    width: '100%',
    height: RW(68),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RW(40),
  },
  buttonText: {
    ...font('rw.bold', 18, WHITE, 28),
    width: '100%',
    textAlign: 'center',
  },
  headerImage: {
    position: 'absolute',
    ...(I18nManager.isRTL ? { left: RW(-90) } : { right: RW(-90) }),
  },
})
