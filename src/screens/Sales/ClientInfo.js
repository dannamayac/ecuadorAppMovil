import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';

const ClientInfo = ({ navigation }) => {
    const [venta, setVenta] = useState('');
    const [address, setAddress] = useState('');
    const [idClient, setIdClient] = useState('');
    const [client, setClient] = useState('');
    const [date, setDate] = useState('');
    const [costWithOutTaxes, setCostWithOutTaxes] = useState('');
    const [contractAmount, setContractAmount] = useState('');
    const [taxes, setTaxes] = useState('');
    const [frequencyToPay, setFrequencyToPay] = useState('');
    const [typeOfSell, setTypeOfSell] = useState('');
    const [state, setState] = useState('');
    const [previousDebt, setPreviousDebt] = useState('');

    const [saleStatus, setSaleStatus] = useState('activo');
    const [modalVisible, setModalVisible] = useState(false);

    const handleContinue = () => {
        setModalVisible(false);
        setSaleStatus('en espera');
        // Aquí puedes agregar más lógica si es necesario
    };

    return (
        <PaperProvider>
            <ScrollView style={SalesStyles.container}>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Info del cliente</Text>
                </View>
                <Text style={GlobalStyles.header}>Venta con contrato?</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={venta}
                        onValueChange={setVenta}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Nuevo" value="inversion" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Dirección de la venta</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        style={SalesStyles.outlinedInput}
                        onChangeText={setAddress}
                        value={address}
                        placeholder="Escriba aquí la dirección"
                    />
                </View>
                <Text style={GlobalStyles.header}>ID Cliente apodo</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Escriba aquí el ID del cliente"
                        value={idClient}
                        onChangeaquíText={setIdClient}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Cliente</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Escriba aquí..."
                        value={client}
                        onChangeText={setClient}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Fecha y hora de solicitud</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Escribe el fecha y hora de solicitud"
                        value={date}
                        onChangeText={setDate}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Valor sin interés</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Escribe el valor sin interés"
                        value={costWithOutTaxes}
                        onChangeText={setCostWithOutTaxes}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Cuotas pactadas</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Cuotas pactadas"
                        value={contractAmount}
                        onChangeText={setContractAmount}
                        keyboardType="numeric"
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Tasa interés</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Tasa de interés"
                        value={taxes}
                        onChangeText={setTaxes}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Frecuencia de pago</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Frecuencia de pago"
                        value={frequencyToPay}
                        onChangeText={setFrequencyToPay}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Tipo de venta</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Tipo de venta"
                        value={typeOfSell}
                        onChangeText={setTypeOfSell}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Estado</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Estado"
                        value={state}
                        onChangeText={setState}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <Text style={GlobalStyles.header}>Mora anterior</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <TextInput
                        label="Mora anterior"
                        value={previousDebt}
                        onChangeText={setPreviousDebt}
                        style={SalesStyles.outlinedInput}
                    />
                </View>
                <TouchableOpacity style={GlobalStyles.greenButton} onPress={() => setModalVisible(true)}>
                    <Text style={GlobalStyles.buttonText}>Siguiente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={GlobalStyles.redButton} onPress={navigation.navigate('Sales')}>
                    <Text style={GlobalStyles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
                        <Text style={{ marginBottom: 15 }}>El contrato ha sido enviado con éxito al correo del cliente, pídale que por favor lo revise y lo firme instantáneamente para continuar con el proceso</Text>
                        <TouchableOpacity style={{ backgroundColor: 'green', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }} onPress={handleContinue}>
                            <Text style={{ color: 'white' }}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </PaperProvider>
    );
};

export default ClientInfo;