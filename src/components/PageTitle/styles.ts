import { BLACK, HOME_SUBTITLE_COLOR, PAGE_TITLE_COLOR, WHITE, font } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  lightTitle: {
    ...font('rw.bold', 26, PAGE_TITLE_COLOR, 32),
    width: '100%',
  },
  lightSubTitle: {
    ...font('rw.regular', 14, BLACK, 26),
    width: '100%',
  },
  darkTitle: {
    ...font('rw.bold', 26, WHITE, 32),
    width: '100%',
  },
  darkSubTitle: {
    ...font('rw.regular', 14, HOME_SUBTITLE_COLOR, 26),
    width: '100%',
  },
})
