// components/AlertButton.js
import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AlertButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setClickCount(clickCount + 1);
    if (clickCount + 1 >= 3) {
      setModalVisible(true);
      setClickCount(0);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.alertButton} onPress={handlePress}>
        <MaterialCommunityIcons name="alarm-light" size={30} color="red" />
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>Protocolo de seguridad activado</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  alertButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#FF0000',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AlertButton;