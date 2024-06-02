import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ManagementButtonStyles from '../styles/Home/ManagementButtonStyles';

const SettingsButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={ManagementButtonStyles.managementbuttons} onPress={onPress}>
      <Text style={ManagementButtonStyles.buttonTitle}>{title}</Text>
      <View style={ManagementButtonStyles.manageContainer}>
        <Text style={ManagementButtonStyles.manageText}>Gestionar {'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsButton;