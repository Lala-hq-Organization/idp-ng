import React, { useEffect, useState } from 'react';
import { Box, Grid } from 'grommet';
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
  useEffect(() => {
    props.getDashboardData(request);
    props.getFamiliesData(request, props.pageNum);
    props.getIndividualsData(request, props.pageNum);
    props.getCampsData(request);
  }, [props]);

  const [values, setValues] = useState({
    gender: '',
    data_added: '',
    state: '',
    family: ''
  });

  const { dashboard, families, camps } = useSelector(({ data }) => data);

  let statesArr = dashboard[4] ? dashboard[4].states : [];
  let famArr = families.data ? families.data : [];

  const handleFilter = () => {
    console.log({ values });
    props.getFilterData(request, props.pageNum, values);
  };

  return (
    <Box style={styles.elaborateFilterBox}>
      <Filter
        justify="start"
        style={styles.filter2}
        handleFilterDisplay={props.handleFilterDisplay}
      />
      <Box>
        <Grid
          columns={{
            count: 4,
            size: 'auto'
          }}
          gap="small"
        >
          <Select
            placeholder="Camps"
            id="camps"
            options={camps.data}
            values={values}
            setValues={setValues}
            name="camp"
          />
          <Select
            placeholder="Family"
            id="family"
            name="family"
            options={getFamilyNames(famArr)}
            values={values}
            setValues={setValues}
          />
          <Select
            placeholder="State"
            id="state"
            name="state"
            options={getState(statesArr)}
            values={values}
            setValues={setValues}
          />
          <Select
            placeholder="Gender"
            id="gender"
            options={['Male', 'Female']}
            values={values}
            setValues={setValues}
            name="gender"
          />
          <Select
            placeholder="LGA"
            id="lga"
            options={['LGA', 'LGA']}
            values={values}
            setValues={setValues}
            name="lga"
          />
          <Select
            placeholder="Date"
            id="date_added"
            options={['Date1', 'Date2']}
            values={values}
            setValues={setValues}
            name="date_added"
          />
          <Button
            boxStyle={styles.go}
            handleButton={handleFilter}
            textStyle={styles.goText}
            text="Go"
          />
        </Grid>
      </Box>
    </Box>
  );
};

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
