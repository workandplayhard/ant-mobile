import { I18nManager, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: I18nManager.isRTL ? 'row' : 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
