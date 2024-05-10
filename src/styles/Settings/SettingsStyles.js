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
    }
});

export default SettingsStyles;