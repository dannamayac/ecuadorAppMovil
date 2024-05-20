import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IncomeStyles from '../../styles/income/IncomeStyles';

const WithDrawalsList = ({ withdrawals = [], setSelectedItem }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [photoModalVisible, setPhotoModalVisible] = useState(false);
  const [selectedItemState, setSelectedItemState] = useState(null);

  const openMenu = (item) => {
    setSelectedItemState(item);
    setMenuVisible(true);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const openPhotoModal = () => {
    setMenuVisible(false);
    setPhotoModalVisible(true);
  };

  const closePhotoModal = () => {
    setPhotoModalVisible(false);
  };

  const handleEdit = (item) => {
    closeMenu();
    setSelectedItem(item);
  };

  const renderWithdrawalItem = (item) => (
    <View key={item.id.toString()} style={IncomeStyles.incomeItem}>
      <Text>Retiro de caja - ${item.value}</Text>
      <TouchableOpacity onPress={() => openMenu(item)}>
        <FontAwesome name="ellipsis-v" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      {Array.isArray(withdrawals) && withdrawals.map(item => renderWithdrawalItem(item))}
      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onRequestClose={closeMenu}
      >
        <View style={IncomeStyles.modalOverlay}>
          <View style={IncomeStyles.menuContainer}>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={() => handleEdit(selectedItemState)}>
              <Text>Actualizar movimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={closeMenu}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={openPhotoModal}>
              <Text>Ver foto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={photoModalVisible}
        onRequestClose={closePhotoModal}
      >
        <View style={IncomeStyles.modalOverlay}>
          <View style={IncomeStyles.menuContainer}>
            {selectedItemState && selectedItemState.image ? (
              <Image source={{ uri: selectedItemState.image }} style={IncomeStyles.imageModal} />
            ) : (
              <Text>No hay ninguna foto</Text>
            )}
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={closePhotoModal}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WithDrawalsList;