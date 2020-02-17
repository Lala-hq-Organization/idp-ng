import React from 'react';
import { Box, Tabs, Tab, Text, DataTable, Grommet } from 'grommet';
import ReactPaginate from 'react-paginate';
import { FormNext, FormPrevious } from 'grommet-icons';

import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

import { columns, DATA, familyColumns, FAMILYDATA } from './data';
import { styles } from '../styles';
import pageStyle from '../../../components/candidates/styles';
import '../../../components/candidates/paginate.css';

console.log(pageStyle.pageBox);

const theme = deepMerge(grommet, {
  tab: {
    color: '#000',
    border: {
      side: 'bottom',
      size: 'medium',
      color: {
        dark: 'accent-1',
        light: '#fff'
      },
      active: {
        color: {
          dark: '#6F3895',
          light: '#6F3895'
        }
      },
      hover: {
        color: {
          dark: '#fff',
          light: '#fff'
        }
      }
    }
  },
  global: {
    focus: {
      border: {
        color: '#fff'
      }
    }
  }
});

export default function RightSection() {
  const [index, setIndex] = React.useState();

  const onActive = nextIndex => setIndex(nextIndex);

  return (
    <Box style={styles.secondBox}>
      <Grommet theme={theme}>
        <Tabs style={{ width: '100%' }} activeIndex={index} onActive={onActive}>
          <Tab title="Candidates" style={{ marginRight: '1em' }}>
            <Box>
              <h2>This is a summary of candidates in this camp</h2>
              <DataTable
                primaryKey="id"
                columns={columns}
                data={formatData(DATA)}
                step={5}
                pad={{ horizontal: 'small', vertical: 'small' }}
                background={{
                  header: '#fff',
                  body: ['#F4F6F8', '#fff']
                }}
                border={{
                  header: {
                    color: '#fff',
                    side: 'bottom'
                  }
                }}
              />
              <Box
                style={{
                  ...pageStyle.pageBox,
                  justifyContent: 'flex-end'
                }}
              >
                <ReactPaginate
                  previousLabel={<FormPrevious />}
                  nextLabel={<FormNext />}
                  breakLabel={'...'}
                  breakClassName={'break-me'}
                  pageCount={DATA.length}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={2}
                  containerClassName={'paginateContainer'}
                  pageClassName="page-links"
                  previousClassName="previous-btn"
                  previousLinkClassName="previous-btn-link"
                  nextClassName="previous-btn"
                  nextLinkClassName="previous-btn-link"
                />
              </Box>
            </Box>
          </Tab>
          <Tab title="Families">
            <Box>
              <h2>This is a summary of families in this camp</h2>
              <DataTable
                primaryKey="id"
                columns={familyColumns}
                data={formatData(FAMILYDATA)}
                pad={{ horizontal: 'small', vertical: 'small' }}
                background={{
                  header: '#fff',
                  body: ['#F4F6F8', '#fff']
                }}
                border={{
                  header: {
                    color: '#fff',
                    side: 'bottom'
                  }
                }}
              />
            </Box>
          </Tab>
        </Tabs>
      </Grommet>
    </Box>
  );
}

// Adds react tags to object values in the data array
const formatData = data => {
  return data.map(item => {
    const vals = Object.keys(item);

    for (const val of vals) {
      if (val === 'id') {
        continue;
      }

      item[val] = <Text size="small">{item[val]}</Text>;
    }

    return item;
  });
};
