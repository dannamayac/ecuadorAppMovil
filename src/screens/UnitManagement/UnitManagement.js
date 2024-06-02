import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Provider } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Header from '../../components/Header';

const UnitManagement = ({ navigation }) => {

    const salesData = [
        { id: '1', unit: 'AB123', income: '$100', cost: '$10' },
        { id: '2', unit: 'AC123', income: '$50', cost: '$10' },
        { id: '3', unit: 'AD123', income: '$200', cost: '$10' },
        { id: '4', unit: 'AE123', income: '$300', cost: '$10' },
        { id: '5', unit: 'AF123', income: '$400', cost: '$10' },
        { id: '6', unit: 'AG123', income: '$400', cost: '$10' }
    ];

    const renderItem = ({ item }) => (
        <View style={SalesStyles.saleItemContainer}>
            <Text style={SalesStyles.saleItemText}>{item.unit}</Text>
            <Text style={SalesStyles.saleItemText}>{item.income}</Text>
            <Text style={SalesStyles.saleItemText}>{item.sale}</Text>
            <TouchableOpacity style={SalesStyles.viewButton} onPress={() => navigation.navigate('CashInBox')}>
                <Text style={SalesStyles.viewButtonText}>Ver</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Provider>
            <Header />
            <View style={SalesStyles.container}>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Gestión de unidades</Text>
                </View>
                <View style={SalesStyles.tableHeader}>
                    <Text style={SalesStyles.headerText}>Unidad</Text>
                    <Text style={SalesStyles.headerText}>Ingresos</Text>
                    <Text style={SalesStyles.headerText}>Costos</Text>
                    <Text style={SalesStyles.headerText}>Acción</Text>
                </View>
                <FlatList
                    data={salesData}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </Provider>
    );
};

export default UnitManagement;