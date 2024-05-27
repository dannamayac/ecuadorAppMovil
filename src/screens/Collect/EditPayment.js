import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import EditPaymentStyles from '../../styles/Collect/EditPaymentStyles';
import Header from '../../components/Header';

const EditPayment = ({ route, navigation }) => {
    const { item } = route.params;
    const [paymentImmediate, setPaymentImmediate] = useState(true);
    const [paymentCash, setPaymentCash] = useState(true);
    const [delayPayment, setDelayPayment] = useState(false);
    const [bankTransfer, setBankTransfer] = useState(false);
    const [valueToPay, setValueToPay] = useState('$50,00');
    const [totalQuota, setTotalQuota] = useState(false);
    const [comment, setComment] = useState('');

    const handleSave = () => {
        // Lógica para guardar el movimiento
    };

    return (
        <ScrollView style={EditPaymentStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.goBack()}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <Text style={EditPaymentStyles.title}>Historial de cobros</Text>

            <View style={EditPaymentStyles.checkboxContainer}>
                <Checkbox
                    status={paymentImmediate ? 'checked' : 'unchecked'}
                    onPress={() => setPaymentImmediate(!paymentImmediate)}
                />
                <Text style={EditPaymentStyles.checkboxLabel}>Pago inmediato</Text>
                <Checkbox
                    status={delayPayment ? 'checked' : 'unchecked'}
                    onPress={() => setDelayPayment(!delayPayment)}
                />
                <Text style={EditPaymentStyles.checkboxLabel}>Demora en el pago</Text>
            </View>

            <View style={EditPaymentStyles.checkboxContainer}>
                <Checkbox
                    status={paymentCash ? 'checked' : 'unchecked'}
                    onPress={() => setPaymentCash(!paymentCash)}
                />
                <Text style={EditPaymentStyles.checkboxLabel}>Pago Efectivo</Text>
                <Checkbox
                    status={bankTransfer ? 'checked' : 'unchecked'}
                    onPress={() => setBankTransfer(!bankTransfer)}
                />
                <Text style={EditPaymentStyles.checkboxLabel}>Transferencia B.</Text>
            </View>

            <View style={EditPaymentStyles.infoContainer}>
                <Text style={EditPaymentStyles.clientInfo}>{item.clientID}</Text>
                <Text style={EditPaymentStyles.clientName}>{item.clientName}</Text>
                <Text style={EditPaymentStyles.status}>{item.status}</Text>
            </View>

            <View style={EditPaymentStyles.detailsContainer}>
                <Text style={EditPaymentStyles.detailsText}>Vr Cuota: {item.value}</Text>
                <Text style={EditPaymentStyles.detailsText}>Pendiente: $10,00 - 3/10</Text>
                <Text style={EditPaymentStyles.detailsText}>Pago: $40,00</Text>
            </View>

            <TextInput
                style={EditPaymentStyles.input}
                value={valueToPay}
                onChangeText={setValueToPay}
                placeholder="Valor a pagar"
            />
            <View style={EditPaymentStyles.checkboxContainer}>
                <Checkbox
                    status={totalQuota ? 'checked' : 'unchecked'}
                    onPress={() => setTotalQuota(!totalQuota)}
                />
                <Text style={EditPaymentStyles.checkboxLabel}>Total cuota</Text>
            </View>

            <TextInput
                style={EditPaymentStyles.commentInput}
                value={comment}
                onChangeText={setComment}
                placeholder="Agregue algún comentario sobre el pago"
                multiline
            />

            <TouchableOpacity style={GlobalStyles.blueButton} onPress={handleSave}>
                <Text style={GlobalStyles.buttonText}>Guardar movimiento</Text>
            </TouchableOpacity>

            <TouchableOpacity style={GlobalStyles.lightBlueButton} onPress={() => navigation.goBack()}>
                <Text style={GlobalStyles.buttonText}>Eliminar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={GlobalStyles.redButton} onPress={() => navigation.goBack()}>
                <Text style={GlobalStyles.buttonText}>Cancelar edición</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default EditPayment;