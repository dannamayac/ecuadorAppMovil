import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PaymentHistoryStyles from '../../styles/Collect/PaymentHistoryStyles';
import Header from '../../components/Header';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';

const PaymentHistory = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const data = [
        { id: 1, amount: '$15,00', method: 'Efectivo', status: 'Pagó' },
        { id: 2, amount: '$15,00', method: 'Efectivo', status: 'Abonó' },
        { id: 3, amount: '$15,00', method: 'Efectivo', status: 'Pagó' },
        { id: 4, amount: '$15,00', method: 'Efectivo', status: 'Pagó' },
    ];

    const openModal = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedItem(null);
    };

    const renderItem = ({ item }) => (
        <View style={PaymentHistoryStyles.card}>
            <View style={PaymentHistoryStyles.cardHeader}>
                <Text style={PaymentHistoryStyles.cardTitle}>Ingreso de caja</Text>
                <TouchableOpacity style={PaymentHistoryStyles.cardMenu} onPress={() => openModal(item)}>
                    <MaterialCommunityIcons name="dots-horizontal" size={33} color="#1b2f8e" />
                </TouchableOpacity>
            </View>
            <Text style={PaymentHistoryStyles.cardAmount}>{item.amount}</Text>
            <Text style={PaymentHistoryStyles.cardTitle}>Método de pago</Text>
            <Text style={PaymentHistoryStyles.cardAmount}>{item.method}</Text>
            <View style={PaymentHistoryStyles.statusContainer}>
                <TouchableOpacity
                    style={[
                        PaymentHistoryStyles.statusButton,
                        { backgroundColor: item.status === 'Pagó' ? '#1bb546' : '#ffcc00' }
                    ]}
                >
                    <Text style={PaymentHistoryStyles.buttonText}>{item.status}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleUpdate = () => {
        closeModal();
        navigation.navigate('EditPayment');
    };

    return (
        <View style={PaymentHistoryStyles.container}>
            <Header />
            <View style={RecordHistoryStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('RecordHistory')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={[RecordHistoryStyles.subTitleContainer, { marginBottom: 10 }]}>
                    <Text style={CollectStyles.subTitle}>Historial de cobros</Text>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={PaymentHistoryStyles.modalContainer}>
                    <View style={PaymentHistoryStyles.modalView}>
                        <TouchableOpacity onPress={handleUpdate}>
                            <Text style={PaymentHistoryStyles.modalText}>Actualizar movimiento</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={closeModal}>
                            <Text style={PaymentHistoryStyles.modalText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PaymentHistory;