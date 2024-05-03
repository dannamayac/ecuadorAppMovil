import { StyleSheet } from 'react-native'

export const colors = {
  bluePrimary: '#1b2f8e',
  nonBlue: '#f4f4fb',
  lightBlue: '#8f98c0',
  aquamarine: '#36DDE7',
  yellow: '#d8d021',
  green: '#1bb546',
  red: '#cc1515',
  input: '#f9f9f9',
}

export const GlobalStyles = StyleSheet.create({
  blueButton: {
    width: '100%',
    backgroundColor: colors.bluePrimary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  lightBlueButton: {
    width: '100%',
    backgroundColor: colors.lightBlue,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  smallPickerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    width: '50%',
    borderColor: colors.nonBlue,
    overflow: 'hidden',
    marginBottom: 20,
  },
  smallPicker: {
    height: 45,
    width: '100%',
    backgroundColor: colors.nonBlue,
  },
  bigPickerContainer: {
    borderRadius: 10,
    borderWidth: 1,
    width: '100%',
    borderColor: colors.input,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bigPicker: {
    height: 50,
    width: '100%',
    backgroundColor: colors.input,
  },
  bigInput: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  smallInput: {
    backgroundColor: colors.input,
    borderWidth: 1,
    borderColor: colors.input,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    width: '50%',
  },
})
