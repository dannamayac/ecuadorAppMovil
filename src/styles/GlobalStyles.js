import { StyleSheet } from 'react-native'

export const colors = {
  bluePrimary: '#1b2f8e',
  nonBlue: '#f4f4fb',
  ligthBlue: '#8f98c0',
  aquamarine: '#36DDE7',
  yellow: '#d8d021',
  green: '#1bb546',
  red: '#cc1515',
}

export const GlobalStyles = StyleSheet.create({
  blueButton: {
    width: '80%',
    backgroundColor: colors.bluePrimary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})
