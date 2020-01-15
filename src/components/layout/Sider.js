import React from 'react';
import { Box, Button, Text } from 'grommet';

import styles from './styles';
import logo from '../../assets/logo.png';

const Sidebar = () => (
  <>
    <Box gridArea="sidebar" width="15em" style={styles.sider}>
      <Box style={styles.logobox}>
        <Box style={styles.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: '100%', objectFit: 'none' }}
          />
        </Box>
        <Text color="white" style={styles.adminText}>
          Admin
        </Text>
      </Box>
      <hr style={{ width: '100%', border: '0.5px solid #fff' }} />
      {['Dashboard', 'Candidates', 'Camps'].map(name => (
        <Button key={name} href="#" hoverIndicator>
          <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
            <Text color="#fff">{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  </>
);

export default Sidebar;
