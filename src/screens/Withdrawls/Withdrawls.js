import React, { useState } from 'react';
import { View, Keyboard, FlatList, Text } from 'react-native';
import WithDrawalsForm from '../../components/WithDrawlsForms/WithDrawlsForm';
import WithDrawalsList from '../../components/WithDrawlsForms/WithDrawlsList';
import IncomeStyles from '../../styles/income/IncomeStyles';
import Header from '../../components/Header';

const WithDrawals = ({ navigation }) => {
  const [withdrawalType, setWithdrawalType] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [withdrawals, setWithdrawals] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveWithdrawal = () => {
    const newWithdrawal = {
      id: withdrawals.length + 1,
      type: withdrawalType,
      description,
      comment,
      value,
      image
    };
    setWithdrawals([...withdrawals, newWithdrawal]);
    clearForm();
  };

  const updateWithdrawal = () => {
    const updatedWithdrawals = withdrawals.map(withdrawal => {
      if (withdrawal.id === selectedItem.id) {
        return { ...withdrawal, type: withdrawalType, description, comment, value, image };
      }
      return withdrawal;
    });
    setWithdrawals(updatedWithdrawals);
    setSelectedItem(null);
    clearForm();
  };

  const handleDeleteWithdrawal = () => {
    const filteredWithdrawals = withdrawals.filter(withdrawal => withdrawal.id !== selectedItem.id);
    setWithdrawals(filteredWithdrawals);
    clearForm();
    setSelectedItem(null);
  };

  const clearForm = () => {
    setWithdrawalType("");
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
            <WithDrawalsForm
              navigation={navigation}
              transactionType={withdrawalType}
              setTransactionType={setWithdrawalType}
              description={description}
              setDescription={setDescription}
              comment={comment}
              setComment={setComment}
              value={value}
              setValue={setValue}
              image={image}
              setImage={setImage}
              handleSaveTransaction={handleSaveWithdrawal}
              selectedItem={selectedItem}
              updateTransaction={updateWithdrawal}
              clearForm={clearForm}
              handleDeleteTransaction={handleDeleteWithdrawal}
            />
            <Text style={IncomeStyles.incomeListTitle}>Historial de Retiros</Text>
          </View>
        }
        data={withdrawals}
        renderItem={({ item }) => (
          <WithDrawalsList withdrawals={[item]} setSelectedItem={setSelectedItem} />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default WithDrawals;