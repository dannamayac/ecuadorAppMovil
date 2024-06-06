import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { LineChartGreen } from '../../components/LineChart';
import ManagementButton from '../../components/ManagementButton';
import Header from '../../components/Header';
import AlertButton from '../../components/AlertButton';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';

const GenerateBackUp = ({ navigation }) => {

    return (
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Settings')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Generar backup</Text>
            </View>
            <ManagementButton 
                title="Unidad 4347" 
                summary="39,786 USD" 
                ChartComponent={LineChartGreen} 
            />
            <TouchableOpacity style={GlobalStyles.greenButton}>
                <Text style={GlobalStyles.buttonText}>Generar backup</Text>
            </TouchableOpacity>
            </ScrollView>
            <AlertButton />
        </View>
    );
};

export default GenerateBackUp;