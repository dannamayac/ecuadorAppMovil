// CollectCard.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalStyles } from '../../styles/GlobalStyles';
import CollectStyles from '../../styles/Collect/CollectStyles';

const CollectCard = ({ item, handleMenuOpen, navigation, handleUpdateCobro }) => {
    return (
        <View style={CollectStyles.card}>
            <View style={CollectStyles.header}>
                <Text style={CollectStyles.subTitle}>{item.unit}</Text>
                <TouchableOpacity onPress={() => handleMenuOpen(item)}>
                    <MaterialCommunityIcons name="dots-horizontal" size={33} color="#1b2f8e" />
                </TouchableOpacity>
            </View>
            <View style={CollectStyles.header2}>
                <Text style={CollectStyles.title}>{item.title}</Text>
                {item.cobroHour ? (
                    <View style={CollectStyles.cobroHourContainer}>
                        <MaterialCommunityIcons name="clock-outline" size={20} color="#FFD700" />
                        <Text style={CollectStyles.cobroHourText}>{item.cobroHour}</Text>
                    </View>
                ) : (
                    <Text style={CollectStyles.cobroHour}>{item.cobroHour}</Text>
                )}
            </View>
            <View style={CollectStyles.infoRow}>
                <View style={CollectStyles.infoColumn}>
                    <Text style={CollectStyles.infoLabel}>Vr Cuota</Text>
                    <Text style={CollectStyles.infoValue}>{item.quotaValue}</Text>
                </View>
                <View style={CollectStyles.infoColumn}>
                    <Text style={CollectStyles.infoLabel}>Pendiente</Text>
                    <Text style={CollectStyles.infoValue}>{item.amountPending}</Text>
                </View>
                <View style={CollectStyles.infoColumn}>
                    <Text style={CollectStyles.infoLabel}>Pago</Text>
                    <Text style={CollectStyles.infoValue}>{item.lastPaymentAmount}</Text>
                </View>
            </View>
            <View style={CollectStyles.infoContainer}>
                <Text style={CollectStyles.infoText}>Fecha último recuado: {item.lastPaymentDate}</Text>
                <Text style={CollectStyles.infoText}>Mora: {item.daysLate}</Text>
            </View>
            <View style={CollectStyles.statusContainer}>
                <TouchableOpacity 
                    style={[CollectStyles.statusButton, { backgroundColor: '#1bb546' }]} 
                    onPress={() => navigation.navigate('Payment', { 
                        unit: item.unit,
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
                        unit: item.unit,
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