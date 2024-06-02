import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const RecordHistoryStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        paddingHorizontal: 10,
    },
    subTitleContainer: {
        borderBottomWidth: 1.4,
        borderColor: 'gray',
        paddingBottom: 8,
    },
    card: {
        backgroundColor: '#f9f9f9',
        margin: 10,
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    clientID: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    infoContainer: {
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    valueText: {
        fontSize: 15,
        color: '#333',
        marginBottom: 5,
    },
    paymentMethod: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    paymentMethodText: {
        fontSize: 15,
        color: '#333',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    statusButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 6,
        width: '40%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default RecordHistoryStyles;