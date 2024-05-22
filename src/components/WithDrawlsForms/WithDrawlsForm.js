import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';

const WithDrawalsForm = ({
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
  handleDeleteTransaction
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
      <Text style={GlobalStyles.header}>Seleccione un tipo de retiro</Text>
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
          onValueChange={setDescription}
          style={GlobalStyles.smallPicker}
        >
          <Picker.Item label="Varios" value="inversion" />
          <Picker.Item label="Gasto" value="gasto" />
        </Picker>
      </View>
      <TextInput
        style={GlobalStyles.bigInput}
        onChangeText={setComment}
        value={comment}
        placeholder="Ingrese algún comentario sobre el retiro..."
        multiline
      />
      <Text style={GlobalStyles.header}>Valor</Text>
      <TextInput
        style={GlobalStyles.smallInput}
        onChangeText={setValue}
        value={value}
        placeholder="Cantidad a retirar"
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

export default WithDrawalsForm;