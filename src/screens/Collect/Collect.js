import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';

const Collect = ({ navigation }) => {
    const initialData = [
        {
            id: 1,
            title: 'Pedro Panaderia',
            quotaValue: '$50',
            amountPending: '$10.00 - 3/10',
            lastPaymentDate: '03/06/2023',
            lastPaymentAmount: '$50',
            totalDebt: '$40.00',
            paymentStatus: 'Semanal',
            nextPaymentDate: '03/08/2023',
            nextPaymentTime: '13:00 pm',
            daysLate: 0,
            inCobro: false,
            cobroHour: ''
        },
        {
            id: 2,
            title: 'Laura Peluqueria',
            quotaValue: '$50',
            amountPending: '$70.00 - 2/5',
            lastPaymentDate: '03/06/2023',
            lastPaymentAmount: '$10',
            totalDebt: '$30.00',
            paymentStatus: 'Pendiente',
            nextPaymentDate: '03/08/2023',
            nextPaymentTime: '13:00 pm',
            daysLate: 2,
            inCobro: false,
            cobroHour: ''
        },
    ];

    const [data, setData] = useState(initialData);
    const [menuVisible, setMenuVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [punishModalVisible, setPunishModalVisible] = useState(false); // Nuevo estado para la nueva modal
    const [selectedItem, setSelectedItem] = useState(null);

    const [pendingChecked, setPendingChecked] = useState(true);
    const [paidChecked, setPaidChecked] = useState(false);
    const [noPaymentChecked, setNoPaymentChecked] = useState(true);
    const [dailyChecked, setDailyChecked] = useState(false);
    const [weeklyChecked, setWeeklyChecked] = useState(true);
    const [biWeeklyChecked, setBiWeeklyChecked] = useState(false);
    const [monthlyChecked, setMonthlyChecked] = useState(false);

    const handleUpdateCobro = (title, cobroHour) => {
        const updatedData = data.map(item =>
            item.title === title ? { ...item, inCobro: true, cobroHour: cobroHour } : item
        );
        setData(updatedData);
    };

    const handleMenuOpen = (item) => {
        setSelectedItem(item);
        setModalVisible(true);
    };

    const handleMenuClose = () => {
        setModalVisible(false);
    };

    const handlePunishMenuOpen = (item) => {
        setSelectedItem(item);
        setPunishModalVisible(true);
    };

    const handlePunishMenuClose = () => {
        setPunishModalVisible(false);
    };

    const renderCards = (item) => (
        <View key={item.id} style={CollectStyles.card}>
            <View style={CollectStyles.header}>
                <Text style={CollectStyles.title}>{item.title}</Text>
                {item.inCobro && <MaterialCommunityIcons name="clock-outline" size={24} color="#FFD700" />}
                <TouchableOpacity onPress={() => handleMenuOpen(item)}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={CollectStyles.statusContainer}>
                <Text style={CollectStyles.subtext}>Vr Cuota: {item.quotaValue}</Text>
                <Text style={CollectStyles.subtext}>Pendiente: {item.amountPending}</Text>
                <Text style={CollectStyles.subtext}>Pago: {item.lastPaymentAmount}</Text>
            </View>
            <View style={CollectStyles.infoContainer}>
                <Text style={CollectStyles.infoText}>Último recuado: {item.lastPaymentDate}</Text>
                <Text style={CollectStyles.infoText}>
                    Fecha de pago: {item.nextPaymentDate} {item.cobroHour && <Text style={CollectStyles.cobroHour}>{item.cobroHour} pm</Text>}
                </Text>
                <Text style={CollectStyles.infoText}>Días en mora: {item.daysLate}</Text>
            </View>
            <View style={CollectStyles.statusContainer}>
                <TouchableOpacity 
                    style={[CollectStyles.statusButton, { backgroundColor: '#1bb546' }]} 
                    onPress={() => navigation.navigate('Payment', { 
                        title: item.title, 
                        quotaValue: item.quotaValue, 
                        amountPending: item.amountPending, 
                        lastPaymentAmount: item.lastPaymentAmount, 
                        handleUpdateCobro 
                    })}>
                    <Text style={GlobalStyles.buttonText}>✔</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[CollectStyles.statusButton, { backgroundColor: '#cc1515' }]}
                    onPress={() => navigation.navigate('NoPayment', { 
                        title: item.title, 
                        quotaValue: item.quotaValue, 
                        amountPending: item.amountPending, 
                        lastPaymentAmount: item.lastPaymentAmount 
                    })}
                >
                    <Text style={GlobalStyles.buttonText}>✘</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const handleFilterMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <View style={CollectStyles.container}>
            <View style={CollectStyles.headerButtons}>
                <TextInput style={CollectStyles.searchInput} placeholder="Buscar" />
                <TouchableOpacity style={CollectStyles.iconButton} onPress={() => navigation.navigate('RecordHistory')}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={CollectStyles.iconButton} onPress={handleFilterMenuToggle}>
                    <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView>
                {data.map(renderCards)}
                <TouchableOpacity style={GlobalStyles.blueButton} onPress={() => navigation.navigate('CashSummary')}>
                    <Text style={GlobalStyles.buttonText}>Resumen</Text>
                </TouchableOpacity>
            </ScrollView>
            <Modal
                visible={menuVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableOpacity style={CollectStyles.modalOverlay} onPress={() => setMenuVisible(false)}>
                    <View style={CollectStyles.filterMenuContainer}>
                        <View style={CollectStyles.filterMenu}>
                            <Text style={CollectStyles.filterTitle}>Estados de pago</Text>
                            <View style={CollectStyles.filterOption}>
                                <Text>Pendientes (2)</Text>
                                <TouchableOpacity onPress={() => setPendingChecked(!pendingChecked)}>
                                    <MaterialCommunityIcons name={pendingChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={CollectStyles.filterOption}>
                                <Text>Pago (0)</Text>
                                <TouchableOpacity onPress={() => setPaidChecked(!paidChecked)}>
                                    <MaterialCommunityIcons name={paidChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={CollectStyles.filterOption}>
                                <Text>No pagos (3)</Text>
                                <TouchableOpacity onPress={() => setNoPaymentChecked(!noPaymentChecked)}>
                                    <MaterialCommunityIcons name={noPaymentChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <Text style={CollectStyles.filterTitle}>Frecuencia de pago</Text>
                            <View style={CollectStyles.filterOption}>
                                <Text>Diario</Text>
                                <TouchableOpacity onPress={() => setDailyChecked(!dailyChecked)}>
                                    <MaterialCommunityIcons name={dailyChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={CollectStyles.filterOption}>
                                <Text>Semanal</Text>
                                <TouchableOpacity onPress={() => setWeeklyChecked(!weeklyChecked)}>
                                    <MaterialCommunityIcons name={weeklyChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={CollectStyles.filterOption}>
                                <Text>Quincenal</Text>
                                <TouchableOpacity onPress={() => setBiWeeklyChecked(!biWeeklyChecked)}>
                                    <MaterialCommunityIcons name={biWeeklyChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <View style={CollectStyles.filterOption}>
                                <Text>Mensual</Text>
                                <TouchableOpacity onPress={() => setMonthlyChecked(!monthlyChecked)}>
                                    <MaterialCommunityIcons name={monthlyChecked ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={handleMenuClose}
            >
                <TouchableOpacity style={CollectStyles.modalOverlay} onPress={handleMenuClose}>
                    <View style={CollectStyles.menuContainer}>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Editar / Renovar</Text></TouchableOpacity>
                        <TouchableOpacity 
                            style={CollectStyles.menuItem} 
                            onPress={() => {
                                navigation.navigate('InfoClientCollect', {
                                    title: selectedItem.title,
                                    quotaValue: selectedItem.quotaValue,
                                    amountPending: selectedItem.amountPending,
                                    lastPaymentAmount: selectedItem.lastPaymentAmount
                                });
                                handleMenuClose();
                            }}>
                            <Text>Ver info del cliente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Ver detalle</Text></TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Info de cliente</Text></TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Histórico de ventas</Text></TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Histórico de pagos</Text></TouchableOpacity>
                        <TouchableOpacity 
                            style={CollectStyles.menuItem}
                            onPress={() => {
                                handlePunishMenuOpen(selectedItem);
                                handleMenuClose();
                            }}
                        >
                            <Text>Generar castigo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Programar alarma</Text></TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Ver fotos</Text></TouchableOpacity>
                        <TouchableOpacity style={CollectStyles.menuItem}><Text>Adjuntar fotos</Text></TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </Modal>
            <Modal
                visible={punishModalVisible}
                transparent={true}
                animationType="fade"
                onRequestClose={handlePunishMenuClose}
            >
                <View style={CollectStyles.modalOverlay}>
                    <View style={CollectStyles.punishContainer}>
                        <Text style={CollectStyles.punishTitle}>Solicitud de castigo de cartera</Text>
                        <Text style={CollectStyles.punishText}>
                            A continuación generará una solicitud de castigo de cartera para el cliente: {selectedItem?.title}.
                        </Text>
                        <TextInput
                            style={CollectStyles.punishInput}
                            placeholder="Motivo de la solicitud, escriba aquí..."
                            multiline
                        />
                        <TouchableOpacity style={CollectStyles.punishButton} onPress={handlePunishMenuClose}>
                            <Text style={GlobalStyles.buttonText}>Enviar solicitud</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default Collect;