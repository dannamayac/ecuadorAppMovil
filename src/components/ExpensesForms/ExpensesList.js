import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import IncomeStyles from '../../styles/income/IncomeStyles';

const ExpensesList = ({ expenses }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openMenu = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleEdit = (item) => {
    closeModal();
    setSelectedItem(item);
  };

  const renderExpenseItem = ({ item }) => ( // Cambiar el nombre de la función para reflejar su uso
    <View style={IncomeStyles.incomeItem}>
      <Text>{item.description} - ${item.value}</Text>
      <TouchableOpacity onPress={() => openMenu(item)}>
        <FontAwesome name="ellipsis-v" size={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <FlatList
        data={expenses} // Cambiar 'incomes' a 'expenses'
        renderItem={renderExpenseItem} // Actualizar la referencia a la función de render
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={IncomeStyles.incomeListTitle}>Historial de Egresos</Text>}
        ListHeaderComponentStyle={IncomeStyles.listHeaderStyle}
        contentContainerStyle={{ backgroundColor: 'white', flexGrow: 1, paddingBottom: 10 }}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={IncomeStyles.centeredView}>
          <View style={IncomeStyles.modalView}>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={() => handleEdit(selectedItem)}>
              <Text>Actualizar movimiento</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={closeModal}>
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={IncomeStyles.menuItem} onPress={() => console.log('Ver foto')}>
              <Text>Ver foto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ExpensesList;