import React, { useState, useEffect } from 'react';
import { View, Keyboard, FlatList, Text, Alert } from 'react-native';
import ExpensesForm from '../../components/ExpensesForms/ExpensesForm';
import ExpensesList from '../../components/ExpensesForms/ExpensesList';
import IncomeStyles from '../../styles/income/IncomeStyles';
import Header from '../../components/Header';
import { REACT_APP_API_BASE_URL, REACT_APP_EXPENSE_LIST_ENDPOINT, REACT_APP_EXPENSE_CREATE_ENDPOINT } from '@env';
import AlertButton from '../../components/AlertButton';

const Expenses = ({ navigation }) => {
  const [expenseType, setExpenseType] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_EXPENSE_LIST_ENDPOINT}`);
      const result = await response.json();
      if (response.status === 200) {
        setExpenses(result.Gastos);
      } else {
        Alert.alert('Error', 'Error al cargar la lista de egresos');
      }
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error al cargar la lista de egresos');
    } finally {
      setLoading(false);
    }
  };

  const handleSaveExpense = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_EXPENSE_CREATE_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: expenseType,
          description: description,
          comment: comment,
          value: value,
          image: image,
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Éxito', 'Egreso agregado correctamente');
        fetchExpenses(); // Actualiza la lista de egresos después de agregar uno nuevo
      } else {
        Alert.alert('Error', 'No se pudo agregar el egreso');
      }
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error al agregar el egreso');
    }
    clearForm();
  };

  const updateExpense = async () => {
    // Implementar actualización de egresos aquí
  };

  const handleDeleteExpense = async () => {
    // Implementar eliminación de egresos aquí
  };

  const clearForm = () => {
    setExpenseType("");
    setDescription("");
    setComment("");
    setValue("");
    setImage(null);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <FlatList
        style={{ flex: 1 }}
        ListHeaderComponent={
          <View>
            <ExpensesForm
              navigation={navigation}
              transactionType={expenseType}
              setTransactionType={setExpenseType}
              description={description}
              setDescription={setDescription}
              comment={comment}
              setComment={setComment}
              value={value}
              setValue={setValue}
              image={image}
              setImage={setImage}
              handleSaveTransaction={handleSaveExpense}
              selectedItem={selectedItem}
              updateTransaction={updateExpense}
              clearForm={clearForm}
              handleDeleteTransaction={handleDeleteExpense}
              fetchExpenses={fetchExpenses} // Pasar fetchExpenses como prop
            />
            <Text style={IncomeStyles.incomeListTitle}>Historial de Egresos</Text>
          </View>
        }
        data={expenses}
        renderItem={({ item }) => (
          <ExpensesList expenses={[item]} setSelectedItem={setSelectedItem} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <AlertButton />
    </View>
  );
};

export default Expenses;
