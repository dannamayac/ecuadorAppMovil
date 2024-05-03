import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import IncomeStyles from '../../styles/income/IncomeStyles';
import { Picker } from '@react-native-picker/picker';

const Income = ({ navigation }) => {
  const [incomeType, setIncomeType] = useState("ingreso");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  return (
    <ScrollView style={IncomeStyles.container}>
      <Picker
        selectedValue={incomeType}
        onValueChange={(itemValue, itemIndex) => setIncomeType(itemValue)}
        style={IncomeStyles.picker}
        mode="dropdown" 
      >
        <Picker.Item label="Ingreso" value="ingreso" />
        <Picker.Item label="Gasto" value="gasto" />
      </Picker>
      <TextInput
        style={IncomeStyles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="Ingrese algún comentario sobre el movimiento..."
        multiline 
      />
      <TextInput
        style={IncomeStyles.input}
        onChangeText={text => setValue(text)}
        value={value}
        placeholder="Valor"
        keyboardType="numeric"
      />
      <TouchableOpacity style={GlobalStyles.blueButton} onPress={() => console.log('Guardar Movimiento')}>
        <Text style={GlobalStyles.buttonText}>Guardar movimiento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Income;
