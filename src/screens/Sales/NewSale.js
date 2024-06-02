import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { useSales } from './SalesContext';
import Header from '../../components/Header';

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
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedUnit, setSelectedUnit] = useState('');
    const [selectedContract, setSelectedContract] = useState('');

    const { addSale } = useSales();

    const handleNext = () => {
        const newSale = {
            id: String(new Date().getTime()),
            customer: 'Nuevo Cliente',
            date: new Date().toISOString().split('T')[0],
            sale: venta,
            status: 'En espera'
        };
        addSale(newSale);
        navigation.navigate('ClientInfo', { sale: newSale });
    };

    const calculateValues = () => {
        // Aquí puedes implementar la lógica para calcular los valores de cuota, pago, vence, etc.
        return {
            cuota: monto,
            pago: 'Text',
            vence: 'Text',
            capital: monto,
            intereses: interes,
            iva: 'Text',
            costAdmin: costAdmin,
        };
    };

    const values = calculateValues();

    return (
        <PaperProvider>
            <Header />
            <ScrollView style={SalesStyles.container}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Sales')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Nueva venta</Text>
                </View>

                <TextInput
                    style={SalesStyles.searchInput}
                    placeholder="Buscar"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <View style={SalesStyles.filterPickerContainer}>
                    <Picker
                        selectedValue={selectedUnit}
                        onValueChange={setSelectedUnit}
                        style={SalesStyles.picker}
                    >
                        <Picker.Item label="Todas las unidades (16)" value="all" />
                        <Picker.Item label="Unidad 1" value="unit1" />
                        <Picker.Item label="Unidad 2" value="unit2" />
                    </Picker>
                </View>
                <View style={SalesStyles.filterPickerContainer}>
                    <Picker
                        selectedValue={selectedContract}
                        onValueChange={setSelectedContract}
                        style={SalesStyles.picker}
                    >
                        <Picker.Item label="Venta con contrato" value="nuevo" />
                        <Picker.Item label="Nuevo" value="nuevo" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Venta con contrato</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={venta}
                        onValueChange={setVenta}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Sí" value="yes" />
                        <Picker.Item label="No" value="no" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Modo</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={modo}
                        onValueChange={setModo}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Nuevo" value="nuevo" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Tipo</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={tipo}
                        onValueChange={setTipo}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Personal" value="personal" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Documento</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={documento}
                        onValueChange={setDocumento}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Contrato de préstamo" value="prestamo" />
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
                        value={cuotas}
                        onChangeText={setCuotas}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Interés/Mes</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={interes}
                        onChangeText={setInteres}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Costo Administración</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={costAdmin}
                        onChangeText={setCostAdmin}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Costo cierre</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={costCierre}
                        onChangeText={setCostCierre}
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
                        <Picker.Item label="Frecuencia de pago" value="mensual" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Monto contrato</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={contractAmount}
                        onChangeText={setContractAmount}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Meses</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={months}
                        onChangeText={setMonths}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Total a pagar</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        value={totalToPay}
                        onChangeText={setTotalToPay}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <View style={SalesStyles.summaryContainer}>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Cuota</Text>
                        <Text style={SalesStyles.summaryValue}>{values.cuota}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Pago</Text>
                        <Text style={SalesStyles.summaryValue}>{values.pago}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Vence</Text>
                        <Text style={SalesStyles.summaryValue}>{values.vence}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Capital</Text>
                        <Text style={SalesStyles.summaryValue}>{values.capital}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Intereses</Text>
                        <Text style={SalesStyles.summaryValue}>{values.intereses}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>IVA</Text>
                        <Text style={SalesStyles.summaryValue}>{values.iva}</Text>
                    </View>
                    <View style={SalesStyles.summaryRow}>
                        <Text style={SalesStyles.summaryLabel}>Cost. Admin</Text>
                        <Text style={SalesStyles.summaryValue}>{values.costAdmin}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={GlobalStyles.greenButton}
                    onPress={handleNext}>
                    <Text style={GlobalStyles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
            </ScrollView>
        </PaperProvider>
    );
};

export default NewSale;