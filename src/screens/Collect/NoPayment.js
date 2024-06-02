import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import Header from '../../components/Header';
import { useCobro } from './CobroContext';
import CollectStyles from '../../styles/Collect/CollectStyles';

const NoPayment = ({ route, navigation }) => {
    const { unit, title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};
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
            <View style={PaymentStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={PaymentStyles.sectionContainer}>
                    <View style={PaymentStyles.section}>
                        <View style={PaymentStyles.unitTitleContainer}>
                            <Text style={CollectStyles.subTitle}>{unit ? unit : 'Unidad no disponible'}</Text>
                            <Text style={[PaymentStyles.statusText, PaymentStyles.noPaymentLabel]}>No pagó</Text>
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
                        <Text >Motivo de no pago</Text>
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
            </View>
        </ScrollView>
    );
};

export default NoPayment;