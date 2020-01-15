import React from 'react';
import { Box } from 'grommet';
import GridLayout from '../../components/layout/Layout';

import { styles } from './styles';

export default function Dashboard() {
  return (
    <GridLayout>
      <Box
        style={styles.container}
        direction="column"
        pad="small"
        background="dark-3"
      >
        Main Content
      </Box>
    </GridLayout>
  );
}
