import React, { useContext } from 'react';
import { Box, Image, Heading, ResponsiveContext, Text } from 'grommet';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo2x.png';
import undraw from '../../assets/undraw.svg';
import map from '../../assets/map.svg';
import { styles } from './styles';

export default function Homepage() {
  const size = useContext(ResponsiveContext);

  return (
    <Box direction="column" background="#F8FBFD">
      <Box direction="row" style={styles.container}>
        <Box width="7rem">
          <Link to="/">
            <Image fill src={Logo} alt="site logo" />
          </Link>
        </Box>
      </Box>
      <Box style={styles.main}>
        <Box
          direction="row"
          style={{ ...styles.container, ...styles.hero }}
          justify="between"
          align="center"
        >
          <Box style={styles.heroLeftSection} direction="column">
            <Heading style={styles.heroTitle}>
              Collating Data of IDPs in Nigeria
            </Heading>
            <p
              style={{
                ...styles.heroText
              }}
            >
              A census of individuals across all IDP camps in Nigeria, while
              allowing access to support and relief programs for internally
              displaced persons
            </p>
            <Box>
              <a className="btn" href="/login" style={styles.loginBtn}>
                Login
              </a>
            </Box>
          </Box>
          <Box
            height="70%"
            style={{
              ...styles.heroRightSection,
              display: size === 'small' || size === 'xsmall' ? 'none' : ''
            }}
          >
            <Image fill src={undraw} alt="hero image" />
          </Box>
        </Box>
      </Box>
      <Box background="#F8FBFD 0% 0% no-repeat padding-box">
        <Box
          direction="row"
          justify="between"
          align="center"
          style={{ ...styles.container, ...styles.midSection }}
        >
          <Box
            style={{
              maxWidth: '50rem',
              width: size === 'xsmall' ? '100%' : '50%',
              minWidth: '25rem'
            }}
          >
            <Heading level={2} color="#000" style={{ marginBottom: 0 }}>
              Utilizing Digital Solutions for IDPs
            </Heading>
            <Text as="p" size="large">
              The use of digital solutions to aggregate the data of all
              internally displaced persons across IDP camps in Nigeria
            </Text>
            <Box direction="row" justify="end">
              <Box style={styles.ball}></Box>
            </Box>
          </Box>
          <Box
            style={{
              position: 'relative',
              alignItems: 'center',
              maxWidth: '50rem',
              display: size === 'xsmall' ? 'none' : '',
              minWidth: '25rem'
            }}
          >
            <Box style={styles.purpleBall}></Box>
            <Box style={styles.yellowBall}></Box>
          </Box>
        </Box>
      </Box>
      <Box direction="row" justify="center" background="#fff">
        <Box width="73rem" style={styles.mapArea}>
          <Image fill src={map} alt="site logo" />
        </Box>
      </Box>
      <Box
        background="#F7F4FF 0% 0% no-repeat padding-box"
        margin="auto 0em 0em 0em"
        style={styles.footer}
      >
        <Box direction="column" style={styles.container}>
          <Box width="10rem">
            <Image fill src={Logo} alt="site logo" />
          </Box>
          <p style={styles.footerText}>
            IDP.ng warehouses the data of internally displaced persons across
            IDP camps in Nigeria. The data provides insights into matters
            related to internally displaced people in Nigeria.
          </p>
        </Box>
      </Box>
    </Box>
  );
}
