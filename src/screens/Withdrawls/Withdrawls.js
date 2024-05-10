import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import WithDrawalsForm from '../../components/WithDrawlsForms/WithDrawlsForm';
import WithDrawalsList from '../../components/WithDrawlsForms/WithDrawlsList';

const WithDrawals = ({ navigation }) => {
  const [withdrawalType, setWithdrawalType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [withdrawals, setWithdrawals] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSaveWithdrawal = () => {
    const newWithdrawal = {
      id: withdrawals.length + 1,
      type: withdrawalType,
      description: description,
      value: value,
      image: image
    };
    setWithdrawals([...withdrawals, newWithdrawal]); // Nombre de función corregido
    clearForm();
  };

  const updateWithdrawal = () => {
    const updatedWithdrawals = withdrawals.map(withdrawal => { // Nombre de variable corregido
      if (withdrawal.id === selectedItem.id) {
        return { ...withdrawal, type: withdrawalType, description: description, value: value, image: image };
      }
      return withdrawal;
    });
    setWithdrawals(updatedWithdrawals);
    setSelectedItem(null);
    clearForm();
  };

  const clearForm = () => {
    setWithdrawalType("");
    setDescription("");
    setValue("");
    setImage(null);
    setSelectedItem(null);
    Keyboard.dismiss();
  };

  return (
    <View style={{ flex: 1 }}>
      <WithDrawalsForm
        withdrawalType={withdrawalType}
        setWithdrawalType={setWithdrawalType}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        image={image}
        setImage={setImage}
        handleSaveWithdrawal={handleSaveWithdrawal}
        selectedItem={selectedItem}
        updateWithdrawal={updateWithdrawal}
        clearForm={clearForm}
      />
      <WithDrawalsList withdrawals={withdrawals} setSelectedItem={setSelectedItem} />
    </View>
  );
};

export default WithDrawals;