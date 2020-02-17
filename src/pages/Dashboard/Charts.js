import React from 'react';
import { Box } from 'grommet';
import './styles.css';

import BarChart from './BarChart';
import PieChart from './PieChart';

export default function Charts(props) {
  const { dashboard } = props;
  return (
    <Box className="dash-chart" direction="row" justify="between">
      <Box className="bar-chart" width="68%">
        <BarChart dashboard={dashboard} title="States (IDP Camp)" />
      </Box>
      <Box
        className="pie-chart-holder"
        direction="column"
        width="30%"
        justify="between"
      >
        <Box className="pie-chart" height="48%">
          <PieChart
            dashboard={dashboard}
            labels={['single', 'married']}
            title="Marital status"
          />
        </Box>
        <Box className="pie-chart" height="48%">
          <PieChart
            dashboard={dashboard}
            labels={['male', 'female']}
            title="Gender"
          />
        </Box>
      </Box>
    </Box>
  );
}
