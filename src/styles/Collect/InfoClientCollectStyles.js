import { StyleSheet } from 'react-native';

const InfoClientCollectStyles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 20
    },
    medalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10
    },
    medalImage: {
        width: 30,
        height: 25,
        marginRight: 10
    },
    medalText: {
        fontSize: 16,
        color: '#333',
        marginRight: 10
    },
    infoContainer:{
        backgroundColor: 'black',
        borderRadius: 50,
        width: 15,
        height: 15,
        alignItems: 'center',
    },
    infoIcon: {
        fontSize: 10,
        color: 'white'
    },
    addressContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 20
    },
});

export default InfoClientCollectStyles;