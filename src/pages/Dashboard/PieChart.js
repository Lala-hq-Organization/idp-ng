import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function PieChart(props) {
  const { dashboard } = props;

  const getSeries = () => {
    if (dashboard.length > 0) {
      let x = dashboard[6].maritalStatus.map(item => item.total);
      return x;
    }
    return [0, 0];
  };

  return (
    <Chart
      options={options}
      series={getSeries()}
      type="donut"
      style={styles.barChart}
    />
  );
}

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
