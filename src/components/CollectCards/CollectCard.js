import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';

const CollectCard = ({ item, handleMenuOpen, navigation, handleUpdateCobro }) => {
    return (
        <View style={CollectStyles.card}>
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
                    Fecha de pago: {item.nextPaymentDate} {item.cobroHour && <Text style={CollectStyles.cobroHour}>{item.cobroHour}</Text>}
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
                    })}
                >
                    <Text style={GlobalStyles.buttonText}>✔</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[CollectStyles.statusButton, { backgroundColor: '#cc1515' }]}
                    onPress={() => navigation.navigate('NoPayment', { 
                        title: item.title, 
                        quotaValue: item.quotaValue, 
                        amountPending: item.amountPending, 
                        lastPaymentAmount: item.lastPaymentAmount, 
                        handleUpdateCobro 
                    })}
                >
                    <Text style={GlobalStyles.buttonText}>✘</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CollectCard;