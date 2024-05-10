import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const SyncUpApp = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Sincronizar aplicación</Text>
            </View>
        </ScrollView>
    );
};

export default SyncUpApp;