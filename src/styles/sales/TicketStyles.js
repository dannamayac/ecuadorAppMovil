import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const TicketStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        overflow: 'hidden',
        alignSelf: 'center',
        marginBottom: 20,
    },
    imageButtonOverlay: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    imageButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalButton: {
        padding: 10,
        marginVertical: 5,
    },
    modalButtonText: {
        fontSize: 16,
        color: colors.bluePrimary,
    },
});

export default TicketStyles;