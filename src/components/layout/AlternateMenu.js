import React from 'react';
import { withRouter } from 'react-router-dom';

import { Box, Menu } from 'grommet';
// import { Power, User } from 'grommet-icons';

const App = props => {
  return (
    <Box align="center">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        // label="actions"
        items={[
          {
            label: ' Dashboard',
            onClick: () => props.history.push('/dashboard')
          },
          {
            label: 'Candidates',
            onClick: () => props.history.push('/candidates')
          },
          { label: ' Camps', onClick: () => props.history.push('/camps') },
          { label: 'Logout', onClick: () => props.handleLogout() }
        ]}
      />
    </Box>
  );
};

export default withRouter(App);
