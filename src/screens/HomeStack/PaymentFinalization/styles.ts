import { PAGE_HORIZONTAL_PADDING, PRIMARY_BG_COLOR, RH, WHITE, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_BG_COLOR,
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    flexDirection: 'column',
    alignITems: 'center',
    justifycontent: 'center',
  },
  contentContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: RH(300),
  },
  pos: {
    alignItems: 'center',
  },
  percentage: {
    ...font('pp.bold', 26, WHITE, 32),
    textAlign: 'center',
    padding: RH(3),
  },
  percentageSymbol: {
    ...font('pp.bold', 14, WHITE, 26),
  },
})
