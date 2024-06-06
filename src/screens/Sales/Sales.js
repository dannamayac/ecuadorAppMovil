import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Menu, Provider, Button } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { GlobalStyles } from '../../styles/GlobalStyles';
import SalesStyles from '../../styles/sales/SalesStyles';
import Header from '../../components/Header';
import { useSales } from './SalesContext';
import AlertButton from '../../components/AlertButton';

const Sales = ({ navigation }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [dateFilter, setDateFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
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

    const filteredSalesData = salesData.filter(item => 
        (!dateFilter || item.date.includes(dateFilter)) &&
        (!statusFilter || item.status.includes(statusFilter))
    );

    const filteredSalesDataApproved = salesDataApproved.filter(item => 
        (!dateFilter || item.date.includes(dateFilter)) &&
        (!statusFilter || item.status.includes(statusFilter))
    );

    return (
        <Provider>
            <Header />
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
                            onPress={() => { navigation.navigate('ClientInfo'); closeMenu(); }} 
                            title="Nuevo cliente" 
                            titleStyle={SalesStyles.menuItemText} 
                        />
                    </Menu>
                </View>
                <View style={SalesStyles.salesHeader}>
                    <Text style={GlobalStyles.title}>Ventas realizadas</Text>
                </View>
                <View style={SalesStyles.searchContainer}>
                    <TextInput 
                        style={SalesStyles.searchInput} 
                        placeholder="Buscar" 
                        onChangeText={text => setDateFilter(text)}
                    />
                </View>
                <View style={SalesStyles.filterContainer}>
                    <View style={SalesStyles.pickerContainer}>
                        <Picker
                            selectedValue={dateFilter}
                            style={SalesStyles.customPicker}
                            onValueChange={(itemValue) => setDateFilter(itemValue)}
                        >
                            <Picker.Item label="Fecha" value="" />
                            <Picker.Item label="Última semana" value="last_week" />
                            <Picker.Item label="Último mes" value="last_month" />
                            <Picker.Item label="Último año" value="last_year" />
                        </Picker>
                    </View>
                    <View style={SalesStyles.pickerContainer}>
                        <Picker
                            selectedValue={statusFilter}
                            style={SalesStyles.customPicker}
                            onValueChange={(itemValue) => setStatusFilter(itemValue)}
                        >
                            <Picker.Item label="Estado" value="" />
                            <Picker.Item label="Aprobada" value="Aprobada" />
                            <Picker.Item label="Rechazada" value="Rechazada" />
                            <Picker.Item label="En espera" value="En espera" />
                        </Picker>
                    </View>
                </View>
                <View style={SalesStyles.tableHeader}>
                    <Text style={SalesStyles.headerText}>Cliente</Text>
                    <Text style={SalesStyles.headerText}>Fecha</Text>
                    <Text style={SalesStyles.headerText}>Venta</Text>
                    <Text style={SalesStyles.headerText}>Estado</Text>
                    <Text style={SalesStyles.headerText}>Acción</Text>
                </View>
                <FlatList
                    data={filteredSalesData}
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
                    data={filteredSalesDataApproved}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
                <AlertButton />
            </View>
        </Provider>
    );
};

export default Sales;