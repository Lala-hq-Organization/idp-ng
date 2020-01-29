import React, { useEffect, useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import styled from 'styled-components';
import { connect, useSelector } from 'react-redux';
import { getCampsData } from '../../../components/data/data.action';
import GoogleMapImage from './map';
import request from '../../../request';

import DashCard from './DashCards';

import { styles } from './styles';

function States(props) {
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    props.campData(request);
  }, [props]);

  const { camps } = useSelector(({ data }) => data);

  return (
    <Box
      name="Camps"
      style={{
        ...styles.container,
        marginLeft: size === 'small' ? '1em' : '3em',
        width: size === 'small' ? '92%' : '85%'
      }}
      direction="column"
    >
      <CardBox>
        <DashCard campData={camps} />
      </CardBox>
      <Box style={styles.imageBox}>
        <GoogleMapImage />
      </Box>
    </Box>
  );
}

const CardBox = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(6em, 1fr));
  margin-bottom: 4em;
`;

const mapDispatchToProps = {
  campData: getCampsData
};

export default connect(null, mapDispatchToProps)(States);
