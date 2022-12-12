import { StyleSheet } from 'react-native'

import { font, RH } from '@/theme/utils'

export default StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingVertical: RH(12),
  },
  textStyle: {
    ...font('rw.regular', 18, 'white', 30),
    fontStyle: 'normal',
  },
  buttonStyle: {
    width: '100%',
  },
})
