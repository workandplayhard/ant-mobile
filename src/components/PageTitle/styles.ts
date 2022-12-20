import { BLACK, TITLE_COLOR, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    ...font('rw.bold', 26, TITLE_COLOR, 32),
  },
  subTitle: {
    ...font('rw.thin', 14, BLACK, 26),
  },
})
