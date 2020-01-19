import React from 'react';
import { withRouter } from 'react-router-dom';

import { Menu } from 'grommet';
import { Menu as MenuIcon } from 'grommet-icons';

const App = props => {
  return (
    <Menu
      icon={<MenuIcon />}
      dropProps={{ align: { top: 'bottom', left: 'left' } }}
      items={[
        {
          label: 'Families',
          onClick: props.handleFamily
        },
        {
          label: 'Individuals',
          onClick: props.handleIndividuals
        },
        {
          label: 'Export Data'
        }
      ]}
    />
  );
};

export default withRouter(App);
