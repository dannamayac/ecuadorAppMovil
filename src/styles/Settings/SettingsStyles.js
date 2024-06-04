import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const SettingsStyles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
    },
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
});

export default SettingsStyles;