import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';

const AboutHelp = ({ navigation }) => {

    return (
        <ScrollView style={SalesStyles.container}>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Sobre de/Ayuda</Text>
            </View>
        </ScrollView>
    );
};

export default AboutHelp;