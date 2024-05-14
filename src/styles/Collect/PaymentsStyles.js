import { StyleSheet } from 'react-native';

const PaymentStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 20
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    paymentMethods: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        alignItems: 'center'
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start'
    },
    section: {
        marginBottom: 20,
        flexDirection: 'row',
    },
    sectionText: {
        marginRight: 10,
    },
    inputContainer: {
        marginBottom: 20
    },
    paidLabel: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        color: 'green',
        marginLeft: 10
    },
    checkbox: {
        marginLeft: 10,
    },
    disabledSection: {
        opacity: 0.5
    },
    sectionContainer: {
        marginBottom: 20
    },
    postponeSection: {
        marginBottom: 20
    },
    postponeHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    inCobroText: {
        color: '#FFD700',
        fontWeight: 'bold',
        fontSize: 18,
    },
    bankTransferSection: {
        marginBottom: 20
    },
    imageButtonOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    imageContainer: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 20,
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    optionButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PaymentStyles;