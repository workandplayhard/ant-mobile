import { StyleSheet } from 'react-native'
import { font, TRANSPARENT } from '@/theme'

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
})
