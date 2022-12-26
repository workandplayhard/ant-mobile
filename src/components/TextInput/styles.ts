import { I18nManager, StyleSheet } from 'react-native'

import { font, RW, RH } from '@/theme/utils'
import {
  DARK_RED,
  TEXT_INPUT_DARK_COLOR,
  TEXT_LABEL_DARK_COLOR,
  TEXT_INPUT_LIGHT_COLOR,
  TEXT_LABEL_LIGHT_COLOR,
  TEXT_INPUT_DARK_BG_COLOR,
  TEXT_INPUT_LIGHT_BG_COLOR,
  TEXT_INPUT_DARK_BORDER_ACTIVE_COLOR,
  TEXT_INPUT_DARK_BORDER_INACTIVE_COLOR,
} from '@/theme'

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  input: {
    width: '100%',
    borderRadius: RW(15),
    paddingVertical: RH(18),
    paddingHorizontal: RW(20),
    backgroundColor: TEXT_INPUT_LIGHT_BG_COLOR,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
    ...font('pp.thin', 16, TEXT_INPUT_LIGHT_COLOR, 24),
  },
  inputDark: {
    backgroundColor: TEXT_INPUT_DARK_BG_COLOR,
    color: TEXT_INPUT_DARK_COLOR,
  },
  label: {
    ...font('pp.regular', 14, TEXT_LABEL_LIGHT_COLOR, 20),
  },
  labelDark: {
    color: TEXT_LABEL_DARK_COLOR,
  },
  error: {
    ...font('pp.regular', 12, DARK_RED, 18),
    textAlign: 'right',
  },
  focus: {
    borderColor: TEXT_INPUT_DARK_BORDER_ACTIVE_COLOR,
  },
  blur: {
    borderColor: TEXT_INPUT_DARK_BORDER_INACTIVE_COLOR,
  },
})
