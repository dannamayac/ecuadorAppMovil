import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import IncomeForm from '../../components/IncomeForms/IncomeForm';
import IncomeList from '../../components/IncomeForms/IncomeList';

const Income = ({ navigation }) => {
  const [incomeType, setIncomeType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveIncome = () => {
    const newIncome = {
      id: incomes.length + 1,
      type: incomeType,
      description,
      value,
      image
    };
    setIncomes([...incomes, newIncome]);
    clearForm();
  };

  const updateIncome = () => {
    const updatedIncomes = incomes.map(inc => {
      if (inc.id === selectedItem.id) {
        return { ...inc, type: incomeType, description: description, value: value, image: image };
      }
      return inc;
    });
    setIncomes(updatedIncomes);
    setSelectedItem(null);
    clearForm();
  };

  const clearForm = () => {
    setIncomeType("");
    setDescription("");
    setValue("");
    setImage(null);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <IncomeForm
        incomeType={incomeType}
        setIncomeType={setIncomeType}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        image={image}
        setImage={setImage}
        handleSaveIncome={handleSaveIncome}
        selectedItem={selectedItem}
        updateIncome={updateIncome}
        clearForm={clearForm}
      />
      <IncomeList incomes={incomes} setSelectedItem={setSelectedItem} />
    </View>
  );
};

export default Income;