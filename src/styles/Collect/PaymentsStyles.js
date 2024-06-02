import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const PaymentStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2:{
        paddingHorizontal: 10,
    },
    paymentMethods:{
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    radioContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    header:{
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 10,
        paddingTop: 10,
    },
    headerText:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    sectionContainer: {
        marginBottom: 20,
        borderColor: '#ccc',
        paddingBottom: 10,
    },
    section: {
        marginBottom: 20,
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    unitTitleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    headerWithLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    paidLabel:{
        backgroundColor: colors.green,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    paidLabelYellow:{
        backgroundColor: colors.yellow,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        width: '30%',
        marginTop: 5,
        marginBottom:5 ,
    },
    paidLabelText:{
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
    statusText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    noPaymentLabel: {
        color: 'white',
        backgroundColor: colors.red,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    sectionText: {
        fontSize: 16,
        color: '#666',
    },
    manualPaymentText:{
        flexWrap: 'wrap',
    },
    inputContainer: {
        marginBottom: 20,
    },
    radio: {
        color: 'black',
    },
    checkbox: {
        color: colors.green,
    },
    postponeSection: {
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%'
    },
    overlayVisible: {
        pointerEvents: 'none',
    },
    disabledSection: {
        opacity: 0.3,
    },
});

export default PaymentStyles;