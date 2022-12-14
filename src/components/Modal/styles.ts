import { StyleSheet } from 'react-native'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants'

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    margin: 0,
    height: SCREEN_HEIGHT + 100,
  },
  wrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
})

export default styles
