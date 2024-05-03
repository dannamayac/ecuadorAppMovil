import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, View, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';

const Income = ({ navigation }) => {
  const [incomeType, setIncomeType] = useState("");
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
      {!incomeType && <Text style={GlobalStyles.placeholder}>Seleccione un tipo</Text>}
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
      {!description && <Text style={GlobalStyles.placeholder}>Descripción</Text>}
      <View style={GlobalStyles.bigPickerContainer}>
      <Picker
        selectedValue={incomeType}
        onValueChange={setIncomeType}
        style={GlobalStyles.bigPicker}
      >
        <Picker.Item label="Inversión" value="inversión" />
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
        <FontAwesome5 name="camera" size={20} />
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={IncomeStyles.image} />}
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={() => console.log('Guardar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Guardar movimiento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Income;
