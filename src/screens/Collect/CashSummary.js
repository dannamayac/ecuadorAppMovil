import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CashSummaryStyles from '../../styles/Collect/CashSummaryStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import Header from '../../components/Header';

const CashSummary = ({ navigation }) => {
    const [visitedExpanded, setVisitedExpanded] = useState(false);
    const [paidExpanded, setPaidExpanded] = useState(false);
    const [notPaidExpanded, setNotPaidExpanded] = useState(false);

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

    return (
        <ScrollView style={CashSummaryStyles.container}>
            <Header />
            <View style={PaymentStyles.container2}>
                <View style={PaymentStyles.headerWithLabel}>
                    <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                        <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                    </TouchableOpacity>
                    <Text style={[CashSummaryStyles.statusText, CashSummaryStyles.statusLabel]}>Abierta</Text>
                </View>
                <View style={CashSummaryStyles.header}>
                    <Text style={CashSummaryStyles.title}>Resumen de caja</Text>
                    <View style={CashSummaryStyles.headerInfo}>
                        <View style={CashSummaryStyles.infoItem}>
                            <Text style={CashSummaryStyles.infoText}>Caja actual</Text>
                            <Text style={CashSummaryStyles.infoValue}>$95.00</Text>
                        </View>
                        <View style={CashSummaryStyles.infoItem}>
                            <Text style={CashSummaryStyles.infoText}>Caja inicial</Text>
                            <Text style={CashSummaryStyles.infoValue}>$155.00</Text>
                        </View>
                    </View>
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

                <View style={CashSummaryStyles.row}>
                    <TouchableOpacity style={CashSummaryStyles.box} >
                        <Text style={CashSummaryStyles.boxTitle}>Pre ventas por aprobar</Text>
                        <View style={CashSummaryStyles.boxContent}>
                            <Text style={CashSummaryStyles.boxValue}>0</Text>
                            <MaterialCommunityIcons name="chevron-right" size={24} color="black" style={CashSummaryStyles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={CashSummaryStyles.box} >
                        <Text style={CashSummaryStyles.boxTitle}>Pre gastos por aprobar</Text>
                        <View style={CashSummaryStyles.boxContent}>
                            <Text style={CashSummaryStyles.boxValue}>0</Text>
                            <MaterialCommunityIcons name="chevron-right" size={24} color="black" style={CashSummaryStyles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={CashSummaryStyles.row}>
                    <TouchableOpacity style={CashSummaryStyles.box} onPress={() => navigation.navigate('Income')}>
                        <Text style={CashSummaryStyles.boxTitle}>Ingresos</Text>
                        <View style={CashSummaryStyles.boxContent}>
                            <Text style={CashSummaryStyles.boxValue}>39,786 USD</Text>
                            <MaterialCommunityIcons name="chevron-right" size={24} color="black" style={CashSummaryStyles.icon} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={CashSummaryStyles.box} onPress={() => navigation.navigate('Expenses')}>
                        <Text style={CashSummaryStyles.boxTitle}>Gastos</Text>
                        <View style={CashSummaryStyles.boxContent}>
                            <Text style={CashSummaryStyles.boxValue}>39,786 USD</Text>
                            <MaterialCommunityIcons name="chevron-right" size={24} color="black" style={CashSummaryStyles.icon} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={CashSummaryStyles.row}>
                    <TouchableOpacity style={CashSummaryStyles.box} onPress={() => navigation.navigate('Sales')}>
                        <Text style={CashSummaryStyles.boxTitle}>Ventas</Text>
                        <View style={CashSummaryStyles.boxContent}>
                            <Text style={CashSummaryStyles.boxValue}>39,786 USD</Text>
                            <View style={CashSummaryStyles.iconContainer}>
                                <MaterialCommunityIcons name="chevron-right" size={24} color="black" style={CashSummaryStyles.icon} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={CashSummaryStyles.fullWidthBox}>
                    <Text style={CashSummaryStyles.collectBoxTitle}>Recaudos</Text>
                    <View style={CashSummaryStyles.collectContent}>
                        <View style={CashSummaryStyles.collectColumn}>
                            <Text style={CashSummaryStyles.collectLabel}>Valor a recaudar</Text>
                            <Text style={CashSummaryStyles.collectValue}>39,786 USD</Text>
                            <Text style={CashSummaryStyles.footerPercentage}>100%</Text>
                        </View>
                        <View style={CashSummaryStyles.collectColumn}>
                            <Text style={CashSummaryStyles.collectLabel}>Valor recaudado</Text>
                            <Text style={CashSummaryStyles.collectValue}>39,786 USD</Text>
                            <Text style={CashSummaryStyles.footerPercentage}>70%</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={CashSummaryStyles.closeButton} onPress={() => navigation.navigate('CashClosing')}>
                    <Text style={CashSummaryStyles.closeButtonText}>Cerrar caja</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default CashSummary;