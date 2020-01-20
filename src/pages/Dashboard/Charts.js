import React from 'react';
import { Box } from 'grommet';

import BarChart from './BarChart';
import PieChart from './PieChart';

import { styles } from './styles';

export default function Charts(props) {
  const { dashboard } = props;
  console.log(dashboard);

  return (
    <Box style={styles.chartBox} direction="row" wrap={true}>
      <Box style={styles.barChartBox}>
        <BarChart dashboard={dashboard} />
      </Box>
      <Box style={styles.pieChartBox} wrap={true}>
        <Box height="48%">
          <PieChart dashboard={dashboard} />
        </Box>
        <Box height="48%">
          <PieChart dashboard={dashboard} />
        </Box>
      </Box>
    </Box>
  );
}
