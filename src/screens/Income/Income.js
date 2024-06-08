import React, { useState, useEffect } from 'react';
import { View, Keyboard, FlatList, Text, Alert } from 'react-native';
import IncomeForm from '../../components/IncomeForms/IncomeForm';
import IncomeList from '../../components/IncomeForms/IncomeList';
import IncomeStyles from '../../styles/income/IncomeStyles';
import Header from '../../components/Header';
import { REACT_APP_API_BASE_URL, REACT_APP_INCOMES_LIST_ENDPOINT, REACT_APP_CREATE_INCOME_ENDPOINT } from '@env';
import AlertButton from '../../components/AlertButton';

const Income = ({ navigation }) => {
  const [incomeType, setIncomeType] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);
  const [incomes, setIncomes] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchIncomes();
  }, []);

  const fetchIncomes = async () => {
    try {
      console.log('Fetching incomes...');
      const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_INCOMES_LIST_ENDPOINT}`);
      console.log('Response received:', response);
      const result = await response.json();
      console.log('Result:', result);
      if (response.status === 200) {
        console.log('Setting incomes:', result.Ingresos);
        setIncomes(result.Ingresos);
      } else {
        console.log('Error: status not 200');
        Alert.alert('Error', 'Error al cargar la lista de ingresos');
      }
    } catch (error) {
      console.log('Error fetching incomes:', error);
      Alert.alert('Error', 'Ha ocurrido un error al cargar la lista de ingresos');
    } finally {
      console.log('Fetch incomes finally block, setting loading to false');
      setLoading(false);
    }
  };

  const handleSaveIncome = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}${REACT_APP_CREATE_INCOME_ENDPOINT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: incomeType,
          description: description,
          comment: comment,
          value: value,
          image: image,
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Éxito', 'Ingreso agregado correctamente');
        fetchIncomes();  // Actualiza la lista de ingresos después de agregar uno nuevo
      } else {
        Alert.alert('Error', 'No se pudo agregar el ingreso');
      }
    } catch (error) {
      console.error('Error adding income:', error);
      Alert.alert('Error', 'Ha ocurrido un error al agregar el ingreso');
    }
    clearForm();
  };

  const updateIncome = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/Ingresos/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedItem.id,
          type: incomeType,
          description: description,
          comment: comment,
          value: value,
          image: image,
        }),
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Éxito', 'Ingreso actualizado correctamente');
        fetchIncomes();  // Actualiza la lista de ingresos después de actualizar uno existente
      } else {
        Alert.alert('Error', 'No se pudo actualizar el ingreso');
      }
    } catch (error) {
      console.error('Error updating income:', error);
      Alert.alert('Error', 'Ha ocurrido un error al actualizar el ingreso');
    }
    clearForm();
    setSelectedItem(null);
  };

  const handleDeleteIncome = async () => {
    try {
      const response = await fetch(`${REACT_APP_API_BASE_URL}/Ingresos/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: selectedItem.id }),
      });

      const result = await response.json();
      if (response.status === 200) {
        Alert.alert('Éxito', 'Ingreso eliminado correctamente');
        fetchIncomes();
      } else {
        Alert.alert('Error', 'No se pudo eliminar el ingreso');
      }
    } catch (error) {
      console.error('Error deleting income:', error);
      Alert.alert('Error', 'Ha ocurrido un error al eliminar el ingreso');
    }
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
              fetchIncomes={fetchIncomes} // Pasar fetchIncomes como prop
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
      <AlertButton />
    </View>
  );
};

export default Income;
