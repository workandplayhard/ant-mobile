import { StyleSheet } from 'react-native'

import { WHITE, font, RH, RW } from '@/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7D77CA',
    paddingHorizontal: RW(16),
    paddingVertical: RH(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    ...font('rw.bold', 18, 'white', 28),
  },
  button: {
    width: '100%',
    borderRadius: RW(5),
    backgroundColor: '#222126',
    paddingVertical: RH(10),
    marginTop: RH(15),
  },
  buttonText: {
    ...font('rw.bold', 18, WHITE, 28),
    width: '100%',
    textAlign: 'center',
  },
})
