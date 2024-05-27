import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const PaymentHistoryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backButton: {
        margin: 10,
    },
    backButtonText: {
        fontSize: 16,
        color: colors.blue,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    card: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    cardAmount: {
        fontSize: 16,
        color: '#333',
        marginVertical: 5,
    },
    cardMethod: {
        fontSize: 14,
        color: '#666',
    },
    cardMenu: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
});

export default PaymentHistoryStyles;