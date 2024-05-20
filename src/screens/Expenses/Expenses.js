import React, { useState } from 'react';
import { View, Keyboard, FlatList, Text } from 'react-native';
import ExpensesForm from '../../components/ExpensesForms/ExpensesForm';
import ExpensesList from '../../components/ExpensesForms/ExpensesList';
import IncomeStyles from '../../styles/income/IncomeStyles';

const Expenses = ({ navigation }) => {
  const [expenseType, setExpenseType] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState(""); // Añadido para manejar el comentario adicional
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveExpense = () => {
    const newExpense = {
      id: expenses.length + 1,
      type: expenseType,
      description,
      comment,
      value,
      image
    };
    setExpenses([...expenses, newExpense]);
    clearForm();
  };

  const updateExpense = () => {
    const updatedExpenses = expenses.map(exp => {
      if (exp.id === selectedItem.id) {
        return { ...exp, type: expenseType, description, comment, value, image };
      }
      return exp;
    });
    setExpenses(updatedExpenses);
    setSelectedItem(null);
    clearForm();
  };

  const handleDeleteExpense = () => {
    const filteredExpenses = expenses.filter(exp => exp.id !== selectedItem.id);
    setExpenses(filteredExpenses);
    clearForm();
    setSelectedItem(null);
  };

  const clearForm = () => {
    setExpenseType("");
    setDescription("");
    setComment(""); // Aseguramos que también se borre el comentario
    setValue("");
    setImage(null);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
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
              comment={comment} // Añadido para manejar el comentario
              setComment={setComment} // Añadido para manejar el comentario
              value={value}
              setValue={setValue}
              image={image}
              setImage={setImage}
              handleSaveTransaction={handleSaveExpense}
              selectedItem={selectedItem}
              updateTransaction={updateExpense}
              clearForm={clearForm}
              handleDeleteTransaction={handleDeleteExpense}
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
    </View>
  );
};

export default Expenses;