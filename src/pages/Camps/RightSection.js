import React from 'react';
import { Box, Tabs, Tab } from 'grommet';

import { styles } from './styles';

export default function RightSection() {
  return (
    <Box style={styles.secondBox}>
      <Tabs>
        <Tab title="tab 1">
          <Box pad="medium">One</Box>
        </Tab>
        <Tab title="tab 2">
          <Box pad="medium">Two</Box>
        </Tab>
      </Tabs>
    </Box>
  );
}
