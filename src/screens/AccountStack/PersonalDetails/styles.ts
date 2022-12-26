import { StyleSheet } from 'react-native'

import { RW, WHITE, TEXT_LABEL_LIGHT_COLOR, PAGE_HORIZONTAL_PADDING } from '@/theme'

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  input: {
    borderWidth: RW(1),
    color: TEXT_LABEL_LIGHT_COLOR,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  contentContainer: {
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,

  },
})
