import { StyleSheet } from 'react-native'

import {
  RW,
  RH,
  font,
  DROPDOWN_TEXT_COLOR,
  DROPDOWN_BORDER_COLOR,
  DROPDOWN_ACTIVE_BORDER_COLOR,
  DROPDOWN_BUTTON_BG_COLOR,
} from '@/theme'

export default StyleSheet.create({
  buttonStyle: {
    width: '100%',
    height: RH(60),
    borderWidth: RW(1),
    borderColor: DROPDOWN_BORDER_COLOR,
    borderRadius: RW(15),
    backgroundColor: DROPDOWN_BUTTON_BG_COLOR,
    paddingHorizontal: RW(20),
  },
  buttonFocused: {
    borderColor: DROPDOWN_ACTIVE_BORDER_COLOR,
  },
  buttonText: {
    ...font('pp.regular', 16, DROPDOWN_TEXT_COLOR, 24),
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
