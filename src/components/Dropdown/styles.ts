import { StyleSheet } from 'react-native'

import {
  RW,
  RH,
  font,
  TEXT_INPUT_FONT_COLOR,
  TEXT_INPUT_BORDER_ACTIVE_COLOR,
  DROPBOX_BUTTON_COLOR,
} from '@/theme'

export default StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: RH(60),
    borderWidth: RW(1),
    borderColor: TEXT_INPUT_BORDER_ACTIVE_COLOR,
    borderRadius: RW(15),
    backgroundColor: DROPBOX_BUTTON_COLOR,
    paddingHorizontal: RW(20),
  },
  buttonText: {
    ...font('pp.regular', 16, TEXT_INPUT_FONT_COLOR, 24),
    textAlign: 'left',
    flex: 1,
    marginLeft: 0,
  },
  dropdownView: {
    borderWidth: 1,
    borderRadius: RW(15),
    paddingHorizontal: RW(20),
  },
  row: {
    width: '100%',
  },
})
