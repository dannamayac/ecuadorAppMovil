import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';

const ExpensesForm = ({ expenseType, setExpenseType, description, setDescription, value, setValue, image, setImage, handleSaveExpense, selectedItem, clearForm }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (selectedItem) {
      setExpenseType(selectedItem.type);
      setDescription(selectedItem.description);
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

  return (
    <View style={IncomeStyles.headerContainer}>
      <Text style={GlobalStyles.header}>Seleccione un tipo</Text>
      <View style={GlobalStyles.smallPickerContainer}>
        <Picker
          selectedValue={expenseType}
          onValueChange={setExpenseType}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Retiros" value="retiro" />
          <Picker.Item label="Alimentación" value="alimentación" />
          <Picker.Item label="Aportes seguro" value="aportesSeguro" />
          <Picker.Item label="Arriendo" value="arriendo" />
          <Picker.Item label="Descuadre" value="descuadre" />
          <Picker.Item label="Gasolina" value="gasolina" />
        </Picker>
      </View>
      <View style={GlobalStyles.bigPickerContainer}>
        <Picker
          selectedValue={expenseType}
          onValueChange={setExpenseType}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Inversión" value="inversion" />
          <Picker.Item label="Gasto" value="gasto" />
        </Picker>
      </View>
      <TextInput
        style={GlobalStyles.bigInput}
        onChangeText={setDescription}
        value={description}
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
      <TouchableOpacity style={IncomeStyles.imageContainer} onPress={pickImage}>
        <Image source={{ uri: image }} style={IncomeStyles.image} />
        {!image && (
          <View style={IncomeStyles.imageButtonOverlay}>
            <FontAwesome5 name="camera" size={20} color="white" />
          </View>
        )}
        {isLoading && (
          <ActivityIndicator size="large" color="#0000ff" style={IncomeStyles.imageButtonOverlay} />
        )}
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={IncomeStyles.image} />}
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={selectedItem ? updateExpense : handleSaveExpense}>
        <Text style={GlobalStyles.buttonText}>{selectedItem ? 'Actualizar movimiento' : 'Guardar movimiento'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={() => console.log('Actualizar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Enviar a estudio</Text>
      </TouchableOpacity>
      {selectedItem && (
        <>
          <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={() => console.log('Actualizar Movimiento')}>
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