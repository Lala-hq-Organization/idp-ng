import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function PieChart() {
  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      style={styles.barChart}
    />
  );
}

const series = [50, 50];
const options = {
  chart: {
    type: 'donut'
  },
  labels: ['single', 'married'],
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 500
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  ]
};
