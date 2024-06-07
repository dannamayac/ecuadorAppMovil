import React from 'react';
import { ScrollView, View } from 'react-native';
import { LineChartGreen, LineChartRed, LineChartYellow, LineChartAquamarine } from '../../components/LineChart';
import ManagementButton from '../../components/ManagementButton';
import HomeStyles from '../../styles/Home/HomeStyles';
import Header from '../../components/Header';
import AlertButton from '../../components/AlertButton';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView style={HomeStyles.container}>
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
          onPress={() => navigation.navigate('Sales')} 
        />
        <ManagementButton 
          title="Recaudos" 
          summary="39,786 USD" 
          ChartComponent={LineChartGreen} 
          onPress={() => navigation.navigate('Collect')} 
        />
      </ScrollView>
      <AlertButton />
    </View>
  );
};

export default Home;