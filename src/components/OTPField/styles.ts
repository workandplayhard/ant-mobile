import { StyleSheet } from 'react-native'

import { RW, font } from '@/theme/utils'
import { BLACK, SILVER } from '@/theme/colors'
import { DIM_H2, DIM_V5 } from '@/constants'

const styles = StyleSheet.create({
  cell: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    height: RW(60),
    justifyContent: 'center',
    width: RW(60),
  },
  emptyCell: {
    backgroundColor: 'red',
  },
  cellText: {
    ...font('rw.bold', 24, BLACK),
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlign: 'center',
    width: '100%',
  },
  text: {
    color: 'red',
  },
  container: {
    paddingBottom: DIM_V5,
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

// first i can't input number
// second don't know how to control the cell;s style