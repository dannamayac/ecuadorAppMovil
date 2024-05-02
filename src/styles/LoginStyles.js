import { StyleSheet } from 'react-native'
import { colors } from './GlobalStyles'

const LoginStyles = StyleSheet.create({

  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.nonBlue,
    },
    logoContainer: {
      marginBottom: 20,
      alignItems: 'center',
    },
    logo: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
    },
    title: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.bluePrimary,
      marginBottom: 20,
    },
    subTitle: {
      alignSelf: 'flex-start',
      marginLeft: 38,
      fontSize: 15,
      color: colors.bluePrimary,
      marginBottom: 10,
    },
    input: {
      width: '80%',
      padding: 15,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
    },
    registerText: {
      marginTop: 10,
      color: '#8f98c0',
    },

  //Codigo de authentication
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor:'white',
    borderColor: 'white',
    textAlign: 'center',
    fontSize: 24,
    marginRight:10,
  },
});

export default LoginStyles;
