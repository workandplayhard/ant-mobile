import { StyleSheet } from 'react-native'

import { RW, font, PAGE_HORIZONTAL_PADDING, RH, GRAY, BLACK } from '@/theme'

export default StyleSheet.create({
  container: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    alignItems: 'center',
    justifyContent: 'center',
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
    ...font('rw.bold', 20, BLACK, 32),
  },
  ending: {
    ...font('rw.regular', 16, BLACK, 24),
    textAlign: 'center',
  },
})
