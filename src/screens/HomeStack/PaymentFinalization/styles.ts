import { PAGE_HORIZONTAL_PADDING, PRIMARY_BG_COLOR, WHITE, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    padding: PAGE_HORIZONTAL_PADDING,
  },
  contentContainer: {
    alignItems: 'center',
  },
  pos: {
    alignItems: 'center',
  },
  percentage: {
    ...font('pp.bold', 26, WHITE, 32),
    textAlign: 'center',
  },
})
