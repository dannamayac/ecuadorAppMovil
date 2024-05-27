import React, { useState } from 'react';
import { View, Keyboard, FlatList, Text } from 'react-native';
import IncomeForm from '../../components/IncomeForms/IncomeForm';
import IncomeList from '../../components/IncomeForms/IncomeList';
import IncomeStyles from '../../styles/income/IncomeStyles';
import Header from '../../components/Header';

const Income = ({ navigation }) => {
  const [incomeType, setIncomeType] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveIncome = () => {
    const newIncome = {
      id: incomes.length + 1,
      type: incomeType,
      description,
      comment,
      value,
      image
    };
    setIncomes([...incomes, newIncome]);
    clearForm();
  };

  const updateIncome = () => {
    const updatedIncomes = incomes.map(inc => {
      if (inc.id === selectedItem.id) {
        return { ...inc, type: incomeType, description, comment, value, image };
      }
      return inc;
    });
    setIncomes(updatedIncomes);
    setSelectedItem(null);
    clearForm();
  };

  const handleDeleteIncome = () => {
    const filteredIncomes = incomes.filter(inc => inc.id !== selectedItem.id);
    setIncomes(filteredIncomes);
    clearForm();
    setSelectedItem(null);
  };

  const clearForm = () => {
    setIncomeType("");
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
            <IncomeForm
              navigation={navigation}
              incomeType={incomeType}
              setIncomeType={setIncomeType}
              description={description}
              setDescription={setDescription}
              comment={comment}
              setComment={setComment}
              value={value}
              setValue={setValue}
              image={image}
              setImage={setImage}
              handleSaveIncome={handleSaveIncome}
              selectedItem={selectedItem}
              updateIncome={updateIncome}
              clearForm={clearForm}
              handleDeleteIncome={handleDeleteIncome}
            />
            <Text style={IncomeStyles.incomeListTitle}>Historial de ingresos</Text>
          </View>
        }
        data={incomes}
        renderItem={({ item }) => (
          <IncomeList incomes={[item]} setSelectedItem={setSelectedItem} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Income;