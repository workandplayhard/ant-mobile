import { StyleSheet } from 'react-native'

import { RW, WHITE, TEXT_LABEL_LIGHT_COLOR, PAGE_HORIZONTAL_PADDING } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  input: {
    borderWidth: RW(1),
    color: TEXT_LABEL_LIGHT_COLOR,
  },
  contentContainer: {
    alignContent: 'center',
  },
})
