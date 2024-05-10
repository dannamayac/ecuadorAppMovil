import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { RadioButton, TextInput } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import SettingsStyles from '../../styles/Settings/SettingsStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const GenerateNewKeys = ({ navigation }) => {
    const [value, setValue] = useState('');
    const [checked, setChecked] = useState('ventas');

    return (
        <ScrollView style={SalesStyles.container}>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Generar nueva llave</Text>
            </View>
            <View style={GlobalStyles.headerContainer}>
                <Text style={GlobalStyles.header}>Seleccione tipo</Text>
                <RadioButton.Group onValueChange={newValue => setChecked(newValue)} value={checked}>
                    <View style={SettingsStyles.radioButtonContainer}>
                        <RadioButton value="ventas" />
                        <Text style={SettingsStyles.radioButtonLabel}>Ventas</Text>
                    </View>
                    <View style={SettingsStyles.radioButtonContainer}>
                        <RadioButton value="pagoVentas" />
                        <Text style={SettingsStyles.radioButtonLabel}>Pago Ventas</Text>
                    </View>
                    <View style={SettingsStyles.radioButtonContainer}>
                        <RadioButton value="gastosUnidad" />
                        <Text style={SettingsStyles.radioButtonLabel}>Gastos Unidad</Text>
                    </View>
                </RadioButton.Group>
            </View>
            <Text style={GlobalStyles.header}>Valor</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="$0"
                        value={value}
                        onChangeText={setValue}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
            <TouchableOpacity style={GlobalStyles.greenButton}>
                <Text style={GlobalStyles.buttonText}>Generar llave</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default GenerateNewKeys;