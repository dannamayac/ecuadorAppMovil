// HomeScreen.js
import React from 'react';
import { View, ScrollView } from 'react-native';
import { LineChartGreen, LineChartRed, LineChartYellow, LineChartAquamarine } from '../../components/LineChart';
import ManagementButton from '../../components/ManagementButton';

const HomeScreen = ({ navigation }) => {
  return (
    
    <ScrollView style={{ flex: 1 }}>
      <ManagementButton 
        title="Ingresos" 
        summary="39,786 USD" 
        ChartComponent={LineChartGreen} 
        onPress={() => console.log('Ingresos')} 
      />
      <ManagementButton 
        title="Gastos" 
        summary="39,786 USD" 
        ChartComponent={LineChartRed} 
        onPress={() => console.log('Gastos')} 
      />
      <ManagementButton 
        title="Ventas" 
        summary="39,786 USD" 
        ChartComponent={LineChartYellow} 
        onPress={() => console.log('Ventas')} 
      />
      <ManagementButton 
        title="Gestión de caja" 
        summary="39,786 USD" 
        ChartComponent={LineChartAquamarine}
        onPress={() => console.log('Gestión de caja')} 
       />
      {/* Repite para otros botones */}
    </ScrollView>
  );
};

export default HomeScreen;
