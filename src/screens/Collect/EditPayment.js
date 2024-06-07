import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import EditPaymentStyles from '../../styles/Collect/EditPaymentStyles';
import Header from '../../components/Header';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import AlertButton from '../../components/AlertButton';

const EditPayment = ({ navigation }) => {
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
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('PaymentHistory')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={RecordHistoryStyles.subTitleContainer}>
                    <Text style={CollectStyles.subTitle}>Historial de cobros</Text>
                </View>

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

                <View style={PaymentStyles.section}>
                    <View style={PaymentStyles.unitTitleContainer}>
                        <Text style={CollectStyles.subTitle}>Unidad no disponible</Text>
                        <View style={PaymentStyles.paidLabel}>
                            <Text style={PaymentStyles.paidLabelText}>Pagó</Text>
                        </View>
                    </View>
                    <Text style={GlobalStyles.title}>Título no disponible</Text>
                </View>

                <View style={CollectStyles.infoRow}>
                    <View style={CollectStyles.infoColumn}>
                        <Text style={CollectStyles.infoLabel}>Vr Cuota</Text>
                        <Text style={CollectStyles.infoValue}>$00.00</Text>
                    </View>
                    <View style={CollectStyles.infoColumn}>
                        <Text style={CollectStyles.infoLabel}>Pendiente</Text>
                        <Text style={CollectStyles.infoValue}>$00.00</Text>
                    </View>
                    <View style={CollectStyles.infoColumn}>
                        <Text style={CollectStyles.infoLabel}>Pago</Text>
                        <Text style={CollectStyles.infoValue}>$00.00</Text>
                    </View>
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
            <AlertButton />
        </View>
    );
};

export default EditPayment;