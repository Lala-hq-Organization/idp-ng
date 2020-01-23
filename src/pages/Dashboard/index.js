import React, { useEffect, useContext } from 'react';
import { Box, ResponsiveContext } from 'grommet';
import { connect, useSelector } from 'react-redux';
import { getDashboardData } from '../../components/data/data.action';
import request from '../../request';

import GridLayout from '../../components/layout/Layout';

import { styles } from './styles';

import DashCard from './DashCards';
import Charts from './Charts';

function Dashboard(props) {
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    props.allData(request);
  }, [props]);

  const { dashboard } = useSelector(({ data }) => data);

  return (
    <GridLayout>
      <Box
        name="Dashboard"
        style={{
          ...styles.container,
          width: size === 'small' || size === 'xsmall' ? '100%' : '90%'
        }}
        direction="column"
        pad="medium"
        background="transparent"
        justify="between"
      >
        <DashCard dashboard={dashboard} />
        <Charts dashboard={dashboard} />
      </Box>
    </GridLayout>
  );
}

const mapDispatchToProps = {
  allData: getDashboardData
};

export default connect(null, mapDispatchToProps)(Dashboard);
