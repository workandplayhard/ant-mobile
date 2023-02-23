import { StyleSheet } from 'react-native'

import {
  RW,
  WHITE,
  TEXT_LABEL_LIGHT_COLOR,
  PAGE_HORIZONTAL_PADDING,
  font,
  TEXT_LABEL_DARK_COLOR,
  RH,
  PAGE_TITLE_COLOR,
} from '@/theme'
import { IS_IOS } from '@/constants'

export default StyleSheet.create({
  container: {
    backgroundColor: WHITE,
  },
  input: {
    borderWidth: RW(1),
    color: TEXT_LABEL_LIGHT_COLOR,
    height: RH(50),
    borderRadius: RW(12),
    paddingVertical: 0,
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: RW(25),
  },
  headerStyle: {
    position: 'absolute',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
    top: RH(85),
  },
  contentContainer: {
    alignContent: 'center',
    width: '100%',
    paddingHorizontal: PAGE_HORIZONTAL_PADDING,
  },
  label: {
    ...font('pp.regular', 14, TEXT_LABEL_LIGHT_COLOR, 20),
  },
  labelDark: {
    color: TEXT_LABEL_DARK_COLOR,
  },
  dropdownPos: {
    position: 'absolute',
    marginTop: IS_IOS ? RH(5) : RH(-25),
  },
  subSourcePeriodText: {
    ...font('rw.semibold', 16, PAGE_TITLE_COLOR, 24),
  },
})
