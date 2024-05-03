import { StyleSheet, Dimensions } from 'react-native';
import { colors } from './GlobalStyles'

const SideBarStyles = StyleSheet.create({
  sidebar: {
    backgroundColor: colors.nonBlue,
    padding: 20,
    height: '100%',
    width: 280,
  },
  closeButton: {
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  optionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.bluePrimary,
    marginBottom: 20,
  },
  closeIcon:{
    color: colors.bluePrimary,
    fontSize:20,
  }
});

export default SideBarStyles;
