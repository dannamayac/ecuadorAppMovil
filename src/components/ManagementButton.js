import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ManagementButtonStyles from '../styles/Home/ManagementButtonStyles';

const ManagementButton = ({ title, summary, ChartComponent, onPress }) => {
  return (
    <TouchableOpacity style={ManagementButtonStyles.managementbuttons} onPress={onPress}>
      <Text style={ManagementButtonStyles.buttonTitle}>{title}</Text>
      <View style={ManagementButtonStyles.contentContainer}>
        {summary && (
          <View style={ManagementButtonStyles.summaryContainer}>
            <Text style={ManagementButtonStyles.summaryTitle}>Resumen</Text>
            <Text style={ManagementButtonStyles.summaryValue}>{summary}</Text>
          </View>
        )}
        {ChartComponent && (
          <View style={ManagementButtonStyles.chartContainer}>
            <ChartComponent />
          </View>
        )}
      </View>
      <View style={ManagementButtonStyles.manageContainer}>
        <Text style={ManagementButtonStyles.manageText}>Gestionar {'>'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ManagementButton;