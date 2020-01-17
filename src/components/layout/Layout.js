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
            pad={{ horizontal: 'medium', vertical: 'large' }}
            background="#F7F4FF"
            style={styles.header}
          >
            <Box>
              <Text style={styles.pageHeaderText}>
                {props.children.props !== undefined
                  ? props.children.props.name
                  : 'Page Header'}
              </Text>
            </Box>

            <Box direction="row" align="end">
              <Notification color="#683687" size="medium" />
              <Box width="xxsmall"></Box>
              <StatusUnknown color="#683687" />
              <Box width="xxsmall"></Box>
              <Text color="#60317C" size="2rem">
                Logout
              </Text>
            </Box>
          </Box>
          {props.children}
        </Box>
      </Grid>
    </Grommet>
  );
};

export default App;
