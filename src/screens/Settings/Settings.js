// Settings.js
import React from 'react';
import { ScrollView, TouchableOpacity, Text, View } from 'react-native';
import Header from '../../components/Header';
import SettingsButton from '../../components/SettingsButton';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Settings = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Header />
      <View style={{ paddingHorizontal: 10 }}>
        <TouchableOpacity style={GlobalStyles.backButton} onPress={() => navigation.navigate('Home')}>
          <Text style={GlobalStyles.backButtonText}>{"<   Volver"}</Text>
        </TouchableOpacity>
        <SettingsButton
          title="Descargas de unidad"
          onPress={() => navigation.navigate('Download')}
        />
        <SettingsButton
          title="Sincronizar aplicación"
          onPress={() => navigation.navigate('SyncUp')}
        />
        <SettingsButton
          title="Generar nuevas llaves"
          onPress={() => navigation.navigate('GenerateNewKeys')}
        />
        <SettingsButton
          title="Generar backup"
          onPress={() => navigation.navigate('GenerateBackUp')}
        />
        <SettingsButton
          title="Reiniciar datos"
          onPress={() => navigation.navigate('Restart')}
        />
        <SettingsButton
          title="Acerca de/Ayuda"
          onPress={() => navigation.navigate('AboutHelp')}
        />
      </View>
    </ScrollView>
  );
};

export default Settings;
