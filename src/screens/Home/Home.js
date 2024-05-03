// Home.js
import React from 'react';
import { ScrollView } from 'react-native';
import { LineChartGreen, LineChartRed, LineChartYellow, LineChartAquamarine } from '../../components/LineChart';
import ManagementButton from '../../components/ManagementButton';

const Home = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ManagementButton 
        title="Ingresos" 
        summary="39,786 USD" 
        ChartComponent={LineChartGreen} 
        onPress={() => navigation.navigate('Income')}
      />
      <ManagementButton 
        title="Gastos" 
        summary="39,786 USD" 
        ChartComponent={LineChartRed} 
        onPress={() => navigation.navigate('Expenses')} 
      />
      <ManagementButton 
        title="Retiros" 
        summary="39,786 USD" 
        ChartComponent={LineChartAquamarine}
        onPress={() => navigation.navigate('WithDrawls')} 
       />
      <ManagementButton 
        title="Ventas" 
        summary="39,786 USD" 
        ChartComponent={LineChartYellow} 
        onPress={() => console.log('Ventas')} 
      />
      <ManagementButton 
        title="Recaudos" 
        summary="39,786 USD" 
        ChartComponent={LineChartGreen} 
        onPress={() => console.log('Recaudos')} 
      />
    </ScrollView>
  );
};

export default Home;
