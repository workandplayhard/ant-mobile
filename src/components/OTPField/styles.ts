import { StyleSheet } from 'react-native'

import { RW, font, RH } from '@/theme/utils'
import { OTP_BG_COLOR, OTP_COLOR } from '@/theme'

const styles = StyleSheet.create({
  cell: {
    backgroundColor: OTP_BG_COLOR,
    width: RW(38),
    height: RH(50),
    textAlign: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: OTP_COLOR,
    borderRadius: 6,
  },
  emptyCell: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 6,
    width: RW(38),
    height: RH(50),
    justifyContent: 'center',
  },
  cellText: {
    ...font('pp.regular', 24, OTP_COLOR, 26),
    textAlign: 'center',
    width: '100%',
  },
  text: {
    color: 'red',
  },
  container: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  rtlRow: {
    flexDirection: 'row-reverse',
  },
})

export default styles
