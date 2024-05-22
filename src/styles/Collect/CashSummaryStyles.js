import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const CashSummaryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    statusLabel: {
        alignSelf: 'flex-end',
        color: 'white',
        backgroundColor: colors.green,
        marginRight: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },
    statusText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    infoItem: {
        alignItems: 'center',
    },
    infoText: {
        fontSize: 14,
        color: '#888',
    },
    infoValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    section: {
        marginTop: 20,
        padding: 10,
        borderRadius: 10,
    },
    visitedSection: {
        backgroundColor: '#e6e6fa',  // Light lavender
    },
    paidSection: {
        backgroundColor: '#e6fae6',  // Light green
    },
    notPaidSection: {
        backgroundColor: '#fae6e6',  // Light red
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    visitedTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.bluePrimary,
    },
    sectionValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.bluePrimary,
    },
    paymentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.green,
    },
    paymentValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.green,
    },
    noPaymentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.red,
    },
    noPaymentValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.red,
    },
    detailText: {
        fontSize: 14,
        color: '#888',
    },
    detailValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    clientName: {
        fontSize: 16,
        color: '#333',
        paddingVertical: 5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    box: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
        paddingBottom: 10,
    },
    fullWidthBox: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
        paddingBottom: 10,
        marginTop: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    boxTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
        marginLeft: 15,
    },
    boxSubTitle: {
        fontSize: 11,
        fontWeight: 'regular',
        color: 'gray',
        marginLeft: 15,
        marginTop: 5,
        marginBottom: -3,
    },
    boxContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 15,
    },
    boxValue: {
        fontSize: 12,
        fontWeight: 'regular',
        color: '#000',
    },
    icon: {
        marginLeft: 'auto',
    },
    alertIcon: {
        marginLeft: 10,
    },
    collectContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    collectColumn: {
        flex: 1,
        alignItems: 'flex-start',
    },
    collectBoxTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    collectLabel: {
        fontSize: 12,
        color: '#888',
    },
    collectValue: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 5,
    },
    footerPercentage: {
        fontSize: 13,
        fontWeight: 'bold',
        color: colors.green,
        marginTop: 5,
    },
    closeButton: {
        marginTop: 20,
        padding: 15,
        backgroundColor: colors.aquamarine,
        borderRadius: 10,
        alignItems: 'center',
        
        marginBottom: 20,
    },
    closeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default CashSummaryStyles;