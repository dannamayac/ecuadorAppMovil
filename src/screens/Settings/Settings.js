// Settings.js
import React from 'react';
import { ScrollView } from 'react-native';
import ManagementButton from '../../components/ManagementButton';

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ManagementButton 
        title="Descargas de unidad" 
        onPress={() => navigation.navigate('Download')}
      />
      <ManagementButton 
        title="Sincronizar aplicación" 
        onPress={() => navigation.navigate('SyncUp')} 
      />
      <ManagementButton 
        title="Generar nuevas llaves" 
        onPress={() => navigation.navigate('GenerateNewKeys')} 
       />
      <ManagementButton 
        title="Generar backup" 
        onPress={() => navigation.navigate('GenerateBackUp')} 
      />
      <ManagementButton 
        title="Reiniciar datos" 
        onPress={() => navigation.navigate('Restart')} 
      />
      <ManagementButton 
        title="Acerca de/Ayuda" 
        onPress={() => navigation.navigate('AboutHelp')} 
      />
    </ScrollView>
  );
};

export default Settings;
