import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const createLineChart = (borderColor) => {
  const data = {
    labels: ["", "", "", "", "", ""], // Mantén las etiquetas vacías
    datasets: [
      {
        data: [12, 19, 3, 8, 5, 9, 15, 10],
        strokeWidth: 2,
        color: (opacity = 1) => borderColor,
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={230}
      height={70}
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "0",
          strokeWidth: "1",
          stroke: borderColor
        },
        propsForBackgroundLines: {
          strokeWidth: 0,
        },
        propsForHorizontalLabels: {
          strokeWidth: 0,
        },
      }}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      bezier
      style={{
        marginVertical: 0,
        borderRadius: 16
      }}
    />
  );
};

const LineChartGreen = () => createLineChart('#1fcb4f');
const LineChartRed = () => createLineChart('red');
const LineChartYellow = () => createLineChart('yellow');
const LineChartAquamarine = () => createLineChart('#36DDE7');

export { LineChartGreen, LineChartRed, LineChartYellow, LineChartAquamarine };