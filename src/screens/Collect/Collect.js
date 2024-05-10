import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CollectStyles from '../../styles/Collect/CollectStyles';

const Collect = ({ navigation }) => {
    const data = [
        {
            id: 1,
            title: 'Pedro Panaderia',
            amountPending: '$50.00',
            lastPaymentDate: '03/06/2023',
            lastPaymentAmount: '$10.00 - 3/10',
            totalDebt: '$40.00',
            paymentStatus: 'Semanal',
            nextPaymentDate: '03/08/2023',
            nextPaymentTime: '13:00 pm',
            daysLate: 0,
        },
        {
            id: 2,
            title: 'Laura Peluqueria',
            amountPending: '$10.00',
            lastPaymentDate: '03/06/2023',
            lastPaymentAmount: '$70.00 - 2/5',
            totalDebt: '$30.00',
            paymentStatus: 'Pendiente',
            nextPaymentDate: '03/08/2023',
            nextPaymentTime: '13:00 pm',
            daysLate: 2,
        },
    ];

    const renderCards = (item) => (
        <View key={item.id} style={CollectStyles.card}>
            <View style={CollectStyles.header}>
                <Text style={CollectStyles.title}>{item.title}</Text>
                <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </View>
            <View style={CollectStyles.statusContainer}>
                <Text style={CollectStyles.subtext}>Vr Cuota Pendiente: {item.amountPending}</Text>
                <Text style={CollectStyles.subtext}>Pago: {item.lastPaymentAmount}</Text>
            </View>
            <View style={CollectStyles.infoContainer}>
                <Text style={CollectStyles.infoText}>Último recuado: {item.lastPaymentDate}</Text>
                <Text style={CollectStyles.infoText}>Fecha de pago: {item.nextPaymentDate} {item.nextPaymentTime}</Text>
                <Text style={CollectStyles.infoText}>Días en mora: {item.daysLate}</Text>
            </View>
            <View style={CollectStyles.statusContainer}>
                <TouchableOpacity style={[CollectStyles.statusButton, { backgroundColor: '#4CAF50' }]}>
                    <Text style={CollectStyles.statusText}>✔</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[CollectStyles.statusButton, { backgroundColor: '#F44336' }]}>
                    <Text style={CollectStyles.statusText}>✘</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={CollectStyles.summaryButton}>
                <Text style={CollectStyles.summaryText}>Resumen</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={CollectStyles.container}>
            {data.map(renderCards)}
        </ScrollView>
    );
};

export default Collect;