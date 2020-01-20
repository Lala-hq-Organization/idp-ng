import React from 'react';
import { Box } from 'grommet';

import BarChart from './BarChart';
import PieChart from './PieChart';

export default function Charts(props) {
  const { dashboard } = props;
  return (
    <Box direction="row" justify="between">
      <Box width="68%">
        <BarChart dashboard={dashboard} />
      </Box>
      <Box direction="column" width="30%" justify="between">
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
