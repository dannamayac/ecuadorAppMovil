import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, Modal } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';
import Header from '../../components/Header';
import CollectCard from '../../components/CollectCards/CollectCard';
import { useCobro } from './CobroContext';
import AlertButton from '../../components/AlertButton';

const Collect = ({ navigation }) => {
    const { data } = useCobro();

    const [menuVisible, setMenuVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [punishModalVisible, setPunishModalVisible] = useState(false); 
    const [selectedItem, setSelectedItem] = useState(null);

    const [pendingChecked, setPendingChecked] = useState(true);
    const [paidChecked, setPaidChecked] = useState(false);
    const [noPaymentChecked, setNoPaymentChecked] = useState(true);
    const [dailyChecked, setDailyChecked] = useState(false);
    const [weeklyChecked, setWeeklyChecked] = useState(true);
    const [biWeeklyChecked, setBiWeeklyChecked] = useState(false);
    const [monthlyChecked, setMonthlyChecked] = useState(false);

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

    const handleFilterMenuToggle = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <View style={CollectStyles.container}>
            <Header />
            <View style={CollectStyles.headerButtons}>
                <TextInput style={CollectStyles.searchInput} placeholder="Buscar" />
                <TouchableOpacity style={CollectStyles.iconButton} onPress={() => navigation.navigate('RecordHistory')}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={CollectStyles.iconButton} onPress={handleFilterMenuToggle}>
                    <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 60 }}>
                {data.map(item => (
                    <CollectCard 
                        key={item.id} 
                        item={item} 
                        handleMenuOpen={handleMenuOpen} 
                        navigation={navigation} 
                    />
                ))}
            </ScrollView>
            <TouchableOpacity style={[GlobalStyles.blueButton, CollectStyles.fixedBottomButton]} onPress={() => navigation.navigate('CashSummary')}>
                <Text style={GlobalStyles.buttonText}>Resumen</Text>
            </TouchableOpacity>
            {menuVisible && (
                <TouchableOpacity style={CollectStyles.fullScreenOverlay} onPress={() => setMenuVisible(false)}>
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
            )}
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
            <AlertButton />
        </View>
    );
};

export default Collect;