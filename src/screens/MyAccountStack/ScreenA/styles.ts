import { StyleSheet } from 'react-native'

import { font, RH, RW } from '@/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5FC',
    paddingHorizontal: RW(16),
    paddingVertical: RH(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...font('bold', 18, 'black', 28),
  },
})
