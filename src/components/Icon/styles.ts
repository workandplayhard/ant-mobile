import { RW, WHITE } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    overflow: 'visible',
  },
  badge: {
    width: RW(16),
    height: RW(16),
    borderRadius: RW(20),
    position: 'absolute',
    right: -RW(4),
    top: -RW(4),
    zIndex: 1,
    borderWidth: 2,
    borderColor: WHITE,
  },
})
