import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function BarChart() {
  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width="600"
      style={styles.barChart}
    />
  );
}

const options = {
  chart: {
    id: 'basic-bar'
  },
  xaxis: {
    categories: ['Borno', 'Yobe', 'Adamawa']
  }
};

const series = [
  {
    name: 'state',
    data: [59, 46, 33]
  }
];
