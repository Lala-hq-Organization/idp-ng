import React from 'react';
import Chart from 'react-apexcharts';

import { styles } from './styles';

export default function BarChart(props) {
  const { dashboard } = props;

  if (dashboard.length === 0) {
    return 'Loading...';
  }

  const getCategories = () => {
    let x = dashboard[4].states.map(item => item.state);
    return x;
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
          id: 'basic-bar',
          width: '100%',
          height: '100%'
        },
        xaxis: {
          categories: getCategories()
        },
        yaxis: {
          show: true,
          showAlways: true
        },
        fill: {
          colors: '#B8C1CC'
        },
        title: { text: props.title, align: 'left' },
        plotOptions: {
          bar: {
            horizontal: false,
            endingShape: 'flat',
            columnWidth: '40%'
          }
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
      height="100%"
      style={styles.barChart}
    />
  );
}
