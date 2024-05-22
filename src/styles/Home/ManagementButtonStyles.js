import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const ManagementButtonStyles = StyleSheet.create({
  managementbuttons: {
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
    elevation: 3,
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
    marginBottom: 10,
    borderBottomWidth: 1.6,
    borderColor: '#ccc',
    paddingBottom: 8,
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
    width: 220,
    height: 70,
    marginLeft: 'auto',
  },
  manageContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: colors.input,
    elevation: 1,
  },
  manageText: {
    fontWeight: 'bold',
    color: colors.bluePrimary,
    textAlign: 'left',
    marginLeft: 10,
  }
});

export default ManagementButtonStyles;