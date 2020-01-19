import React from 'react';
import { Box, Button, Text } from 'grommet';

import { withRouter, Link } from 'react-router-dom';
import list from './list';

import styles from './styles';
import logo from '../../assets/logo.png';

const Sidebar = () => (
  <>
    <Box gridArea="sidebar" width="17em" style={styles.sider}>
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
      {list.map(item => (
        <Link to={Object.values(item)[0]} key={Object.keys(item)[0]}>
          <Button key={Object.keys(item)[0]} hoverIndicator>
            <Box pad={{ horizontal: 'medium', vertical: 'small' }}>
              <Text color="#fff">{Object.keys(item)[0]}</Text>
            </Box>
          </Button>
        </Link>
      ))}
    </Box>
  </>
);

export default Sidebar;
