import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';

const RecordHistory = ({ navigation }) => {
    const initialData = [
        {
            id: 1,
            clientID: '#42465',
            clientName: 'Pedro Panadería',
            value: '$500,00',
            paymentMethod: 'Efectivo',
            transactionType: 'Desembolso'
        },
        {
            id: 2,
            clientID: '#42465',
            clientName: 'Laura Peluquería',
            value: '$15,00 - (1)',
            paymentMethod: 'Efectivo',
            transactionType: 'Recaudo'
        },
        {
            id: 3,
            clientID: '#42465',
            clientName: 'Pedro Panadería',
            value: '$0',
            paymentMethod: 'Efectivo',
            transactionType: 'Alarma'
        },
    ];

    const [data, setData] = useState(initialData);

    const renderCards = (item) => (
        <View key={item.id} style={RecordHistoryStyles.card}>
            <View style={RecordHistoryStyles.header}>
                <Text style={RecordHistoryStyles.clientID}>{item.clientID} - {item.clientName}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CollectionDetails')}>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={RecordHistoryStyles.infoContainer}>
                <Text style={RecordHistoryStyles.value}>Valor: {item.value}</Text>
                <Text style={RecordHistoryStyles.paymentMethod}>Método de pago: {item.paymentMethod}</Text>
            </View>
            <View style={RecordHistoryStyles.statusContainer}>
                <TouchableOpacity 
                    style={[
                        RecordHistoryStyles.statusButton, 
                        { backgroundColor: item.transactionType === 'Desembolso' ? '#1b2f8e' : item.transactionType === 'Recaudo' ? '#1bb546' : '#cc1515' }
                    ]}
                >
                    <Text style={RecordHistoryStyles.buttonText}>{item.transactionType}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={RecordHistoryStyles.container}>
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <Text style={RecordHistoryStyles.title}>Historial de registros (ventas/Recaudos)</Text>
            <ScrollView>
                {data.map(renderCards)}
            </ScrollView>
        </View>
    );
};

export default RecordHistory;