import { StyleSheet } from 'react-native'

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants'

const styles = StyleSheet.create({
  modal: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  wrapper: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
})

export default styles
