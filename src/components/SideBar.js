import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import SideBarStyles from '../styles/SideBarStyles';

const SideBar = () => {
  const navigation = useNavigation();
  const [sidebarExpanded, setSidebarExpanded] = useState(Dimensions.get('window').width > 768);

  useEffect(() => {
    const updateLayout = () => {
      setSidebarExpanded(Dimensions.get('window').width > 768);
    };

    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.removeEventListener('change', updateLayout);
  }, []);

  const closeSidebar = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const toggleSidebar = () => {
    const newExpandedState = !sidebarExpanded;
    setSidebarExpanded(newExpandedState);
  };

  const sidebarClass = sidebarExpanded ? SideBarStyles.expanded : SideBarStyles.contracted;

  return (
    <View style={[SideBarStyles.sidebar, sidebarClass]}>
      <TouchableOpacity style={SideBarStyles.toggleButton} onPress={toggleSidebar}>
        <FontAwesome5 name={sidebarExpanded ? 'chevron-left' : 'chevron-right'} style={SideBarStyles.icon} />
      </TouchableOpacity>
      {sidebarExpanded && (
        <TouchableOpacity style={SideBarStyles.closeButton} onPress={closeSidebar}>
          <FontAwesome5 name="times" style={SideBarStyles.icon} />
        </TouchableOpacity>
      )}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UnitsDisplay')}>
          <Text>Visualizador de Unidades</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text>Dashboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SideBar;
