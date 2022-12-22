import { StyleSheet } from 'react-native'

import { RW, RH, TAB_BG_COLOR } from '@/theme'

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: RH(-1),
    backgroundColor: TAB_BG_COLOR,
  },
  firstItem: {
    borderTopLeftRadius: RW(20),
  },
  lastItem: {
    borderTopRightRadius: RW(20),
  },
  border: {
    position: 'absolute',
    width: '100%',
    height: RH(8),
    bottom: 0,
    borderTopLeftRadius: RW(15),
    borderTopRightRadius: RW(15),
  },
})
