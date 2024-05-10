import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import { LineChartGreen } from '../../components/LineChart';
import ManagementButton from '../../components/ManagementButton';

const GenerateBackUp = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
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
    );
};

export default GenerateBackUp;