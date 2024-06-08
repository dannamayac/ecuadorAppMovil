import { StyleSheet } from 'react-native';

const HeaderStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        height: 60,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 10,
    },
    menuButton: {
        padding: 10,
    },
    headerUser: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    notificationButton: {
        position: 'relative',
        marginRight: 10,
    },
    notificationDropdown: {
        position: 'absolute',
        top: 30,
        right: 0,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 180,
        zIndex: 20,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    notificationText: {
        marginLeft: 5,
    },
    userPhoto: {
        marginRight: 10,
    },
    userPhotoImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    userInfo: {
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 13,
    },
    userUsername: {
        fontSize: 10,
        color: 'rgb(87, 87, 87)',
    },
    dropdownMenu: {
        position: 'absolute',
        top: 40,
        right: 0,
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        zIndex: 20,
    },
});

export default HeaderStyles;