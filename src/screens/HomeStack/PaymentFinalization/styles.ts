import { PAGE_HORIZONTAL_PADDING, PRIMARY_BG_COLOR, WHITE, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    padding: PAGE_HORIZONTAL_PADDING,
  },
  pos: {
    alignItems: 'center',
  },
  timer: {
    ...font('pp.bold', 26, WHITE, 32),
  },
})
