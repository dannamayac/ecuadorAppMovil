// Settings.js
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Text, View, Modal } from 'react-native';
import Header from '../../components/Header';
import SettingsButton from '../../components/SettingsButton';
import { GlobalStyles } from '../../styles/GlobalStyles';
import SettingsStyles from '../../styles/Settings/SettingsStyles';
import PaymentStyles from '../../styles/Collect/PaymentsStyles';
import AlertButton from '../../components/AlertButton';

const Settings = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={PaymentStyles.container}>
      <Header />
      <ScrollView style={PaymentStyles.container2}>
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
          onPress={handleOpenModal}
          textStyle={SettingsStyles.redText}
          actionText="Reiniciar     "
        />
        <SettingsButton
          title="Acerca de/Ayuda"
          onPress={() => navigation.navigate('AboutHelp')}
        />
      </ScrollView>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={SettingsStyles.modalOverlay}>
          <View style={SettingsStyles.modalContainer}>
            <Text style={SettingsStyles.modalIcon}>❗</Text>
            <Text style={SettingsStyles.modalText}>¿Está seguro que desea reiniciar los datos de la aplicación?</Text>
            <TouchableOpacity
              style={SettingsStyles.redButton}
              onPress={() => {
                handleCloseModal();
                // Add your reset data logic here
              }}
            >
              <Text style={GlobalStyles.buttonText}>Reiniciar datos</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <AlertButton />
    </View>
  );
};

export default Settings;