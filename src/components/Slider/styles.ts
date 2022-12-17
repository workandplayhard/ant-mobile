import { StyleSheet } from 'react-native'

import { RH, RW, DOT_ACTIVE, DOT_INACTIVE } from '@/theme'

const styles = StyleSheet.create({
  active: {
    backgroundColor: DOT_ACTIVE,
  },
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  paginator: {
    backgroundColor: DOT_INACTIVE,
    borderRadius: RW(4),
    height: RW(4),
    marginVertical: 0,
    width: RW(4),
  },
  paginatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: RH(20),
  },
  slider: {
    flex: 1,
  },
})

export default styles
