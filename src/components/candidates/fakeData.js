import React from 'react';

import { Box, Text } from 'grommet';
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

export const columns = [
  {
    property: 'name',
    header: (
      <Text size="small" color="#8898AA">
        NAME
      </Text>
    )
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
  },
  {
    property: 'key',
    header: (
      <Text size="small" color="#8898AA">
        KEY
      </Text>
    )
  }
];

export const DATA = [
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
    Children: 25,
    key: 'firstKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '159',
    State: '6',
    Number: '24',
    Children: 72,
    key: 'secondKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '205',
    State: '32',
    Number: '43',
    Children: 31,
    key: 'thirdKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '150',
    State: '10',
    Number: '12',
    Children: 95,
    key: 'fourthKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    State: '160',
    Date: '0',
    Number: '41',
    Children: 10,
    key: 'fifthKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    State: '210',
    Date: '56',
    Number: '28',
    Children: 40,
    key: 'sixthKey'
  }
];

export const individualColumns = [
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
    property: 'Gender',
    header: (
      <Text size="small" color="#8898AA">
        GENDER
      </Text>
    )
  },
  {
    property: 'Family',
    header: (
      <Text size="small" color="#8898AA">
        FAMILY
      </Text>
    )
  },
  {
    property: 'Age',
    header: (
      <Text size="small" color="#8898AA">
        AGE GROUP
      </Text>
    )
  },
  {
    property: 'Occupation',
    header: (
      <Text size="small" color="#8898AA">
        OCCUPATION
      </Text>
    )
  },
  {
    property: 'key',
    header: (
      <Text size="small" color="#8898AA">
        KEY
      </Text>
    )
  }
];

export const DATA2 = [
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '356',
    State: '16',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'seventhKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '159',
    State: '6',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'eigthKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '205',
    State: '32',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'ninthKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    Date: '150',
    State: '10',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'tenthKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    State: '160',
    Date: '0',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'eleventhKey'
  },
  {
    name: (
      <Box direction="row" style={styles.profile}>
        <Avatar />
        <Text style={styles.profileName}>GingerBread</Text>
      </Box>
    ),
    State: '210',
    Date: '67',
    Gender: 'female',
    Family: 25,
    Age: 34,
    Occupation: 'Farmer',
    key: 'twelvethKey'
  }
];
