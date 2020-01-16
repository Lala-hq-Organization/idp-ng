import React from 'react';
import { Box } from 'grommet';
import GridLayout from '../../components/layout/Layout';

import { styles } from './styles';

import DashCard from './DashCards';
import Charts from './Charts';

export default function Dashboard() {
  return (
    <GridLayout>
      <Box
        style={styles.container}
        direction="column"
        pad="medium"
        background="transparent"
      >
        <DashCard />
        <Charts />
      </Box>
    </GridLayout>
  );
}
