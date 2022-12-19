import { StyleSheet } from 'react-native'

import { RW, RH } from '@/theme/utils'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    top: RH(5),
    width: '100%',
  },
  border: {
    position: 'absolute',
    width: '100%',
    height: RH(8),
    bottom: RW(-6),
    borderTopLeftRadius: RW(15),
    borderTopRightRadius: RW(15),
  },
})
