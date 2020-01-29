import React, { useState } from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import { useSelector, connect } from 'react-redux';
import request from '../../request';

import {
  getDashboardData,
  getFamiliesData,
  getIndividualsData,
  getCampsData,
  getFilterData
} from '../data/data.action';

import Select from './Select';
import Filter from './Filter';
import styles from './styles';
import Button from './Button';

const App = props => {
  // eslint-disable-next-line
  const [pageNum, setPageNum] = useState(props.pageNum);

  const [values, setValues] = useState({
    gender: '',
    data_added: '',
    state: '',
    family: ''
  });

  const { dashboard, families } = useSelector(({ data }) => data);

  let statesArr = dashboard[4] ? dashboard[4].states : [];
  let famArr = families.data ? families.data : [];

  const handleFilter = () => {
    props.getFilterData(request, pageNum, values);
  };

  return (
    <Box style={styles.elaborateFilterBox}>
      <Filter
        justify="start"
        style={styles.filter2}
        handleFilterDisplay={props.handleFilterDisplay}
      />
      <CardBox>
        <Select
          placeholder="Camps"
          id="camps"
          options={['Kano', 'LA', 'Lagos', 'Kebbi', 'Yola', 'Yobe', 'None']}
          value={values.camps}
          setValues={setValues}
          name="camp"
          values={values}
        />
        <Select
          placeholder="Family"
          id="family"
          name="family"
          options={[...getFamilyNames(famArr), 'None']}
          value={values.family}
          setValues={setValues}
          values={values}
        />
        <Select
          placeholder="State"
          id="state"
          name="state"
          options={[...getState(statesArr), 'None']}
          value={values.state}
          setValues={setValues}
          values={values}
        />
        <Select
          placeholder="Gender"
          id="gender"
          options={['Male', 'Female', 'None']}
          value={values.gender}
          setValues={setValues}
          name="gender"
          values={values}
        />
        <Select
          placeholder="LGA"
          id="lga"
          options={['LGA', 'LG', 'None']}
          value={values.lga}
          setValues={setValues}
          name="lga"
          values={values}
        />
        <Select
          placeholder="Date"
          id="date_added"
          options={['Date1', 'Date2', 'None']}
          value={values['date_added']}
          setValues={setValues}
          name="date_added"
          values={values}
        />
        <Button
          boxStyle={styles.go}
          handleButton={handleFilter}
          textStyle={styles.goText}
          text="Go"
        />
      </CardBox>
      {/* <Box>
        <Grid
          columns={{
            count: 4,
            size: 'auto'
          }}
          gap="small"
        >
          
        </Grid>
      </Box> */}
    </Box>
  );
};

const CardBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15em, 1fr));
  grid-gap: 1em;
  align-items: stretch;
`;

const getState = arr => {
  return arr.map(item => item.state);
};

const getFamilyNames = arr => {
  return arr.map(item => item.name);
};

const mapDispatchToProps = {
  getDashboardData,
  getFamiliesData,
  getIndividualsData,
  getCampsData,
  getFilterData
};

export default connect(null, mapDispatchToProps)(App);
