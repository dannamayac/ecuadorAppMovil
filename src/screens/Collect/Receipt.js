import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import { FontAwesome5 } from '@expo/vector-icons';

const Receipt = ({ route, navigation }) => {
    const { title, quotaValue, amountPending, lastPaymentAmount, valorAPagar: initialValorAPagar, numCuotas: initialNumCuotas, description: initialDescription } = route.params || {};
    const [description, setDescription] = useState(initialDescription || '');
    const [manualPayment, setManualPayment] = useState(false);
    const [numCuotas, setNumCuotas] = useState(initialNumCuotas || '1');
    const [valorAPagar, setValorAPagar] = useState(initialValorAPagar || quotaValue);

    useEffect(() => {
        if (!manualPayment) {
            // Calcular el valor a pagar basado en el número de cuotas
            const cuotas = parseInt(numCuotas, 10);
            const valorPorCuota = parseFloat(quotaValue.replace('$', '').replace(',', ''));
            const nuevoValorAPagar = cuotas * valorPorCuota;
            setValorAPagar(`$${nuevoValorAPagar.toFixed(2)}`);
        }
    }, [numCuotas, quotaValue, manualPayment]);

    return (
        <ScrollView style={PaymentStyles.container}>
            <View style={PaymentStyles.sectionContainer}>
                <View style={PaymentStyles.section}>
                    <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
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
                        editable={!manualPayment}
                    />
                </View>

                <Text style={GlobalStyles.header}>Valor a pagar</Text>
                <View style={[PaymentStyles.inputContainer, { flexDirection: 'row', alignItems: 'center' }]}>
                    <TextInput
                        style={[GlobalStyles.smallInput, { flex: 1 }]}
                        value={valorAPagar}
                        editable={manualPayment}
                        onChangeText={manualPayment ? setValorAPagar : undefined}
                    />
                    <Text>Pago manual</Text>
                    <Checkbox
                        status={manualPayment ? 'checked' : 'unchecked'}
                        onPress={() => setManualPayment(!manualPayment)}
                        color={GlobalStyles.greenButton.backgroundColor}
                    />
                </View>

                <TextInput
                    style={GlobalStyles.bigInput}
                    onChangeText={setDescription}
                    value={description}
                    placeholder="Ingrese algún comentario sobre el pago..."
                    multiline
                />
            </View>
            <View style={PaymentStyles.optionsContainer}>
                <TouchableOpacity style={PaymentStyles.optionButton}>
                    <FontAwesome5 name="image" size={24} color="blue" />
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.optionButton}>
                    <FontAwesome5 name="file-pdf" size={24} color="red" />
                </TouchableOpacity>
                <TouchableOpacity style={PaymentStyles.optionButton}>
                    <FontAwesome5 name="ellipsis-h" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Receipt;