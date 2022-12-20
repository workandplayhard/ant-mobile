import { StyleSheet } from 'react-native'

import { PAGE_HORIZONTAL_PADDING, RH } from '@/theme/utils'
import { SCREEN_WIDTH } from '@/constants'

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFBD6E',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    paddingVertical: RH(68),
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
})
