import { RW } from '@/theme'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    position: 'relative',
    overflow: 'visible',
  },
  badge: {
    width: RW(12),
    height: RW(12),
    borderRadius: RW(20),
    position: 'absolute',
    right: -RW(6),
    top: -RW(6),
    zIndex: 1,
  },
})
