import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import InfoClientCollectStyles from '../../styles/Collect/InfoClientCollectStyles';

const InfoClientCollect = ({ route, navigation }) => {
    const { title, quotaValue, amountPending, lastPaymentAmount } = route.params || {};

    return (
        <ScrollView style={PaymentStyles.container}>
            <View style={PaymentStyles.sectionContainer}>
                <View style={InfoClientCollectStyles.headerContainer}>
                    <Text style={GlobalStyles.title}>{title ? title : 'Título no disponible'}</Text>
                    <View style={InfoClientCollectStyles.medalContainer} onPress={() => navigation.navigate('ClientLevelHistory')}>
                        <Image
                            source={require('../../assets/Group 239046.png')}
                            style={InfoClientCollectStyles.medalImage}
                        />
                        <Text style={InfoClientCollectStyles.medalText}>Nivel Plata</Text>
                        <TouchableOpacity style={InfoClientCollectStyles.infoContainer} >
                            <Text style={InfoClientCollectStyles.infoIcon}>i</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={PaymentStyles.section}>
                    <Text style={PaymentStyles.sectionText}>Vr Cuota: {quotaValue}</Text>
                    <Text style={PaymentStyles.sectionText}>Pendiente: {amountPending}</Text>
                    <Text style={PaymentStyles.sectionText}>Pago: {lastPaymentAmount}</Text>
                </View>
                <View style={InfoClientCollectStyles.addressContainer}>
                    <Text style={GlobalStyles.title}>Dirección principal de cobro</Text>
                    <Text style={GlobalStyles.normalFont}>Cra 4 #28-08 / Chapinero, Bogotá</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default InfoClientCollect;