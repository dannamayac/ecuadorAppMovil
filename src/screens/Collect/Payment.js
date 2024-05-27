import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Image, ActivityIndicator } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../../components/Header';
import { useCobro } from './CobroContext';

const Payment = ({ route, navigation }) => {
    const { title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};
    const { handleUpdateCobro } = useCobro();
    const [selectedPayment, setSelectedPayment] = useState('immediatePayment');
    const [selectedMethod, setSelectedMethod] = useState('cash');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState('');
    const [manualPayment, setManualPayment] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [numCuotas, setNumCuotas] = useState('1');
    const [valorAPagar, setValorAPagar] = useState(quotaValue);

    useEffect(() => {
        if (!manualPayment) {
            const cuotas = parseInt(numCuotas, 10);
            const valorPorCuota = parseFloat(quotaValue.replace('$', '').replace(',', ''));
            const nuevoValorAPagar = cuotas * valorPorCuota;
            setValorAPagar(`$${nuevoValorAPagar.toFixed(2)}`);
        }
    }, [numCuotas, quotaValue, manualPayment]);

    const handleConfirm = () => {
        if (selectedPayment === 'postponeVisit') {
            if (hour) {
                handleUpdateCobro(title, hour);
            }
            navigation.navigate('Collect');
        } else {
            handleUpdateCobro(title, null, true); // Mark as paid
            navigation.navigate('Collect');
        }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.uri);
        }
    };

    return (
        <ScrollView style={PaymentStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={PaymentStyles.paymentMethods}>
                <RadioButton.Group onValueChange={value => setSelectedPayment(value)} value={selectedPayment}>
                    <View style={PaymentStyles.radioContainer}>
                        <Text>Pago inmediato</Text>
                        <RadioButton value="immediatePayment" />
                    </View>
                    <View style={PaymentStyles.radioContainer}>
                        <Text>Posponer visita</Text>
                        <RadioButton value="postponeVisit" />
                    </View>
                </RadioButton.Group>
            </View>

            {selectedPayment === 'postponeVisit' && (
                <View style={PaymentStyles.postponeSection}>
                    <View style={PaymentStyles.postponeHeader}>
                        <Text>Hora a cobrar</Text>
                        <Text style={PaymentStyles.inCobroText}>En cobro</Text>
                    </View>
                    <TextInput 
                        style={GlobalStyles.input}
                        placeholder="15:30:00"
                        value={hour}
                        onChangeText={setHour}
                    />
                </View>
            )}

            <View style={[PaymentStyles.sectionContainer, selectedPayment === 'postponeVisit' && PaymentStyles.disabledSection]}>
                <View style={PaymentStyles.header}>
                    <Text style={PaymentStyles.headerText}>Antes de continuar, confirme método de pago</Text>
                </View>

                <View style={PaymentStyles.paymentMethods}>
                    <RadioButton.Group onValueChange={value => setSelectedMethod(value)} value={selectedMethod}>
                        <View style={PaymentStyles.radioContainer}>
                            <Text>Pago Efectivo</Text>
                            <RadioButton value="cash" />
                        </View>
                        <View style={PaymentStyles.radioContainer}>
                            <Text>Transferencia B.</Text>
                            <RadioButton value="bankTransfer" />
                        </View>
                    </RadioButton.Group>
                </View>

                {selectedMethod === 'bankTransfer' && (
                    <View style={PaymentStyles.bankTransferSection}>
                        <Text>Seleccione cuenta inscrita</Text>
                        <Picker
                            selectedValue={selectedAccount}
                            onValueChange={(itemValue) => setSelectedAccount(itemValue)}
                            style={GlobalStyles.input}
                        >
                            <Picker.Item label="Seleccione cuenta inscrita" value="" />
                            <Picker.Item label="Cuenta 1" value="account1" />
                            <Picker.Item label="Cuenta 2" value="account2" />
                        </Picker>
                        <Text>Adjuntar foto comprobante de pago</Text>
                        <TouchableOpacity style={PaymentStyles.imageContainer} onPress={pickImage}>
                            <Image source={{ uri: image }} style={PaymentStyles.image} />
                            {!image && (
                                <View style={PaymentStyles.imageButtonOverlay}>
                                    <FontAwesome5 name="camera" size={20} color="white" />
                                </View>
                            )}
                            {isLoading && (
                                <ActivityIndicator size="large" color="#0000ff" style={PaymentStyles.imageButtonOverlay} />
                            )}
                        </TouchableOpacity>
                    </View>
                )}

                <View style={PaymentStyles.section}>
                    <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
                    {selectedPayment === 'immediatePayment' && <Text style={PaymentStyles.paidLabel}>Pagó</Text>}
                </View>

                <View style={PaymentStyles.section}>
                    <Text style={PaymentStyles.sectionText}>Vr Cuota: {quotaValue}</Text>
                    <Text style={PaymentStyles.sectionText}>Pendiente: {amountPending}</Text>
                    <Text style={PaymentStyles.sectionText}>Pago: {lastPaymentAmount}</Text>
                </View>

                <View style={PaymentStyles.inputContainer}>
                    <Text>Cantidad de cuotas</Text>
                    <TextInput 
                        style={GlobalStyles.input} 
                        keyboardType="numeric" 
                        value={numCuotas}
                        onChangeText={setNumCuotas}
                        editable={selectedPayment !== 'postponeVisit'} 
                    />
                </View>

                <Text style={GlobalStyles.header}>Valor a pagar</Text>
                <View style={[PaymentStyles.inputContainer, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput
                        style={[GlobalStyles.smallInput, { flex: 1 }]}
                        value={valorAPagar}
                        editable={manualPayment && selectedPayment !== 'postponeVisit'}
                        onChangeText={manualPayment ? setValorAPagar : undefined}
                    />
                    <Text>Pago manual</Text>
                    <Checkbox
                        status={manualPayment ? 'checked' : 'unchecked'}
                        onPress={() => setManualPayment(!manualPayment)}
                        color={GlobalStyles.greenButton.backgroundColor}
                        disabled={selectedPayment === 'postponeVisit'}
                    />
                </View>

                <TextInput
                    style={GlobalStyles.bigInput}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Ingrese algún comentario sobre el pago..."
                    multiline
                    editable={selectedPayment !== 'postponeVisit'}
                />
            </View>

            <TouchableOpacity style={GlobalStyles.greenButton} onPress={handleConfirm}>
                <Text style={GlobalStyles.buttonText}>{selectedPayment === 'postponeVisit' ? 'Guardar' : 'Confirmar'}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Payment;