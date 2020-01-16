import React from 'react';
import { Box } from 'grommet';
import GridLayout from '../../components/layout/Layout';

import { styles } from './styles';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function Camps() {
  return (
    <GridLayout>
      <Box name="Camps" style={styles.container} direction="row">
        <LeftSection />
        <RightSection />
      </Box>
    </GridLayout>
  );
}
