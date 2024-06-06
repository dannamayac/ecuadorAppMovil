import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const SettingsStyles = StyleSheet.create({
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 10,
      },
      radioButtonLabel: {
        fontSize: 16,
        color: '#000',
      },
      headerContainer: {
        marginTop: 20,
      },
      settingsHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
      },
      redText: {
        color: 'red',
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalIcon: {
        fontSize: 30,
        color: 'red',
        marginBottom: 20,
      },
      modalText: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
      },
      redButton: {
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 15,
        width: '100%',
        alignItems: 'center',
      },
    });

export default SettingsStyles;