import React, { useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';

import LeftSection from './LeftSection';
import RightSection from './RightSection';

import { styles } from '../styles';

export default function Overview() {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      name="Camps"
      style={{
        ...styles.container,
        marginLeft: size === 'small' ? '1em' : '3em',
        width: size === 'small' ? '92%' : '85%'
      }}
      direction="row"
    >
      <Box direction="row" style={{ minWidth: '850px', width: '100%' }}>
        <LeftSection />
        <RightSection />
      </Box>
    </Box>
  );
}
