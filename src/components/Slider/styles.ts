import { StyleSheet } from 'react-native'

import { WHITE } from '@/theme/colors'
import { RH, RW } from '@/theme'

const styles = StyleSheet.create({
  active: {
    opacity: 1,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  paginator: {
    backgroundColor: WHITE,
    borderRadius: RW(4),
    height: RW(8),
    marginHorizontal: RH(9),
    marginVertical: 0,
    opacity: 0.4,
    width: RW(8),
  },
  paginatorContainer: {
    bottom: RH(50),
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
  slider: {
    flex: 1,
  },
})

export default styles
