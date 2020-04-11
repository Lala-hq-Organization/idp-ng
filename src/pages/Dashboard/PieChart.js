import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function PieChart(props) {
  const { dashboard } = props;

  if (dashboard.length === 0) {
    return 'Loading...';
  }

  const getSeries = () => {
    if (dashboard.length > 0) {
      let x = dashboard[6].maritalStatus.map(item => item.total);
      return x;
    }
    return [60, 40];
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
      width="100%"
      height="100%"
      style={styles.barChart}
    />
  );
}

const options = {
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
          padding: '2em',
          position: 'right',
          fontSize: '16px',
          horizontalAlign: 'center'
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
