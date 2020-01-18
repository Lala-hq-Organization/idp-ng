import React from 'react';

import { Box, Menu } from 'grommet';
// import { Power, User } from 'grommet-icons';

const App = () => (
  <Box align="center">
    <Menu
      dropProps={{ align: { top: 'bottom', left: 'left' } }}
      // label="actions"
      items={[
        { label: ' Dashboard' },
        { label: 'Candidates' },
        { label: ' Camps' }
      ]}
    />
  </Box>
);

export default App;
