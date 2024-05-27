import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal } from 'react-native';
import CashClosingStyles from '../../styles/Collect/CashClosingStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import { GlobalStyles } from '../../styles/GlobalStyles';

const CashClosing = ({ navigation, route }) => {
    const { closed } = route.params || {};
    const [visitedExpanded, setVisitedExpanded] = useState(false);
    const [paidExpanded, setPaidExpanded] = useState(false);
    const [notPaidExpanded, setNotPaidExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [shareModalVisible, setShareModalVisible] = useState(false);

    useEffect(() => {
        if (closed) {
            setModalVisible(true);
        }
    }, [closed]);

    const visitedClients = [
        { id: 1, name: 'Pedro Panadería', status: 'visited' },
        { id: 2, name: 'Laura Peluquería', status: 'visited' },
    ];

    const paidClients = [
        { id: 1, name: 'Pedro Panadería', status: 'paid', completePayments: 3, incompletePayments: 1, installmentPayments: 2 },
    ];

    const notPaidClients = [
        { id: 2, name: 'Laura Peluquería', status: 'notPaid' },
    ];

    const navigateToDetails = (title) => {
        navigation.navigate('DetailView', { title });
    };

    const closeCashRegister = () => {
        setModalVisible(true);
    };

    const cancelClose = () => {
        setModalVisible(false);
    };

    const shareCashRegister = () => {
        setShareModalVisible(true);
    };

    const closeShareModal = () => {
        setShareModalVisible(false);
    };

    const handleShareOption = (option) => {
        setShareModalVisible(false);
        // Implementar la lógica para cada opción de compartir
        console.log(`Compartir como ${option}`);
    };

    return (
        <ScrollView style={CashClosingStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={CashClosingStyles.header}>
                <Text style={CashClosingStyles.title}>Resumen de caja</Text>
                <Text style={CashClosingStyles.date}>Jue/13/Jul/23</Text>
                {closed && <Text style={[CashClosingStyles.statusText, CashClosingStyles.statusLabel]}>Cerrada</Text>}
            </View>

            <View style={CashClosingStyles.summary}>
                <View style={CashClosingStyles.summaryRow}>
                    <Text style={CashClosingStyles.summaryLabel}>Caja actual</Text>
                    <Text style={CashClosingStyles.summaryValue}>$00.00</Text>
                </View>
                <View style={CashClosingStyles.summaryRow}>
                    <Text style={CashClosingStyles.summaryLabel}>Caja inicial</Text>
                    <Text style={CashClosingStyles.summaryValue}>$00.00</Text>
                </View>
            </View>

            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Ingresos</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Gastos</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Recaudos</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Retiros</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Recaudos extra</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Ventas nuevas</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>
            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Recaudos totales</Text>
                <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
            </View>

            <View style={CashClosingStyles.recaudoSection}>
                <Text style={CashClosingStyles.recaudoTitle}>Recaudo</Text>
                <Text style={CashClosingStyles.recaudoValue}>209%</Text>
            </View>

            <View style={CashClosingStyles.section}>
                <Text style={CashClosingStyles.sectionTitle}>Clientes visitados</Text>
                <Text style={CashClosingStyles.sectionValue}>2/2</Text>
            </View>

            <View style={CashClosingStyles.clientsSection}>
                <Text style={CashClosingStyles.clientsTitle}>Clientes pagaron</Text>
                <Text style={CashClosingStyles.clientsValue}>6/10</Text>
                <View style={CashClosingStyles.clientsDetails}>
                    <Text style={CashClosingStyles.detailText}>Pagos completos</Text>
                    <Text style={CashClosingStyles.detailValue}>3/6</Text>
                </View>
                <View style={CashClosingStyles.clientsDetails}>
                    <Text style={CashClosingStyles.detailText}>Pagos incompletos</Text>
                    <Text style={CashClosingStyles.detailValue}>1/6</Text>
                </View>
                <View style={CashClosingStyles.clientsDetails}>
                    <Text style={CashClosingStyles.detailText}>Pagos más de una cuota</Text>
                    <Text style={CashClosingStyles.detailValue}>2/6</Text>
                </View>
            </View>

            <View style={CashClosingStyles.clientsSection}>
                <Text style={CashClosingStyles.clientsTitle}>Clientes no pagaron</Text>
                <Text style={CashClosingStyles.clientsValue}>4/10</Text>
            </View>

            <View style={CashClosingStyles.row}>
                <View style={CashClosingStyles.box}>
                    <Text style={CashClosingStyles.boxTitle}>Pre ventas por aprobar</Text>
                    <Text style={CashClosingStyles.boxValue}>0</Text>
                </View>
                <View style={CashClosingStyles.box}>
                    <Text style={CashClosingStyles.boxTitle}>Pre gastos por aprobar</Text>
                    <Text style={CashClosingStyles.boxValue}>0</Text>
                </View>
            </View>

            <View style={CashClosingStyles.valueInput}>
                <Text style={CashClosingStyles.valueLabel}>Valor</Text>
                <Text style={CashClosingStyles.valueText}>0</Text>
            </View>

            <TouchableOpacity style={CashClosingStyles.closeButton} onPress={closed ? shareCashRegister : closeCashRegister}>
                <Text style={CashClosingStyles.closeButtonText}>{closed ? 'Compartir' : 'Cerrar caja'}</Text>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={CashClosingStyles.modalContainer}>
                    <View style={CashClosingStyles.modalView}>
                        <Text style={CashClosingStyles.modalText}>¿Está seguro que desea cerrar la caja?</Text>
                        <View style={CashClosingStyles.buttonContainer}>
                            <TouchableOpacity
                                style={[CashClosingStyles.button, CashClosingStyles.buttonNo]}
                                onPress={cancelClose}
                            >
                                <Text style={CashClosingStyles.textStyle}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[CashClosingStyles.button, CashClosingStyles.buttonYes]}
                                onPress={() => navigation.navigate('PhotoAuthentication')}
                            >
                                <Text style={CashClosingStyles.textStyle}>Si</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={shareModalVisible}
                onRequestClose={closeShareModal}
            >
                <View style={CashClosingStyles.shareModalContainer}>
                    <View style={CashClosingStyles.shareModalView}>
                        <TouchableOpacity
                            style={CashClosingStyles.shareOption}
                            onPress={() => handleShareOption('image')}
                        >
                            <MaterialCommunityIcons name="image" size={32} color="blue" />
                            <Text style={CashClosingStyles.shareOptionText}>Imagen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={CashClosingStyles.shareOption}
                            onPress={() => handleShareOption('file-download-outline')}
                        >
                            <MaterialCommunityIcons name="file-download-outline" size={32} color="red" />
                            <Text style={CashClosingStyles.shareOptionText}>PDF</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={CashClosingStyles.shareOption}
                            onPress={() => handleShareOption('more')}
                        >
                            <MaterialCommunityIcons name="dots-horizontal" size={32} color="gray" />
                            <Text style={CashClosingStyles.shareOptionText}>Más</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

export default CashClosing;