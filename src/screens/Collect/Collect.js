import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
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

    const handleUpdateCobro = (title, cobroHour) => {
        const updatedData = data.map(item =>
            item.title === title ? { ...item, inCobro: true, cobroHour: cobroHour } : item
        );
        setData(updatedData);
    };

    const renderCards = (item) => (
        <View key={item.id} style={CollectStyles.card}>
            <View style={CollectStyles.header}>
                <Text style={CollectStyles.title}>{item.title}</Text>
                {item.inCobro && <MaterialCommunityIcons name="clock-outline" size={24} color="#FFD700" />}
                <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
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
                <TouchableOpacity style={[CollectStyles.statusButton, { backgroundColor: '#cc1515' }]}>
                    <Text style={GlobalStyles.buttonText}>✘</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <ScrollView style={CollectStyles.container}>
            {data.map(renderCards)}
            <TouchableOpacity style={GlobalStyles.blueButton}>
                <Text style={GlobalStyles.buttonText}>Resumen</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default Collect;