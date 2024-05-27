import React from 'react';
import { View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';
import Header from '../../components/Header';

const NewClient = () => {
   

    return (
        <View style={SalesStyles.container}>
            <Header />
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Info del cliente</Text>
            </View>
            
        </View>
    );
};

export default NewClient;