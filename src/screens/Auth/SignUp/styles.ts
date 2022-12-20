import { StyleSheet } from 'react-native'

import { font, RH, RW, WHITE } from '@/theme'

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    ...font('rw.bold', 18, WHITE, 28),
    textAlign: 'left',
    width: '100%',
    marginBottom: RH(20),
  },
  textField: {
    ...font('rw.regular', 16, WHITE),
    width: '100%',
    borderWidth: RH(1),
    borderColor: WHITE,
    borderRadius: RW(3),
    paddingHorizontal: RW(5),
    paddingVertical: RH(5),
    marginBottom: RH(5),
    textAlign: 'left',
  },
  rtlInput: {
    textAlign: 'right',
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
