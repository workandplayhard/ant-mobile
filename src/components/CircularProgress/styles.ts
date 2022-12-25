import { StyleSheet } from 'react-native'
import { font, RW, TRANSPARENT, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressValue: {
    ...font('pp.regular', 20, TRANSPARENT, 30),
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
  },
  label: {
    ...font('pp.regular', 16, WHITE, 24),
    top: RW(11),
  },
})
