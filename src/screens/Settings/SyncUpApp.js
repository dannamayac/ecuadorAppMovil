import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';

const SyncUpApp = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <Header />
            <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Settings')}>
                <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
            </TouchableOpacity>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Sincronizar aplicación</Text>
            </View>
        </ScrollView>
    );
};

export default SyncUpApp;