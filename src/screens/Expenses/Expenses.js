import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

const Expenses = ({ navigation }) => {
  const [expensesType, setExpensesType] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={IncomeStyles.container}>
      {!expensesType && <Text style={GlobalStyles.placeholder}>Seleccione un tipo</Text>}
      <View style={GlobalStyles.smallPickerContainer}>
      <Picker
        selectedValue={expensesType}
        onValueChange={setExpensesType}
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
      {!description && <Text style={GlobalStyles.placeholder}>Descripción</Text>}
      <View style={GlobalStyles.bigPickerContainer}>
      <Picker
        selectedValue={expensesType}
        onValueChange={setExpensesType}
        style={GlobalStyles.bigPicker}
      >
        <Picker.Item label="Varios" value="varios" />
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
      <TouchableOpacity style={IncomeStyles.imageButton} onPress={pickImage}>
        <FontAwesome5 name="camera" size={20} color="white" />
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={IncomeStyles.image} />}
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={() => console.log('Guardar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Guardar movimiento</Text>
      </TouchableOpacity>
      <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={() => console.log('Guardar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Enviar a estudio</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Expenses;
