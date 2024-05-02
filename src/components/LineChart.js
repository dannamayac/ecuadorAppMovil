import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const createLineChart = (borderColor) => {
  const data = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        strokeWidth: 2, // optional
        color: (opacity = 1) => borderColor, // optional
      },
    ],
  };

  return (
    <LineChart
      data={data}
      width={160}
      height={50}
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
          strokeWidth: "2",
          stroke: borderColor
        }
      }}
      bezier
      style={{
        marginVertical: 8,
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
