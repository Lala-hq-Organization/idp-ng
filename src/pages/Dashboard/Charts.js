import React from 'react';
import { Box } from 'grommet';

import BarChart from './BarChart';
import PieChart from './PieChart';

export default function Charts() {
  return (
    <Box direction="row" justify="between">
      <Box width="68%">
        <BarChart />
      </Box>
      <Box direction="column" width="30%" justify="between">
        <Box height="48%">
          <PieChart />
        </Box>
        <Box height="48%">
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
}
