import { StyleSheet } from 'react-native';
import { colors } from './../GlobalStyles';

const IncomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  imageButton: {
    backgroundColor: colors.nonBlue,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default IncomeStyles;