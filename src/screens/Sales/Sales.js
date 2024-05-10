import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Menu, Provider, Button } from 'react-native-paper';
import SalesStyles from '../../styles/sales/SalesStyles';

const Sales = ({ navigation }) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const salesData = [
        { id: '1', customer: 'Cliente 1', date: '2023-05-08', sale: 'Venta 1', status: 'En espera' },
        { id: '2', customer: 'Cliente 2', date: '2023-05-09', sale: 'Venta 2', status: 'Rechazada' },
        { id: '3', customer: 'Cliente 3', date: '2023-05-10', sale: 'Venta 3', status: 'Aprobada' }
    ];
    const salesDataApproved = [
        { id: '1', customer: 'Cliente 1', date: '2023-05-08', sale: 'Venta 1', status: 'En espera' },
        { id: '2', customer: 'Cliente 2', date: '2023-05-09', sale: 'Venta 2', status: 'Rechazada' },
        { id: '3', customer: 'Cliente 3', date: '2023-05-10', sale: 'Venta 3', status: 'Aprobada' }
    ];

    const renderItem = ({ item }) => (
        <View style={SalesStyles.saleItemContainer}>
            <Text style={SalesStyles.saleItemText}>{item.customer}</Text>
            <Text style={SalesStyles.saleItemText}>{item.date}</Text>
            <Text style={SalesStyles.saleItemText}>{item.sale}</Text>
            <Text style={[SalesStyles.saleItemText, SalesStyles.status(item.status)]}>{item.status}</Text>
            <TouchableOpacity style={SalesStyles.viewButton}>
                <Text style={SalesStyles.viewButtonText}>Ver</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Provider>
        <View style={SalesStyles.container}>
            <Menu
                visible={menuVisible}
                onDismiss={closeMenu}
                anchor={<Button onPress={openMenu} style={SalesStyles.newSaleButton}>Nueva venta +</Button>}
            >
                <Menu.Item onPress={() => { navigation.navigate('NewSale'); closeMenu(); }} title="Cliente registrado" />
                <Menu.Item onPress={() => { navigation.navigate('NewClient'); closeMenu(); }} title="Nuevo cliente" />
            </Menu>
            <View style={SalesStyles.salesHeader}>
                <Text style={SalesStyles.salesTitle}>Ventas realizadas</Text>
            </View>
            <View style={SalesStyles.tableHeader}>
                <Text style={SalesStyles.headerText}>Cliente</Text>
                <Text style={SalesStyles.headerText}>Fecha</Text>
                <Text style={SalesStyles.headerText}>Venta</Text>
                <Text style={SalesStyles.headerText}>Estado</Text>
                <Text style={SalesStyles.headerText}>Acción</Text>
            </View>
            <FlatList
                data={salesData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={SalesStyles.salesHeader}>
                <Text style={SalesStyles.salesTitle}>Ventas aprobados</Text>
            </View>
            <View style={SalesStyles.tableHeader}>
                <Text style={SalesStyles.headerText}>Cliente</Text>
                <Text style={SalesStyles.headerText}>Fecha</Text>
                <Text style={SalesStyles.headerText}>Venta</Text>
                <Text style={SalesStyles.headerText}>Estado</Text>
                <Text style={SalesStyles.headerText}>Acción</Text>
            </View>
            <FlatList
                data={salesDataApproved}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
        </Provider>
    );
};

export default Sales;