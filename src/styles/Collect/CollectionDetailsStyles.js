import { StyleSheet } from 'react-native';

const CollectionDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        marginBottom: 20,
    },
    backButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userHandle: {
        fontSize: 14,
        color: '#666',
    },
    formContainer: {
        marginBottom: 20,
    },
    invoiceImage: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
});

export default CollectionDetailsStyles;