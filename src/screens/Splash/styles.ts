import { StyleSheet } from 'react-native'

import { RH, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#222126',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'relative',
    width: RH(120),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: RH(25),
    height: RH(25),
    borderRadius: RH(100),
    backgroundColor: '#F15223',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: RH(7),
    height: RH(7),
    borderRadius: RH(100),
    backgroundColor: WHITE,
  },
})
