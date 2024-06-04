import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import SettingsStyles from '../../styles/Settings/SettingsStyles';

const DownloadData = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Settings')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={SettingsStyles.settingsHeader}>
                <Text style={GlobalStyles.title}>Descargar unidad</Text>
            </View>
            <TouchableOpacity style={GlobalStyles.blueButton}>
                <Text style={GlobalStyles.buttonText}>Descargar Excel</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

export default DownloadData;