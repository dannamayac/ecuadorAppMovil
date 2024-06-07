import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import AlertButton from '../../components/AlertButton';

const AboutHelp = ({ navigation }) => {

    return (
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
                <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Settings')}>
                    <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                </TouchableOpacity>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Sobre de/Ayuda</Text>
                </View>
            </ScrollView>
            <AlertButton />
        </View>
    );
};

export default AboutHelp;