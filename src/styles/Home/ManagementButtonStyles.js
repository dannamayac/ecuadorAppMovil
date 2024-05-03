import { StyleSheet } from 'react-native'
import { colors } from './../GlobalStyles'

const ManagementButtonStyles = StyleSheet.create({
    managementbuttons: {
        flex: 1,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 8,
        borderBottomWidth: 1.6,
        borderColor: '#ccc',
        paddingBottom: 8,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2,
    },
        summaryContainer: {
        flex: 1,
    },
    summaryTitle: {
        fontSize: 13,
        color: '#888',
    },
    summaryValue: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    chartContainer: {
        width: 160,
        height: 50,
    },
    manageText: {
        fontWeight: 'bold',
        color: colors.bluePrimary,
        paddingTop: 11,
        textAlign: 'left',
    }
});

export default ManagementButtonStyles;