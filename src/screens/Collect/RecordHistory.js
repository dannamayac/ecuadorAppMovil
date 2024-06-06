import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import RecordHistoryStyles from '../../styles/Collect/RecordHistoryStyles';
import Header from '../../components/Header';
import CollectStyles from '../../styles/Collect/CollectStyles';
import AlertButton from '../../components/AlertButton';

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
            transactionType: 'No pagó'
        },
    ];

    const [data, setData] = useState(initialData);

    const renderCards = (item) => (
        <View key={item.id} style={RecordHistoryStyles.card} >
            <View style={RecordHistoryStyles.header}>
                <Text style={RecordHistoryStyles.clientID}>{item.clientID} - {item.clientName}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('CollectionDetails')}>
                    <MaterialCommunityIcons name="dots-horizontal" size={33} color="#1b2f8e" />
                </TouchableOpacity>
            </View>
            <View style={RecordHistoryStyles.infoContainer}>
                <Text style={RecordHistoryStyles.value}>Valor</Text>
                <Text style={RecordHistoryStyles.valueText}>{item.value}</Text>
                <Text style={RecordHistoryStyles.paymentMethod}>Método de pago</Text>
                <Text style={RecordHistoryStyles.paymentMethodText}>{item.paymentMethod}</Text>
            </View>
            <View style={RecordHistoryStyles.statusContainer}>
                <TouchableOpacity
                    style={[
                        RecordHistoryStyles.statusButton,
                        { backgroundColor: item.transactionType === 'Desembolso' ? '#1b2f8e' : item.transactionType === 'Recaudo' ? '#1bb546' : '#cc1515' }
                    ]}
                    onPress={() => navigation.navigate('PaymentHistory')}
                >
                    <Text style={RecordHistoryStyles.buttonText}>{item.transactionType}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={RecordHistoryStyles.container}>
            <Header />
            <View style={RecordHistoryStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Collect')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={RecordHistoryStyles.subTitleContainer}>
                    <Text style={CollectStyles.subTitle}>Historial de registros (ventas/Recaudos)</Text>
                </View>
            </View>
            <ScrollView>
                {data.map(renderCards)}
            </ScrollView>
            <AlertButton />
        </View>
    );
};

export default RecordHistory;