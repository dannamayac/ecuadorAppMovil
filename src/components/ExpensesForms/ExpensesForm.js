import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';

const ExpensesForm = ({
  navigation,
  transactionType,
  setTransactionType,
  description,
  setDescription,
  comment,
  setComment,
  value,
  setValue,
  image,
  setImage,
  handleSaveTransaction,
  selectedItem,
  clearForm,
  updateTransaction,
  handleDeleteTransaction,
}) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (selectedItem) {
      setTransactionType(selectedItem.type);
      setDescription(selectedItem.description);
      setComment(selectedItem.comment);
      setValue(selectedItem.value);
      setImage(selectedItem.image);
    }
  }, [selectedItem]);

  const pickImage = async () => {
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
    setIsLoading(false);
  };

  const handlePickerChange = (itemValue) => {
    setTransactionType(itemValue);

    if (navigation) {
      if (itemValue === 'income') {
        navigation.navigate('Income');
      } else if (itemValue === 'expense') {
        navigation.navigate('Expenses');
      } else if (itemValue === 'withdrawl') {
        navigation.navigate('WithDrawls');
      }
    }
  };

  return (
    <View style={IncomeStyles.headerContainer}>
      <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.header}>Seleccione un tipo</Text>
      <View style={GlobalStyles.smallPickerContainer}>
        <Picker
          selectedValue={transactionType}
          onValueChange={handlePickerChange}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Ingreso" value="income" />
          <Picker.Item label="Gastos" value="expense" />
          <Picker.Item label="Retiros" value="withdrawl" />
        </Picker>
      </View>
      <Text style={GlobalStyles.header}>Descripción</Text>
      <View style={GlobalStyles.bigPickerContainer}>
        <Picker
          selectedValue={description}
          onValueChange={handlePickerChange}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Alimentación" value="alimentación" />
          <Picker.Item label="Aportes seguro" value="aportesSeguro" />
          <Picker.Item label="Arriendo" value="arriendo" />
          <Picker.Item label="Descuadre" value="descuadre" />
          <Picker.Item label="Gasolina" value="gasolina" />
          <Picker.Item label="Hospedaje" value="hospedaje" />
          <Picker.Item label="Médico" value="medico" />
          <Picker.Item label="Viajes/peaje" value="viajes" />
        </Picker>
      </View>
      <TextInput
        style={GlobalStyles.bigInput}
        onChangeText={setComment}
        value={comment}
        placeholder="Ingrese algún comentario sobre el movimiento..."
        multiline
      />
      <TextInput
        style={GlobalStyles.smallInput}
        onChangeText={setValue}
        value={value}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <View style={IncomeStyles.imageContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            {image ? (
              <Image source={{ uri: image }} style={IncomeStyles.image} />
            ) : (
              <TouchableOpacity style={IncomeStyles.imageButtonOverlay} onPress={pickImage}>
                <FontAwesome5 name="camera" size={20} color="white" />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={selectedItem ? updateTransaction : handleSaveTransaction}>
        <Text style={GlobalStyles.buttonText}>{selectedItem ? 'Actualizar movimiento' : 'Guardar movimiento'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={() => console.log('Actualizar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Enviar a estudio</Text>
      </TouchableOpacity>
      {selectedItem && (
        <>
          <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={handleDeleteTransaction}>
            <Text style={GlobalStyles.buttonText}>Eliminar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={GlobalStyles.redButton} onPress={clearForm}>
            <Text style={GlobalStyles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ExpensesForm;
