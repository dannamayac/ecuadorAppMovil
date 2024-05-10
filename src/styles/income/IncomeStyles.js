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
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  incomeListTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    backgroundColor: 'white',
    marginRight: 20,
    marginLeft: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  incomeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
    height: 60,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
});

export default IncomeStyles;