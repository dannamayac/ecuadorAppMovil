import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';
import SettingsStyles from '../../styles/Settings/SettingsStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import AlertButton from '../../components/AlertButton';

const DownloadData = ({ navigation }) => {

    return (
        <View style={PaymentStyles.container}>
            <Header />
            <ScrollView style={PaymentStyles.container2}>
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
            <AlertButton />
        </View>
    );
};

export default DownloadData;