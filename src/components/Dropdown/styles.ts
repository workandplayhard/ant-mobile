import { StyleSheet } from 'react-native'

import { RW, RH, font } from '@/theme/utils'
import { DROPBOX_BUTTON_COLOR } from '@/theme'

export default StyleSheet.create({
  buttonStyle: {
    width: RW(330),
    height: RH(60),
    borderWidth: RW(1),
    borderRadius: RW(15),
    backgroundColor: DROPBOX_BUTTON_COLOR,
  },
  dropdownStyles: {
    borderRadius: RW(15),
    width: RW(330),
  },
  rowStyle: {
    height: RH(90),
    width: RW(290),
    marginLeft: RW(20),
  },
  renderText: {
    ...font('rw.medium', 16, 'black', 24),
  },
})
