import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import Header from '../../components/Header';
import { useCobro } from './CobroContext';

const NoPayment = ({ route, navigation }) => {
    const { title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};
    const { handleUpdateCobro } = useCobro();
    const [description, setDescription] = useState('');
    const [reason, setReason] = useState('');

    const handleConfirm = () => {
        handleUpdateCobro(title, null, false, true);
        navigation.navigate('Collect');
    };

    return (
        <ScrollView style={PaymentStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={PaymentStyles.sectionContainer}>
                <View style={PaymentStyles.headerWithLabel}>
                    <Text style={GlobalStyles.title}>{title}</Text>
                    <Text style={[PaymentStyles.statusText, PaymentStyles.noPaymentLabel]}>No pagó</Text>
                </View>

                <View style={PaymentStyles.section}>
                    <Text style={PaymentStyles.sectionText}>Vr Cuota: {quotaValue}</Text>
                    <Text style={PaymentStyles.sectionText}>Pendiente: {amountPending}</Text>
                    <Text style={PaymentStyles.sectionText}>Pago: {lastPaymentAmount}</Text>
                </View>

                <View style={PaymentStyles.inputContainer}>
                    <Text>Motivo de no pago</Text>
                    <Picker
                        selectedValue={reason}
                        onValueChange={(itemValue) => setReason(itemValue)}
                        style={GlobalStyles.bigPicker}
                    >
                        <Picker.Item label="Falta de dinero" value="falta_dinero" />
                        <Picker.Item label="Otro motivo" value="otro_motivo" />
                    </Picker>
                </View>

                <TextInput
                    style={GlobalStyles.bigInput}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Agregue algún comentario sobre el pago..."
                    multiline
                />
            </View>

            <TouchableOpacity style={GlobalStyles.greenButton} onPress={handleConfirm}>
                <Text style={GlobalStyles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default NoPayment;