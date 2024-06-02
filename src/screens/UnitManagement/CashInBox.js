import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import CashInBoxStyles from '../../styles/UnitManagementStyles/CashInBoxStyles';
import Header from '../../components/Header';

const CashInBox = () => {
    return (
        <View style={CashInBoxStyles.container}>
            <Header />
            <View style={CashInBoxStyles.container2}>
                <Text style={CashInBoxStyles.unitName}>Unidad 1 - Nombre</Text>
                <Text style={CashInBoxStyles.cashInBoxTitle}>Dinero en caja</Text>
                <Text style={CashInBoxStyles.cashInBoxAmount}>$2,338 USD</Text>
                <View style={CashInBoxStyles.buttonsContainer}>
                    <TouchableOpacity style={CashInBoxStyles.reviewButton}>
                        <Text style={CashInBoxStyles.reviewButtonText}>{"Realizar revisión  >"}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={CashInBoxStyles.moveMoneyButton}>
                        <Text style={CashInBoxStyles.moveMoneyButtonText}>{"Mover dinero  >"}</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Ventas Realizadas</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total Balance</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$632.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>+1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Cobros Realizados</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total Balance</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$632.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>+1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Ingresos Totales</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$238.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>-1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Gastos Totales</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$238.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>-1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Costos Totales</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$238.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>-1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Porcentajes de recaudos</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$238.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>-1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={CashInBoxStyles.card}>
                        <Text style={CashInBoxStyles.cardTitle}>Reporte de Mora</Text>
                        <Text style={CashInBoxStyles.cardSubtitle}>Total</Text>
                        <Text style={CashInBoxStyles.cardAmount}>$238.000</Text>
                        <Text style={CashInBoxStyles.cardPercentage}>-1,29%</Text>
                        <TouchableOpacity style={CashInBoxStyles.cardArrow}>
                            <Text style={CashInBoxStyles.cardArrowText}>{">"}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default CashInBox;