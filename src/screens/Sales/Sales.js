import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Menu, Provider, Button } from 'react-native-paper';
import { GlobalStyles } from '../../styles/GlobalStyles';
import SalesStyles from '../../styles/sales/SalesStyles';
import { useSales } from './SalesContext';

const Sales = ({ navigation }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const { salesData, salesDataApproved } = useSales();

    const openMenu = () => setMenuVisible(true);
    const closeMenu = () => setMenuVisible(false);

    const handleViewSale = (sale) => {
        navigation.navigate('ClientInfo', { sale, fromViewButton: true });
    };

    const renderItem = ({ item }) => (
        <View style={SalesStyles.saleItemContainer}>
            <Text style={SalesStyles.saleItemText}>{item.customer}</Text>
            <Text style={SalesStyles.saleItemText}>{item.date}</Text>
            <Text style={SalesStyles.saleItemText}>{item.sale}</Text>
            <View style={[SalesStyles.statusContainer, SalesStyles.status(item.status)]}>
                <Text style={SalesStyles.statusText}>{item.status}</Text>
            </View>
            <TouchableOpacity style={SalesStyles.viewButton} onPress={() => handleViewSale(item)}>
                <Text style={SalesStyles.viewButtonText}>{"Ver >"}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <Provider>
            <View style={SalesStyles.container}>
                <View style={SalesStyles.headerRow}>
                    <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
                    </TouchableOpacity>
                    <Menu
                        visible={menuVisible}
                        onDismiss={closeMenu}
                        anchor={<Button onPress={openMenu} style={SalesStyles.newSaleButton}>
                            <Text style={GlobalStyles.buttonText}>Nueva venta   +</Text>
                        </Button>}
                        contentStyle={SalesStyles.menuContent}
                    >
                        <Menu.Item 
                            onPress={() => { navigation.navigate('NewSale'); closeMenu(); }} 
                            title="Cliente registrado" 
                            titleStyle={SalesStyles.menuItemText1} 
                        />
                        <Menu.Item 
                            onPress={() => { navigation.navigate('NewClient'); closeMenu(); }} 
                            title="Nuevo cliente" 
                            titleStyle={SalesStyles.menuItemText} 
                        />
                    </Menu>
                </View>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Ventas realizadas</Text>
                </View>
                <View style={SalesStyles.headerButtons}>
                    <TextInput style={SalesStyles.searchInput} placeholder="Buscar" />
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
                    <Text style={GlobalStyles.title}>Ventas aprobadas</Text>
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