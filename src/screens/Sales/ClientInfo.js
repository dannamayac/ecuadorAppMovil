import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal } from 'react-native';
import { TextInput, Provider as PaperProvider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import AlertButton from '../../components/AlertButton';

const ClientInfo = ({ navigation, route }) => {
    const { sale, fromViewButton } = route.params || {};
    const [venta, setVenta] = useState(sale ? sale.sale : '');
    const [address, setAddress] = useState('');
    const [unit, setUnit] = useState('');
    const [idClient, setIdClient] = useState('');
    const [client, setClient] = useState(sale ? sale.customer : '');
    const [date, setDate] = useState('');
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
        // Set the date to the current date and time
        const currentDate = new Date();
        const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')} ${String(currentDate.getHours()).padStart(2, '0')}:${String(currentDate.getMinutes()).padStart(2, '0')}:${String(currentDate.getSeconds()).padStart(2, '0')}`;
        setDate(formattedDate);
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
            <Header />
            <ScrollView style={SalesStyles.container}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Sales')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Info del cliente</Text>
                </View>
                {fromViewButton && sale && (
                    <>
                        <View style={[
                            SalesStyles.statusContainer, 
                            saleStatus === 'En espera' && { backgroundColor: '#fffa9e' }
                        ]}>
                            <Text style={SalesStyles.statusText}>{saleStatus}</Text>
                        </View>
                        <Text style={SalesStyles.message}>
                            {getStatusMessage(saleStatus)}
                        </Text>
                    </>
                )}
                <Text style={GlobalStyles.header}>Venta con contrato?</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <Picker
                        selectedValue={venta}
                        onValueChange={setVenta}
                        style={GlobalStyles.bigPicker}
                    >
                        <Picker.Item label="Sí" value="yes" />
                        <Picker.Item label="No" value="no" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Dirección de la venta</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        style={GlobalStyles.bigPicker}
                        onChangeText={setAddress}
                        value={address}
                        placeholder="Escriba aquí la dirección"
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Unidad</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        style={GlobalStyles.bigPicker}
                        onChangeText={setUnit}
                        value={unit}
                        placeholder="Escriba aquí la dirección"
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>ID Cliente apodo</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        style={GlobalStyles.bigPicker}
                        placeholder="Escriba aquí el ID del cliente"
                        value={idClient}
                        onChangeText={setIdClient}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Cliente</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Escriba aquí..."
                        value={client}
                        onChangeText={setClient}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Fecha y hora de solicitud</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        value={date}
                        style={GlobalStyles.bigPicker}
                        editable={false}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Valor sin interés</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Valor sin interés"
                        value={costWithOutTaxes}
                        keyboardType="numeric"
                        onChangeText={setCostWithOutTaxes}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Cuotas pactadas</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Cuotas pactadas"
                        value={contractAmount}
                        onChangeText={setContractAmount}
                        keyboardType="numeric"
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Tasa interés</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Tasa de interés"
                        keyboardType="numeric"
                        value={taxes}
                        onChangeText={setTaxes}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Frecuencia de pago</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Frecuencia de pago"
                        value={frequencyToPay}
                        onChangeText={setFrequencyToPay}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Tipo de venta</Text>
                <View style={SalesStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Tipo de venta"
                        value={typeOfSell}
                        onChangeText={setTypeOfSell}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
                    />
                </View>
                <Text style={GlobalStyles.header}>Estado</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <Picker
                        placeholder="Estado"
                        selectedValue={state}
                        onValueChange={setState}
                        style={GlobalStyles.bigPicker}
                    >
                        <Picker.Item label="Aumentó" value="increase" />
                        <Picker.Item label="Se Mantuvo" value="remained" />
                        <Picker.Item label="Disminuyó" value="decreased" />
                    </Picker>
                </View>
                <Text style={GlobalStyles.header}>Mora anterior</Text>
                <View style={GlobalStyles.bigPickerContainer}>
                    <TextInput
                        placeholder="Mora anterior"
                        keyboardType="numeric"
                        value={previousDebt}
                        onChangeText={setPreviousDebt}
                        style={GlobalStyles.bigPicker}
                        underlineColor="transparent"
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
            <AlertButton />
        </PaperProvider>
    );
};

export default ClientInfo;