import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function PieChart(props) {
  const { dashboard } = props;

  if (dashboard.length === 0) {
    return 'Loading...';
  }

  const getSeries = () => {
    let x = dashboard[6].maritalStatus.map(item => item.total);
    return x;
  };

  return (
    <Chart
      options={{
        ...options,
        labels: props.labels,
        title: { text: props.title, align: 'center', style: { margin: 20 } }
      }}
      series={getSeries()}
      type="donut"
      style={styles.barChart}
    />
  );
}

const options = {
  chart: {
    type: 'donut',
    width: '100%',
    height: '100%'
  },
  legend: {
    position: 'right',
    fontSize: '16px',
    horizontalAlign: 'right'
  },
  dataLabels: {
    enabled: false
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: 'right',
          fontSize: '16px',
          horizontalAlign: 'right'
        }
      }
    }
  ],
  plotOptions: {
    pie: {
      customScale: 1
    }
  }
};
