import { StyleSheet } from 'react-native'

import { font, RH, RW } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222126',
    paddingHorizontal: RW(16),
    paddingVertical: RH(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font('rw.bold', 18, 'white', 28),
  },
})
