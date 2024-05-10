import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';

const NewSale = ({ navigation }) => {
    const [venta, setVenta] = useState('');
    const [modo, setModo] = useState('');
    const [tipo, setTipo] = useState('');
    const [documento, setDocumento] = useState('');
    const [monto, setMonto] = useState('');
    const [cuotas, setCuotas] = useState('');
    const [interes, setInteres] = useState('');
    const [costAdmin, setCostAdmin] = useState('');
    const [costCierre, setCostCierre] = useState('');
    const [frequencyToPay, setFrequencyToPay] = useState('');
    const [contractAmount, setContractAmount] = useState('');
    const [months, setMonths] = useState('');
    const [totalToPay, setTotalToPay] = useState('');

    return (
        <PaperProvider>
            <ScrollView style={SalesStyles.container}>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Nueva venta</Text>
                </View>
                <Text style={GlobalStyles.header}>Venta con contrato</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={venta}
                        onValueChange={setVenta}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Nuevo" value="inversion" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Modo</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={modo}
                        onValueChange={setModo}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Nuevo" value="inversion" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Tipo</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={tipo}
                        onValueChange={setTipo}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Personal" value="inversion" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Documento</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={documento}
                        onValueChange={setDocumento}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Contrato de prestamo" value="inversion" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Monto emitido</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        style={SalesStyles.outlinedInput}
                        onChangeText={setMonto}
                        value={monto}
                        placeholder="Monto emitido"
                        keyboardType="numeric"
                    />
                </View>
                <Text style={GlobalStyles.header}>Cuotas</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Cuotas"
                        value={cuotas}
                        onChangeText={text => setCuotas(text)}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Interés/Mes</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Interés/Mes"
                        value={interes}
                        onChangeText={text => setInteres(text)}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Costo Administración</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Cost. Admin"
                        value={costAdmin}
                        onChangeText={text => setCostAdmin(text)}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Costo cierre</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Cost. Cierre"
                        value={costCierre}
                        onChangeText={text => setCostCierre(text)}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Frecuencia de pago</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <Picker
                        selectedValue={frequencyToPay}
                        onValueChange={setFrequencyToPay}
                        style={GlobalStyles.bigPicker}
                    >
                        <Picker.Item label="Frecuencia de pago" value="inversion" />
                    </Picker>
                </View>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="$0"
                        value={contractAmount}
                        onChangeText={setContractAmount}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="0"
                        value={months}
                        onChangeText={setMonths}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="$0"
                        value={totalToPay}
                        onChangeText={setTotalToPay}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <TouchableOpacity
                    style={GlobalStyles.greenButton}
                    onPress={() => navigation.navigate('ClientInfo')}>
                    <Text style={GlobalStyles.buttonText}>Siguiente</Text> 
                </TouchableOpacity>
            </ScrollView>
        </PaperProvider>
    );
};

export default NewSale;