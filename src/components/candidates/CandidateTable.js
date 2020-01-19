import React, { useState, useContext } from 'react';
import { Box, DataTable, ResponsiveContext } from 'grommet';

import { DATA, columns, individualColumns, DATA2 } from './fakeData';
import Layout from '../layout/Layout';
import styles from './styles';
import Filter from './Filter';
import ElaborateFilter from './ElaborateFilter';
import Button from './Button';
import AlternateTableMenu from './AlternateTableMenu';

const Candidates = () => {
  const size = useContext(ResponsiveContext);
  const [currentTable, setCurrentTable] = useState(DATA);
  const [currentColumn, setCurrentColumn] = useState(columns);
  const [displayFilters, setDisplayFilters] = useState(false);
  function setIndividualTable() {
    setCurrentTable(DATA2);
    setCurrentColumn(individualColumns);
  }

  function setFamilyTable() {
    setCurrentTable(DATA);
    setCurrentColumn(columns);
  }
  function handleFilterDisplay() {
    setDisplayFilters(!displayFilters);
  }
  console.log(size);
  return (
    <Layout>
      <Box
        align="center"
        pad={{ vertical: 'small' }}
        style={styles.mainDiv}
        name="Candidates"
      >
        {displayFilters ? (
          <ElaborateFilter handleFilterDisplay={handleFilterDisplay} />
        ) : (
          <Filter
            align="center"
            justify="start"
            pad="large"
            style={styles.filter}
            handleFilterDisplay={handleFilterDisplay}
          />
        )}
        <Box style={styles.table}>
          {size === 'large' || size === 'medium' ? (
            <Box
              direction="row"
              width="100%"
              justify="between"
              style={styles.header}
            >
              <Box direction="row" justify="between" style={styles.btnBox}>
                <Button
                  boxStyle={styles.individuals}
                  handleButton={setIndividualTable}
                  textStyle={styles.individualsText}
                  text="Individuals"
                />
                <Button
                  boxStyle={styles.families}
                  handleButton={setFamilyTable}
                  textStyle={styles.familyText}
                  text="Families"
                />
              </Box>
              <Button
                boxStyle={styles.exportData}
                // handleButton={setFamilyTable}
                textStyle={styles.exportDataText}
                text="Export Data"
              />
            </Box>
          ) : (
            <AlternateTableMenu
              handleFamily={setFamilyTable}
              handleIndividuals={setIndividualTable}
            />
          )}

          <Box style={{ display: 'block', width: '100%', overflowX: 'auto' }}>
            <DataTable
              primaryKey="key"
              style={styles.tableStyle}
              columns={currentColumn}
              data={currentTable}
              pad={{
                body: { horizontal: 'large', vertical: 'medium' },
                header: { horizontal: 'large', vertical: 'xsmall' }
              }}
              background={{
                header: '#F1F3F9',
                body: ['#F7FAFC', '#FFFFFF'],
                footer: 'dark-3'
              }}
              border={{ body: 'bottom' }}
              rowProps={{ Eric: { background: 'accent-2', pad: 'large' } }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Candidates;
