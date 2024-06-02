import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';

const DownloadData = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <Header />
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Nueva venta</Text>
            </View>
            <TouchableOpacity style={GlobalStyles.blueButton}>
                <Text style={GlobalStyles.buttonText}>Descargar Excel</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default DownloadData;