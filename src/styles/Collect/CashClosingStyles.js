import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const CashClosingStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    summary: {
        paddingHorizontal: 10,
        marginVertical: 5,
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 10,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    summaryLabel: {
        fontSize: 14,
        color: '#888',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    statusLabel: {
        alignSelf: 'flex-end',
        color: 'black',
        backgroundColor: colors.lightRed,
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 14,
        color: '#888',
    },
    sectionContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        marginTop: -5,
    },
    section1: {
        width: '50%',
        paddingHorizontal: 8,
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
        paddingTop: 8,
    },
    section2: {
        width: '50%',
        borderStartWidth: 1.4,
        borderStartColor: '#ccc',
        paddingHorizontal: 8,
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
        paddingTop: 8,
    },
    section3: {
        width: '50%',
        paddingHorizontal: 8,
        borderBottomWidth: 1.4,
        borderColor: '#ccc',
        paddingBottom: 8,
        paddingTop: 8,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    sectionInfoText:{
        fontSize: 13,
        color: '#666',
    },
    sectionValue: {
        fontSize: 14,
        fontWeight: 'regular',
        color: '#000',
    },
    recaudoSection: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    recaudoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    recaudoValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    clientsSection: {
        marginVertical: 10,
    },
    clientsTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.green,
    },
    clientsValue: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    clientsDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    detailText: {
        fontSize: 14,
        color: '#888',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    box: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    boxTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    boxValue: {
        fontSize: 14,
        color: '#000',
    },
    valueInput: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
        marginVertical: 10,
    },
    valueLabel: {
        fontSize: 14,
        color: '#888',
    },
    valueText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    closeButton: {
        backgroundColor: colors.aquamarine,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginVertical: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
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
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        marginHorizontal: 10,
    },
    buttonNo: {
        backgroundColor: '#f44336',
    },
    buttonYes: {
        backgroundColor: '#4CAF50',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    shareModalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    shareModalView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        width: '100%',
        elevation: 5,
    },
    shareOption: {
        alignItems: 'center',
    },
    shareOptionText: {
        marginTop: 5,
        fontSize: 12,
    },
});

export default CashClosingStyles;