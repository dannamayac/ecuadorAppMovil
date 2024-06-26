import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const SalesStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 10,
    },
    salesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    newSaleButton: {
        backgroundColor: colors.bluePrimary,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
    },
    newSaleButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        paddingBottom: 5,
        borderBottomWidth: 1.5,
        borderColor: 'gray',
        paddingBottom: 8,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#325cf0',
        flex: 1,
        textAlign: 'center'
    },
    saleItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    saleItemText: {
        fontSize: 13,
        flex: 1,
        textAlign: 'center',
    },
    viewButton: {
        backgroundColor: '#325cf0',
        padding: 5,
        borderRadius: 10,
        marginRight: -10,
        marginLeft: 5,
    },
    viewButtonText: {
        color: '#fff',
        fontSize: 13,
    },
    status: status => ({
        backgroundColor: status === 'Aprobada' ? '#ccfcbc' : status === 'Rechazada' ? '#ff9c9c' : '#fffa9e'
    }),
    whitePickerContainer: {
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: colors.lightBlue,
        overflow: 'hidden',
        marginBottom: 5,
    },
    outlinedInput: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        marginLeft: 10,
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        width: '24%',
    },
    statusText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 13,
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    searchInput: {
        flex: 1,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
    },
    menuContent: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginTop: 90,
    },
    menuItemText1: {
        color: colors.bluePrimary,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: colors.bluePrimary,
        paddingBottom: 15,
    },
    menuItemText: {
        color: colors.bluePrimary,
        fontSize: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    customPickerContainer: {
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        backgroundColor: colors.input,
        borderColor: colors.input,
        overflow: 'hidden',
        marginBottom: 5,
        alignItems: 'center',
    },
    customPicker: {
        height: 20,
        width: 150,
        backgroundColor: colors.input,
        borderRadius: 10,
        borderColor: colors.lightBlue,
        borderWidth: 1,
        justifyContent: 'center',
    },
    pickerContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.input,
        marginHorizontal: 5,
        marginTop: 15,
        marginBottom: 15,
    },
    summaryContainer: {
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
    },
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    summaryLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    summaryValue: {
        fontSize: 16,
        color: '#666',
    },
    searchContainer: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
});

export default SalesStyles;