// CollectionDetailsStyles.js
import { StyleSheet } from 'react-native';

const CollectionDetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    formContainer: {
        marginVertical: 20,
    },
    invoiceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        position: 'relative',
    },
    invoiceImage: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
    },
    imageButtonOverlay: {
        position: 'absolute',
        bottom: 10,
        right: '45%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: 10,
    },
});

export default CollectionDetailsStyles;