import { StyleSheet } from 'react-native';

const CollectStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
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
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    subtext: {
        fontSize: 14,
        color: '#666',
    },
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    statusButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        width: '49%',
    },
    statusText: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    summaryButton: {
        backgroundColor: '#FFCC00',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
    },
    summaryText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    statusIndicator: {
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
    },
    infoContainer: {
        marginTop: 10,
    },
    infoText: {
        fontSize: 16,
        color: '#333',
    },
    moreInfo: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cobroHour: {
        color: '#FFD700',
        fontWeight: 'bold',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuContainer: {
        backgroundColor: '#fff',
        width: 250,
        borderRadius: 8,
        padding: 10,
    },
    menuItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    headerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    searchInput: {
        flex: 1,
        padding: 5,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginRight: 10,
    },
    iconButton: {
        padding: 10,
    },
    filterMenu: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        marginLeft: 100,
        elevation: 5,
    },
    filterTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
    },
    filterOption: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
    },
    punishContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    punishTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    punishText: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    punishInput: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        textAlignVertical: 'top',
    },
    punishButton: {
        backgroundColor: '#1bb546',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
});

export default CollectStyles;