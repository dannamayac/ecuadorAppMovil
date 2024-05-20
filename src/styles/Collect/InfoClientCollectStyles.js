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
    levelIcon:{
        width: 45,
        height: 40,
        marginRight: 5,
        marginLeft: 5,
    },
    levelHistoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 18,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        marginTop: 20,
    },
    levelHistoryDetails: {
        flex: 1,
    },
    levelHistoryBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        width: 150,
        height: 50,
    },
    levelHistoryDate: {
        fontSize: 12.5,
        color: 'black',
        marginRight: 3,
    },
    levelHistoryText: {
        fontSize: 16,
        color: '#333',
    },
});

export default InfoClientCollectStyles;