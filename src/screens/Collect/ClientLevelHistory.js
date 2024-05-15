import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import InfoClientCollectStyles from '../../styles/Collect/InfoClientCollectStyles';

const ClientLevelHistory = ({ route }) => {
    const { title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};

    return (
        <ScrollView style={PaymentStyles.container}>
            <View style={PaymentStyles.sectionContainer}>
                <View style={InfoClientCollectStyles.headerContainer}>
                    <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
                </View>

                <Text style={GlobalStyles.title}>Historial de niveles</Text>
                
            </View>  
        </ScrollView>
    );
};

export default ClientLevelHistory;