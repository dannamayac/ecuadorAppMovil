import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const IncomeStyles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    backgroundColor: 'white',
  },
  imageContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imageButtonOverlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: '100%',
    height: '100%',
  },
  incomeListTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  incomeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
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
    borderBottomWidth: 1,
  },
});

export default IncomeStyles;