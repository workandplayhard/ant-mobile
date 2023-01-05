import { StyleSheet } from 'react-native'

import { font, PAGE_HORIZONTAL_PADDING, RH } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222126',
    paddingVertical: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  title: {
    ...font('rw.bold', 18, 'white', 28),
  },
})
