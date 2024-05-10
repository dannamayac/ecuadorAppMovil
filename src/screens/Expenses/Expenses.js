import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import ExpensesForm from '../../components/ExpensesForms/ExpensesForm';
import ExpensesList from '../../components/ExpensesForms/ExpensesList';

const Expenses = ({ navigation }) => {
  const [expenseType, setExpenseType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveExpense = () => {
    const newExpense = {
      id: expenses.length + 1,
      type: expenseType,
      description: description,
      value: value,
      image: image
    };
    setExpenses([...expenses, newExpense]);
    clearForm();
  };

  const updateExpense = () => {
    const updatedExpenses = expenses.map(exp => {
      if (exp.id === selectedItem.id) {
        return { ...exp, type: expenseType, description: description, value: value, image: image };
      }
      return exp;
    });
    setExpenses(updatedExpenses);
    setSelectedItem(null);
    clearForm();
  };

  const clearForm = () => {
    setExpenseType("");
    setDescription("");
    setValue("");
    setImage(null);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <ExpensesForm
        transactionType={expenseType}
        setTransactionType={setExpenseType}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        image={image}
        setImage={setImage}
        handleSaveTransaction={handleSaveExpense}
        selectedItem={selectedItem}
        updateTransaction={updateExpense}
        clearForm={clearForm}
      />
      <ExpensesList expenses={expenses} setSelectedItem={setSelectedItem} />
    </View>
  );
};

export default Expenses;