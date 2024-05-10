import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const DownloadData = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
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