import { I18nManager, StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
