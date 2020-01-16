import React from 'react';

import { Box, DataTable, Text, Meter } from 'grommet';

import Layout from '../layout/Layout';
import styles from './styles';

export const Avatar = ({ ...rest }) => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    background="url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)"
    {...rest}
  />
);

const columns = [
  {
    property: 'name',
    header: (
      <Text size="small" color="#8898AA">
        NAME
      </Text>
    ),
    primary: true
  },
  {
    property: 'Date',
    header: (
      <Text size="small" color="#8898AA">
        DATE ADDED
      </Text>
    )
  },
  {
    property: 'State',
    header: (
      <Text size="small" color="#8898AA">
        STATE
      </Text>
    )
  },
  {
    property: 'Number',
    header: (
      <Text size="small" color="#8898AA">
        NUMBER
      </Text>
    )
  },
  {
    property: 'Children',
    header: (
      <Text size="small" color="#8898AA">
        CHILDREN
      </Text>
    )
  }
];
const DATA = [
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '356',
    State: '16',
    Number: '49',
    Children: 25
  },
  {
    name: (
      <>
        <Box direction="row">
          <Avatar />
          GingerBread
        </Box>
      </>
    ),
    Date: '159',
    State: '6',
    Number: '24',
    Children: 72
  },
  {
    name: (
      <>
        <Box direction="row">
          <Avatar />
          GingerBread
        </Box>
      </>
    ),
    Date: '205',
    State: '32',
    Number: '43',
    Children: 31
  },
  {
    name: (
      <>
        <Box direction="row">
          <Avatar />
          GingerBread
        </Box>
      </>
    ),
    Date: '150',
    State: '10',
    Number: '12',
    Children: 95
  },
  {
    name: (
      <>
        <Box direction="row">
          <Avatar />
          GingerBread
        </Box>
      </>
    ),
    State: '160',
    Date: '0',
    Number: '41',
    Children: 10
  },
  {
    name: (
      <>
        <Box direction="row">
          <Avatar />
          GingerBread
        </Box>
      </>
    ),
    State: '210',
    Date: '0',
    Number: '28',
    Children: 40
  }
];

const Candidates = () => (
  <Layout>
    <Box align="center" pad={{ vertical: 'large' }} style={styles.mainDiv}>
      <Box style={styles.table}>
        <Box
          direction="row"
          width="100%"
          justify="between"
          style={styles.header}
        >
          <Box direction="row" width="20%" justify="between">
            <Box>yes</Box>
            <Box>No</Box>
          </Box>
          <Box>Never</Box>
        </Box>

        <Box>
          <DataTable
            style={styles.tableStyle}
            columns={columns}
            data={DATA}
            step={7}
            pad={{
              body: { horizontal: 'large', vertical: 'medium' },
              header: { horizontal: 'medium', vertical: 'xsmall' }
            }}
            background={{
              header: '#F1F3F9',
              body: ['#FFFFFF', '#F7FAFC'],
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

export default Candidates;
