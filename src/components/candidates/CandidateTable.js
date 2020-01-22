import React, { useState, useContext, useEffect } from 'react';
import { Box, DataTable, ResponsiveContext, Text } from 'grommet';
import { connect, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FormNext, FormPrevious } from 'grommet-icons';

import { columns, individualColumns, Avatar } from './fakeData';
import Layout from '../layout/Layout';
import styles from './styles';
import Filter from './Filter';
import ElaborateFilter from './ElaborateFilter';
import Button from './Button';
import AlternateTableMenu from './AlternateTableMenu';
import { getIndividualsData, getFamiliesData } from '../data/data.action';
import request from '../../request';

import './paginate.css';

const Candidates = props => {
  useEffect(() => {
    props.getIndividualsData(request);
    props.getFamiliesData(request);
  }, [props]);

  const { individuals, families } = useSelector(({ data }) => data);

  const candidates = () => {
    if (individuals.data) {
      return individuals.data.map(item => ({
        name: (
          <Box direction="row" style={styles.profile}>
            <Avatar image={item.image} />
            <Text style={styles.profileName}>{item.name}</Text>
          </Box>
        ),
        Date: item.date_added,
        State: item.state,
        Gender: item.gender,
        Family: item.family,
        Age: item.age_group,
        Occupation: item.occupation,
        id: item._id
      }));
    }
    return [];
  };

  const familiesData = () => {
    if (families.data) {
      return families.data.map(item => ({
        name: (
          <Box direction="row" style={styles.profile}>
            <Avatar />
            <Text style={styles.profileName}>{item.name}</Text>
          </Box>
        ),
        Date: item.date_added,
        State: item.state,
        Number: item.total_number,
        Children: item.children,
        id: item._id
      }));
    }
    return [];
  };

  const size = useContext(ResponsiveContext);
  const [currentTable, setCurrentTable] = useState([]);
  const [currentColumn, setCurrentColumn] = useState(columns);
  const [displayFilters, setDisplayFilters] = useState(false);

  function setIndividualTable() {
    setCurrentTable(candidates());
    setCurrentColumn(individualColumns);
  }

  function setFamilyTable() {
    setCurrentTable(familiesData());
    setCurrentColumn(columns);
  }

  function handleFilterDisplay() {
    setDisplayFilters(!displayFilters);
  }

  console.log(individuals.count);
  console.log(individuals.data);

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
              primaryKey="id"
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
          <Box style={styles.pageBox}>
            <ReactPaginate
              previousLabel={<FormPrevious />}
              nextLabel={<FormNext />}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={28}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              // onPageChange={this.handlePageClick}
              containerClassName={'paginateContainer'}
              pageClassName="page-links"
              previousClassName="previous-btn"
              previousLinkClassName="previous-btn-link"
              nextClassName="previous-btn"
              nextLinkClassName="previous-btn-link"
              // subContainerClassName={'pages pagination'}
              // activeClassName={'active'}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

const mapDispatchToProps = {
  getIndividualsData,
  getFamiliesData
};

export default connect(null, mapDispatchToProps)(Candidates);
