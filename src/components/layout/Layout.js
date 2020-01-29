import React, { useContext } from 'react';

import { Grommet, Box, Grid, Text, ResponsiveContext } from 'grommet';
import { grommet } from 'grommet/themes';
import { Notification, StatusUnknown } from 'grommet-icons';
import { connect } from 'react-redux';
import logoutAction from '../../components/Login/logout.action';

import styles from './styles';
import Sider from './Sider';
import AlterbateMenu from './AlternateMenu';
import './layout.css';

const App = props => {
  const size = useContext(ResponsiveContext);
  const handleLogout = () => {
    localStorage.clear();
    props.logout();
  };

  return (
    <Grommet full={true} theme={grommet}>
      <Grid
        fill={true}
        rows={['auto', 'flex']}
        columns={['auto', 'flex']}
        areas={[
          { name: 'sidebar', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] }
        ]}
      >
        {size === 'xsmall' ? null : <Sider />}
        <Box gridArea="main" className="innerBox">
          <Box
            direction="row"
            align="center"
            justify="between"
            pad={{ horizontal: 'medium', vertical: 'large' }}
            background="#F7F4FF"
            style={styles.header}
          >
            {size === 'xsmall' ? (
              <AlterbateMenu handleLogout={handleLogout} />
            ) : null}

            <Box>
              <Text
                style={{
                  ...styles.pageHeaderText,
                  fontSize: size === 'xsmall' ? '1.5rem' : '2em'
                }}
              >
                {props.children.props.name === undefined
                  ? 'Camps'
                  : props.children.props !== undefined
                  ? props.children.props.name
                  : 'Page Header'}
              </Text>
            </Box>

            {size === 'medium' || size === 'large' ? (
              <Box direction="row" align="end">
                <Notification color="#683687" size="medium" />
                <Box width="xxsmall"></Box>
                <StatusUnknown color="#683687" />
                <Box width="xxsmall"></Box>
                <Text
                  color="#60317C"
                  size="2rem"
                  onClick={handleLogout}
                  style={{ cursor: 'pointer' }}
                >
                  Logout
                </Text>
              </Box>
            ) : null}
          </Box>
          {props.children}
        </Box>
      </Grid>
    </Grommet>
  );
};

const mapDispatchToProps = {
  logout: logoutAction
};

export default connect(null, mapDispatchToProps)(App);
