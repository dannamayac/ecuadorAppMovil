import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';

const SyncUpApp = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <Header />
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Sincronizar aplicación</Text>
            </View>
        </ScrollView>
    );
};

export default SyncUpApp;