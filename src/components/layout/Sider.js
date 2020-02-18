import React, { useState } from 'react';
import { Box, Button, Text } from 'grommet';

import { Link } from 'react-router-dom';
import list from './list';

import styles from './styles';
import logo from '../../assets/logo.png';
import './layout.css';

const Sidebar = () => {
  const [isCurrent, setIsCurrent] = useState(null);
  const [current, setCurrent] = useState(null);

  const handleClick = key => {
    setCurrent(key);
    setIsCurrent(true);
  };

  return (
    <>
      <Box gridArea="sidebar" width="17em" style={styles.sider}>
        <Box style={styles.logobox}>
          <Box style={styles.logo}>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: '100%', objectFit: 'none' }}
              />
            </Link>
          </Box>
          <Text color="white" style={styles.adminText}>
            Admin
          </Text>
        </Box>
        <hr style={{ width: '100%', border: '0.5px solid #fff' }} />
        <Box style={styles.sideItemBox}>
          {list.map(item => (
            <Link to={Object.values(item)[0][0]} key={Object.keys(item)[0]}>
              <Button
                key={Object.keys(item)[0]}
                // onClic?k
                onMouseOverCapture={() => handleClick(Object.keys(item)[0])}
              >
                <Box
                  pad={{ horizontal: 'medium', vertical: 'medium' }}
                  direction="row"
                >
                  {Object.values(item)[0][1]}
                  <Text
                    color={
                      current === Object.keys(item)[0] && isCurrent
                        ? '#fff'
                        : '#CE9FDB'
                    }
                    alignSelf="start"
                    margin={{ left: 'small' }}
                    style={{
                      fontWeight:
                        current === Object.keys(item)[0] && isCurrent
                          ? 'bold'
                          : 'light'
                    }}
                  >
                    {Object.keys(item)[0]}
                  </Text>
                </Box>
              </Button>
            </Link>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
