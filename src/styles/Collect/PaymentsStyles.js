import { StyleSheet } from 'react-native';

const PaymentStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionContainer: {
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    headerWithLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    noPaymentLabel: {
        color: 'white',
        backgroundColor: '#cc1515',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    sectionText: {
        fontSize: 16,
        color: '#666',
    },
    inputContainer: {
        marginBottom: 20,
    },
});

export default PaymentStyles;
