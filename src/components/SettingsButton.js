import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ManagementButtonStyles from '../styles/Home/ManagementButtonStyles';

const SettingsButton = ({ title, onPress, textStyle, actionText = "Gestionar     " }) => {
  return (
    <TouchableOpacity style={ManagementButtonStyles.managementbuttons} onPress={onPress}>
      <Text style={ManagementButtonStyles.buttonTitle}>{title}</Text>
      <View style={ManagementButtonStyles.manageContainer}>
        <Text style={[ManagementButtonStyles.manageText, textStyle]}>{actionText} {'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SettingsButton;