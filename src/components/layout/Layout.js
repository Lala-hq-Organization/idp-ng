import React from 'react';

import { Grommet, Box, Grid, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { Notification, StatusUnknown } from 'grommet-icons';

import styles from './styles';
import Sider from './Sider';
import './layout.css';

const App = props => {
  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        <Sider />
        <Box gridArea="main" className="innerBox">
          <Box
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: 'medium', vertical: 'medium' }}
            background="#F7F4FF"
            style={styles.header}
          >
            <Box>
              <Text
                style={{ color: '#4D4F5C', fontWeight: 600, fontSize: '23px' }}
              >
                {props.children.props !== undefined
                  ? props.children.props.name
                  : 'Page Header'}
              </Text>
            </Box>

            <Box direction="row">
              <Notification color="plain" />
              <Box width="xxsmall"></Box>
              <StatusUnknown color="plain" />
              <Box width="xxsmall"></Box>
              <Text>Logout</Text>
            </Box>
          </Box>
          {props.children}
        </Box>
      </Grid>
    </Grommet>
  );
};

export default App;
