import { StyleSheet } from 'react-native';
import { colors } from '../GlobalStyles';

const CashInBoxStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container2: {
        paddingHorizontal: 10,
    },
    unitName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        color: colors.bluePrimary,
    },
    cashInBoxTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    cashInBoxAmount: {
        fontSize: 17,
        marginBottom: 16,
        color: '#000',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    reviewButton: {
        backgroundColor: colors.lightGreen,
        padding: 12,
        borderRadius: 10,
    },
    reviewButtonText: {
        color: colors.green,
        fontWeight: 'bold',
        fontSize: 16,
    },
    moveMoneyButton: {
        backgroundColor: colors.bluePrimary,
        padding: 12,
        borderRadius: 10,
    },
    moveMoneyButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: 2,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#888',
        marginBottom: 8,
    },
    cardAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardPercentage: {
        fontSize: 14,
        color: colors.green,
    },
    cardArrow: {
        position: 'absolute',
        right: 16,
        top: 16,
    },
    cardArrowText: {
        fontSize: 18,
        color: '#000',
    },
});

export default CashInBoxStyles;
