import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function BarChart(props) {
  const { dashboard } = props;

  const getCategories = () => {
    if (dashboard.length > 0) {
      let x = dashboard[4].states.map(item => item.state);
      return x;
    }
  };

  const getData = () => {
    if (dashboard.length > 0) {
      let x = dashboard[4].states.map(item => item.total);
      return x;
    }
  };

  return (
    <Chart
      options={{
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: getCategories()
        }
      }}
      series={[
        {
          name: 'state',
          data: getData()
        }
      ]}
      type="bar"
      width="100%"
      style={styles.barChart}
    />
  );
}
