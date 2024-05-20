import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PaperProvider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';

const ClientInfo = ({ navigation, route }) => {
    const { sale, fromViewButton } = route.params || {};
    const [venta, setVenta] = useState(sale ? sale.sale : '');
    const [address, setAddress] = useState('');
    const [idClient, setIdClient] = useState('');
    const [client, setClient] = useState(sale ? sale.customer : '');
    const [date, setDate] = useState(sale ? sale.date : '');
    const [costWithOutTaxes, setCostWithOutTaxes] = useState('');
    const [contractAmount, setContractAmount] = useState('');
    const [taxes, setTaxes] = useState('');
    const [frequencyToPay, setFrequencyToPay] = useState('');
    const [typeOfSell, setTypeOfSell] = useState('');
    const [state, setState] = useState('');
    const [previousDebt, setPreviousDebt] = useState('');
    const [saleStatus, setSaleStatus] = useState(sale ? sale.status : 'En espera');
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmSaleModalVisible, setConfirmSaleModalVisible] = useState(false);

    useEffect(() => {
        if (sale) {
            setSaleStatus(sale.status);
        }
    }, [sale]);

    const handleContinue = () => {
        setModalVisible(false);
        setSaleStatus('En espera');
        navigation.navigate('Sales'); 
    };

    const handleConfirmSale = () => {
        setConfirmSaleModalVisible(false);
        navigation.navigate('Ticket');
    };

    const handleNext = () => {
        if (fromViewButton) {
            setConfirmSaleModalVisible(true);
        } else {
            setModalVisible(true);
        }
    };

    const getStatusMessage = (status) => {
        switch (status) {
            case 'Aprobada':
                return 'El contrato ha sido aprobado. Proceda a confirmar la venta.';
            case 'Rechazada':
                return 'El contrato ha sido rechazado. Revise los detalles y vuelva a intentar.';
            case 'En espera':
                return 'El contrato ha sido firmado con éxito por el cliente. Rectifique la información y confirme el registro de la venta.';
            default:
                return '';
        }
    };

    return (
        <PaperProvider>
            <ScrollView style={SalesStyles.container}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Sales')}>
                    <Text style={GlobalStyles.backButtonText}> Volver</Text>
                </TouchableOpacity>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Info del cliente</Text>
                </View>
                {fromViewButton && sale && (
                    <>
                        <View style={SalesStyles.statusContainer}>
                            <Text style={SalesStyles.statusText}>{saleStatus}</Text>
                        </View>
                        <Text style={SalesStyles.message}>
                            {getStatusMessage(saleStatus)}
                        </Text>
                    </>
                )}
                <Text style={GlobalStyles.header}>Venta con contrato?</Text>
                <View style={SalesStyles.whitePickerContainer}>
                    <Picker
                        selectedValue={venta}
                        onValueChange={setVenta}
                        style={GlobalStyles.whitePicker}
                    >
                        <Picker.Item label="Nuevo" value="nuevo" />
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
                        onChangeText={setIdClient}
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
                {fromViewButton && (saleStatus === 'Rechazada' || saleStatus === 'Aprobada') ? (
                    <TouchableOpacity style={GlobalStyles.redButton} onPress={() => navigation.navigate('Sales')}>
                        <Text style={GlobalStyles.buttonText}>Volver</Text>
                    </TouchableOpacity>
                ) : (
                    <>
                        <TouchableOpacity style={GlobalStyles.greenButton} onPress={handleNext}>
                            <Text style={GlobalStyles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={GlobalStyles.redButton} onPress={() => navigation.navigate('Sales')}>
                            <Text style={GlobalStyles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </>
                )}
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={confirmSaleModalVisible}
                onRequestClose={() => setConfirmSaleModalVisible(false)}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%', alignItems: 'center' }}>
                        <Text style={{ marginBottom: 15 }}>¿Está seguro que desea confirmar esta venta?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                            <TouchableOpacity style={{ backgroundColor: 'red', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }} onPress={() => setConfirmSaleModalVisible(false)}>
                                <Text style={{ color: 'white' }}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: 'green', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 5 }} onPress={handleConfirmSale}>
                                <Text style={{ color: 'white' }}>Crear venta</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </PaperProvider>
    );
};

export default ClientInfo;