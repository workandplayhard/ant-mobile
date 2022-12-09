import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  input: {
    borderColor: 'gray',
    width: Dimensions.get('window').width - 60,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#2C2B30',
    fontSize: 16,
    color: '#5E626C',
    lineHeight: 24,
    fontWeight: '300',
    marginLeft: 14,
    marginRight: 14,
  },
})
