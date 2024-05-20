import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const SalesStyles = StyleSheet.create({
container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
    },
    salesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    },
    newSaleButton: {
    backgroundColor: colors.bluePrimary,
    borderRadius: 10,
    padding: 10,
    width: '50%',
    },
    newSaleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    },
    tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 5
    },
    headerText: {
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center'
    },
    saleItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
    },
    saleItemText: {
    fontSize: 16,
    flex: 1,
    textAlign: 'center'
    },
    viewButton: {
    backgroundColor: colors.bluePrimary,
    padding: 10,
    borderRadius: 10,
    },
    viewButtonText: {
    color: '#fff'
    },
    status: status => ({
    color: status === 'Aprobada' ? 'green' : status === 'Rechazada' ? 'red' : 'orange'
    }),
    whitePickerContainer: {
        borderRadius: 10,
        borderWidth: 1,
        width: '100%',
        borderColor: 'black',
        overflow: 'hidden',
        marginBottom: 5,
    },
    outlinedInput: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFD700',
        borderRadius: 10,
        width: '31%',
    },
    statusText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10,
    },
});

export default SalesStyles;