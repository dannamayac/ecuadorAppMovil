import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const EditPaymentStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    checkboxLabel: {
        marginRight: 20,
        fontSize: 16,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    clientInfo: {
        fontSize: 16,
        color: '#666',
    },
    clientName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    status: {
        fontSize: 16,
        color: colors.green,
    },
    detailsContainer: {
        marginVertical: 10,
    },
    detailsText: {
        fontSize: 16,
        color: '#666',
    },
    input: {
        backgroundColor: colors.input,
        borderWidth: 1,
        borderColor: colors.input,
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        fontSize: 16,
        width: '100%',
    },
    commentInput: {
        backgroundColor: colors.input,
        borderWidth: 1,
        borderColor: colors.input,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        width: '100%',
        minHeight: 100,
    },
});

export default EditPaymentStyles;