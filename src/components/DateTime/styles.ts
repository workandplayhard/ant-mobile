import { StyleSheet } from 'react-native'

import { font } from '@/theme/utils'
import { BLACK } from '@/theme'

export default StyleSheet.create({
  date: {
    ...font('pp.regular', 16, BLACK, 28),
  },
})
