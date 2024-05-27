import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PaymentHistoryStyles from '../../styles/Collect/PaymentHistoryStyles';
import Header from '../../components/Header';

const PaymentHistory = ({ route, navigation }) => {
    const { item } = route.params;
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
            <Text style={PaymentHistoryStyles.cardTitle}>Ingreso de caja</Text>
            <Text style={PaymentHistoryStyles.cardAmount}>{item.amount}</Text>
            <Text style={PaymentHistoryStyles.cardMethod}>{item.method}</Text>
            <TouchableOpacity style={PaymentHistoryStyles.cardMenu} onPress={() => openModal(item)}>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );

    const handleUpdate = () => {
        closeModal();
        navigation.navigate('EditPayment', { item: selectedItem });
    };

    return (
        <View style={PaymentHistoryStyles.container}>
            <Header />
            <TouchableOpacity style={PaymentHistoryStyles.backButton} onPress={() => navigation.goBack()}>
                <Text style={PaymentHistoryStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <Text style={PaymentHistoryStyles.title}>Historial de cobros</Text>
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