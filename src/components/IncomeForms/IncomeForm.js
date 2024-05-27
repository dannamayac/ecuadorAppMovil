import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';

const IncomeForm = ({
  navigation,
  incomeType,
  setIncomeType,
  description,
  setDescription,
  comment,
  setComment,
  value,
  setValue,
  image,
  setImage,
  handleSaveIncome,
  selectedItem,
  clearForm,
  updateIncome,
  handleDeleteIncome,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedItem) {
      setIncomeType(selectedItem.type);
      setDescription(selectedItem.description);
      setComment(selectedItem.comment);
      setValue(selectedItem.value);
      setImage(selectedItem.image);
    }
  }, [selectedItem]);

  const validateForm = () => {
    const newErrors = {};
    if (!description) newErrors.description = 'Descripción es requerida';
    if (!comment) newErrors.comment = 'Comentario es requerido';
    if (!value) newErrors.value = 'Valor es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      handleSaveIncome();
    }
  };

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
    setIncomeType(itemValue);

    if (navigation) {
      if (itemValue === 'expense') {
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
          selectedValue={incomeType}
          onValueChange={handlePickerChange}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Ingreso" value="income" />
          <Picker.Item label="Gastos" value="expense" />
          <Picker.Item label="Retiros" value="withdrawl" />
        </Picker>
      </View>
      {errors.incomeType && <Text style={GlobalStyles.errorText}>{errors.incomeType}</Text>}
      
      <Text style={GlobalStyles.header}>Descripción</Text>
      <View style={GlobalStyles.bigPickerContainer}>
        <Picker
          selectedValue={description}
          onValueChange={setDescription}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Inversión" value="inversion" />
          <Picker.Item label="Venta" value="venta" />
          <Picker.Item label="Salario" value="salario" />
        </Picker>
      </View>
      {errors.description && <Text style={GlobalStyles.errorText}>{errors.description}</Text>}
      <Text style={GlobalStyles.header}>Comentario</Text>
      <TextInput
        style={GlobalStyles.bigInput}
        onChangeText={setComment}
        value={comment}
        placeholder="Ingrese algún comentario sobre el movimiento..."
        multiline
      />
      {errors.comment && <Text style={GlobalStyles.errorText}>{errors.comment}</Text>}
      <Text style={GlobalStyles.header}>Valor</Text>
      <TextInput
        style={GlobalStyles.smallInput}
        onChangeText={setValue}
        value={value}
        placeholder="Valor"
        keyboardType="numeric"
      />
      {errors.value && <Text style={GlobalStyles.errorText}>{errors.value}</Text>}
      
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
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={selectedItem ? updateIncome : handleSubmit}>
        <Text style={GlobalStyles.buttonText}>{selectedItem ? 'Actualizar movimiento' : 'Guardar movimiento'}</Text>
      </TouchableOpacity>
      {selectedItem && (
        <>
          <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={handleDeleteIncome}>
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