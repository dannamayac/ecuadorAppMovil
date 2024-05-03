import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LineChart } from './LineChart';
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
      <Text style={ManagementButtonStyles.manageText}>Gestionar {'>'}</Text>
    </TouchableOpacity>
  );
};


export default ManagementButton;