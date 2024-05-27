import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const PhotoAuthenticationStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 20,
    },
    photoSection: {
        marginBottom: 20,
    },
    photoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    photoPlaceholder: {
        width: '100%',
        height: 200,
        backgroundColor: '#e6e6e6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10,
        position: 'relative',
    },
    photo: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    photoIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent',
    },
    button: {
        backgroundColor: '#6C757D',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: colors.aquamarine,
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        marginTop: 20,
        marginBottom:20,
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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    modalButton: {
        backgroundColor: '#4CAF50',
        borderRadius: 10,
        padding: 10,
        elevation: 2,
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
});

export default PhotoAuthenticationStyles;