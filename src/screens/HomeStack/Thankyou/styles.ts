import { StyleSheet } from 'react-native'

import { RW, font, PAGE_HORIZONTAL_PADDING, RH, GRAY, BLACK, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  background: {
    backgroundColor: WHITE,
  },
  content: {
    width: '100%',
    height: RH(463),
    backgroundColor: GRAY,
    borderRadius: RW(20),
    alignItems: 'center',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  greetings: {
    ...font('rw.bold', 26, BLACK, 32),
  },
  ending: {
    ...font('rw.regular', 16, BLACK, 24),
    textAlign: 'center',
  },
  closePos: {
    justifyContent: 'flex-end',
    position: 'absolute',
    right: RW(30),
    top: RH(66),
  },
})
