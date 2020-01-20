import React from 'react';
import { Box } from 'grommet';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

import { styles } from '../styles';

export default function Overview() {
  return (
    <Box name="Camps" style={styles.container} direction="row">
      <LeftSection />
      <RightSection />
    </Box>
  );
}
