import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import SideBarStyles from '../styles/SideBarStyles';

const SideBar = () => {
  const navigation = useNavigation();

  const handleClose = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  return (
    <View style={SideBarStyles.sidebar}>
      <TouchableOpacity style={SideBarStyles.closeButton} onPress={handleClose}>
        <FontAwesome5 name="times"  style={SideBarStyles.closeIcon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={SideBarStyles.optionsText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={SideBarStyles.optionsText}>Configuración</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UnitManagement')}>
        <Text style={SideBarStyles.optionsText}>Gestión de unidades</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SideBar;
