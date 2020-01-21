import React from 'react';

import { Box, Text } from 'grommet';
import styles from './styles';

export const Avatar = props => (
  <Box
    height="xxsmall"
    width="xxsmall"
    round="full"
    background={
      props.image
        ? props.image
        : 'url(//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80)'
    }
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
    Children: 25
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
    Children: 72
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
    Children: 31
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
    Children: 95
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
    Children: 10
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
    Children: 40
  }
];

export const individualColumns = [
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
    Occupation: 'Farmer'
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
    Occupation: 'Farmer'
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
    Occupation: 'Farmer'
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
    Occupation: 'Farmer'
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
    Occupation: 'Farmer'
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
    Occupation: 'Farmer'
  }
];
