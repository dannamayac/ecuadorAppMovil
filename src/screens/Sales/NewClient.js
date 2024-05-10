import React from 'react';
import { View, Text } from 'react-native';
import SalesStyles from '../../styles/sales/SalesStyles';

const NewClient = () => {
   

    return (
        <View style={SalesStyles.container}>
            <View style={SalesStyles.salesHeader}>
                <Text style={GlobalStyles.title}>Info del cliente</Text>
            </View>
            
        </View>
    );
};

export default NewClient;