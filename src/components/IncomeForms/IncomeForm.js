import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';

const IncomeForm = ({ incomeType, setIncomeType, description, setDescription, value, setValue, image, setImage, handleSaveIncome, selectedItem, clearForm }) => {
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (selectedItem) {
      setIncomeType(selectedItem.type);
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
          selectedValue={incomeType}
          onValueChange={setIncomeType}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Ingreso" value="ingreso" />
          <Picker.Item label="Gasto" value="gasto" />
        </Picker>
      </View>
      <Text style={GlobalStyles.header}>Descripción</Text>
      <View style={GlobalStyles.bigPickerContainer}>
        <Picker
          selectedValue={incomeType}
          onValueChange={setIncomeType}
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
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={selectedItem ? updateIncome : handleSaveIncome}>
        <Text style={GlobalStyles.buttonText}>{selectedItem ? 'Actualizar movimiento' : 'Guardar movimiento'}</Text>
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

export default IncomeForm;