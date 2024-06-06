import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native';
import CashClosingStyles from '../../styles/Collect/CashClosingStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../../components/Header';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';
import CashSummaryStyles from '../../styles/Collect/CashSummaryStyles';
import AlertButton from '../../components/AlertButton';

const CashClosing = ({ navigation, route }) => {
    const { closed } = route.params || {};
    const [visitedExpanded, setVisitedExpanded] = useState(false);
    const [paidExpanded, setPaidExpanded] = useState(false);
    const [notPaidExpanded, setNotPaidExpanded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [shareModalVisible, setShareModalVisible] = useState(false);
    const [value, setValue] = useState('');

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
        console.log(`Compartir como ${option}`);
    };

    return (
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('CashSummary')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={CashClosingStyles.header}>
                    <View style={[RecordHistoryStyles.subTitleContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                        <Text style={CollectStyles.subTitle}>Resumen de caja</Text>
                        <Text style={CashClosingStyles.date}>Jue/13/Jul/23</Text>
                    </View>
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

                <View style={CashClosingStyles.sectionContainer}>
                    <View style={CashClosingStyles.section1}>
                        <Text style={CashClosingStyles.sectionTitle}>Ingresos</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section2}>
                        <Text style={CashClosingStyles.sectionTitle}>Gastos</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section1}>
                        <Text style={CashClosingStyles.sectionTitle}>Recaudos</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section2}>
                        <Text style={CashClosingStyles.sectionTitle}>Retiros</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section1}>
                        <Text style={CashClosingStyles.sectionTitle}>Recaudos extra</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor a recaudar</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section2}>
                        <Text style={CashClosingStyles.sectionTitle}>Ventas nuevas</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section3}>
                        <Text style={CashClosingStyles.sectionTitle}>Recaudos totales</Text>
                        <Text style={CashClosingStyles.sectionInfoText}>Valor a recaudar</Text>
                        <Text style={CashClosingStyles.sectionValue}>39,786 USD</Text>
                    </View>
                    <View style={CashClosingStyles.section2}>
                        <Text style={CashClosingStyles.sectionTitle}></Text>
                        <Text style={CashClosingStyles.sectionValue}></Text>
                    </View>
                </View>

                <View style={CashClosingStyles.recaudoSection}>
                    <Text style={CashClosingStyles.recaudoTitle}>Recaudo</Text>
                    <Text style={CashClosingStyles.recaudoValue}>209%</Text>
                </View>

                <View style={[CashSummaryStyles.section, CashSummaryStyles.visitedSection]}>
                    <TouchableOpacity onPress={() => setVisitedExpanded(!visitedExpanded)} style={CashSummaryStyles.sectionHeader}>
                        <Text style={CashSummaryStyles.visitedTitle}>Clientes Visitados</Text>
                        <Text style={CashSummaryStyles.sectionValue}>10/10</Text>
                        <MaterialCommunityIcons name={visitedExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </TouchableOpacity>
                    {visitedExpanded && visitedClients.map(client => (
                        <Text key={client.id} style={CashSummaryStyles.clientName}>{client.name}</Text>
                    ))}
                </View>

                <View style={[CashSummaryStyles.section, CashSummaryStyles.paidSection]}>
                    <TouchableOpacity onPress={() => setPaidExpanded(!paidExpanded)} style={CashSummaryStyles.sectionHeader}>
                        <Text style={CashSummaryStyles.paymentTitle}>Clientes pagaron</Text>
                        <Text style={CashSummaryStyles.paymentValue}>6/10</Text>
                        <MaterialCommunityIcons name={paidExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </TouchableOpacity>
                    {paidExpanded && paidClients.map(client => (
                        <View key={client.id}>
                            <Text style={CashSummaryStyles.clientName}>{client.name}</Text>
                            <Text style={CashSummaryStyles.detailText}>Pagos completos: {client.completePayments}/6</Text>
                            <Text style={CashSummaryStyles.detailText}>Pagos incompletos: {client.incompletePayments}/6</Text>
                            <Text style={CashSummaryStyles.detailText}>Pagos más de una cuota: {client.installmentPayments}/6</Text>
                        </View>
                    ))}
                </View>

                <View style={[CashSummaryStyles.section, CashSummaryStyles.notPaidSection]}>
                    <TouchableOpacity onPress={() => setNotPaidExpanded(!notPaidExpanded)} style={CashSummaryStyles.sectionHeader}>
                        <Text style={CashSummaryStyles.noPaymentTitle}>Clientes no pagaron</Text>
                        <Text style={CashSummaryStyles.noPaymentValue}>4/10</Text>
                        <MaterialCommunityIcons name={notPaidExpanded ? 'chevron-up' : 'chevron-down'} size={24} color="black" />
                    </TouchableOpacity>
                    {notPaidExpanded && notPaidClients.map(client => (
                        <Text key={client.id} style={CashSummaryStyles.clientName}>{client.name}</Text>
                    ))}
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

                <Text style={GlobalStyles.header}>Valor</Text>
                <TextInput
                    style={GlobalStyles.smallInput}
                    onChangeText={setValue}
                    value={value}
                    placeholder="Valor"
                    keyboardType="numeric"
                />

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
            <AlertButton />
        </View>
    );
};

export default CashClosing;