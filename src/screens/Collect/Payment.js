import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput } from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from '../../components/Header';
import { useCobro } from './CobroContext';
import CollectStyles from '../../styles/Collect/CollectStyles';
import AlertButton from '../../components/AlertButton';

const Payment = ({ route, navigation }) => {
    const { unit, title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};
    const { handleUpdateCobro } = useCobro();
    const [selectedPayment, setSelectedPayment] = useState('immediatePayment');
    const [selectedMethod, setSelectedMethod] = useState('cash');
    const [description, setDescription] = useState('');
    const [hour, setHour] = useState(new Date());
    const [manualPayment, setManualPayment] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [numCuotas, setNumCuotas] = useState('1');
    const [valorAPagar, setValorAPagar] = useState(quotaValue);
    const [showTimePicker, setShowTimePicker] = useState(false);

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
                handleUpdateCobro(title, hour.toLocaleTimeString());
            }
            navigation.navigate('Collect');
        } else {
            handleUpdateCobro(title, null, true);
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
            setImage(result.assets[0].uri); // Adjusted for latest Expo ImagePicker result structure
        }
    };

    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            alert('Se requieren permisos para acceder a la cámara.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri); // Adjusted for latest Expo ImagePicker result structure
        }
    };

    const onTimeChange = (event, selectedDate) => {
        const currentDate = selectedDate || hour;
        setShowTimePicker(false);
        setHour(currentDate);
    };

    return (
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={PaymentStyles.paymentMethods}>
                    <RadioButton.Group onValueChange={value => setSelectedPayment(value)} value={selectedPayment}>
                        <View style={PaymentStyles.radioContainerRow}>
                            <View style={PaymentStyles.radioContainer}>
                                <Text>Pago inmediato</Text>
                                <RadioButton value="immediatePayment" color={'black'} />
                            </View>
                            <View style={PaymentStyles.radioContainer}>
                                <Text>Posponer visita</Text>
                                <RadioButton value="postponeVisit" color={'black'} />
                            </View>
                        </View>
                    </RadioButton.Group>
                </View>

                {selectedPayment === 'postponeVisit' && (
                    <View style={PaymentStyles.postponeSection}>
                        <View style={PaymentStyles.postponeHeader}>
                            <Text>Hora a cobrar</Text>
                            <View style={PaymentStyles.paidLabelYellow}>
                                <Text style={PaymentStyles.paidLabelText}>En cobro</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={GlobalStyles.input}>
                            <Text>{hour.toLocaleTimeString()}</Text>
                        </TouchableOpacity>
                        {showTimePicker && (
                            <DateTimePicker
                                value={hour}
                                mode="time"
                                display="default"
                                onChange={onTimeChange}
                            />
                        )}
                    </View>
                )}

                <View style={[PaymentStyles.overlay, selectedPayment === 'postponeVisit' && PaymentStyles.overlayVisible]}>
                    <View style={[PaymentStyles.sectionContainer, selectedPayment === 'postponeVisit' && PaymentStyles.disabledSection]}>
                        <View style={PaymentStyles.header}>
                            <Text style={PaymentStyles.headerText}>Antes de continuar, confirme método de pago</Text>
                        </View>

                        <View style={PaymentStyles.paymentMethods}>
                            <RadioButton.Group onValueChange={value => setSelectedMethod(value)} value={selectedMethod}>
                                <View style={PaymentStyles.radioContainerRow}>
                                    <View style={PaymentStyles.radioContainer}>
                                        <Text>Pago Efectivo</Text>
                                        <RadioButton value="cash" color={'black'} />
                                    </View>
                                    <View style={PaymentStyles.radioContainer}>
                                        <Text>Transferencia B.</Text>
                                        <RadioButton value="bankTransfer" color={'black'} />
                                    </View>
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
                                    {image ? (
                                        <Image source={{ uri: image }} style={PaymentStyles.image} />
                                    ) : (
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
                            <View style={PaymentStyles.unitTitleContainer}>
                                <Text style={CollectStyles.subTitle}>{unit ? unit : 'Unidad no disponible'}</Text>
                                {selectedPayment === 'postponeVisit' ? (
                                    <View style={PaymentStyles.paidLabelYellow}>
                                        <Text style={PaymentStyles.paidLabelText}>En cobro</Text>
                                    </View>
                                ) : (
                                    <View style={PaymentStyles.paidLabel}>
                                        <Text style={PaymentStyles.paidLabelText}>Pagó</Text>
                                    </View>
                                )}
                            </View>
                            <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
                        </View>

                        <View style={CollectStyles.infoRow}>
                            <View style={CollectStyles.infoColumn}>
                                <Text style={CollectStyles.infoLabel}>Vr Cuota</Text>
                                <Text style={CollectStyles.infoValue}>{quotaValue}</Text>
                            </View>
                            <View style={CollectStyles.infoColumn}>
                                <Text style={CollectStyles.infoLabel}>Pendiente</Text>
                                <Text style={CollectStyles.infoValue}>{amountPending}</Text>
                            </View>
                            <View style={CollectStyles.infoColumn}>
                                <Text style={CollectStyles.infoLabel}>Pago</Text>
                                <Text style={CollectStyles.infoValue}>{lastPaymentAmount}</Text>
                            </View>
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
                            <Text style={PaymentStyles.manualPaymentText}>Pago manual</Text>
                            <Checkbox
                                status={manualPayment ? 'checked' : 'unchecked'}
                                onPress={() => setManualPayment(!manualPayment)}
                                color={'black'}
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
                </View>

                <TouchableOpacity style={GlobalStyles.greenButton} onPress={handleConfirm}>
                    <Text style={GlobalStyles.buttonText}>{selectedPayment === 'postponeVisit' ? 'Guardar' : 'Confirmar'}</Text>
                </TouchableOpacity>
                </ScrollView>
            <AlertButton />
        </View>
    );
}

export default Payment;