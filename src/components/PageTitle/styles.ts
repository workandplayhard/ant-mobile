import { BLACK, TITLE_COLOR, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    ...font('rw.bold', 26, TITLE_COLOR, 32),
    width: '100%',
  },
  subTitle: {
    ...font('rw.regular', 14, BLACK, 26),
    width: '100%',
  },
})
