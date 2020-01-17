import React from 'react';
import { Text } from 'grommet';

export const columns = [
  {
    property: 'name',
    header: <Text size="small">Name</Text>
  },
  {
    property: 'gender',
    header: <Text size="small">Gender</Text>
  },
  {
    property: 'age',
    header: <Text size="small">Age Group</Text>
  },
  {
    property: 'date',
    header: <Text size="small">Date Added</Text>
  }
];
export const DATA = [
  {
    name: 'Casper Sawrey',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  },
  {
    name: 'Kung Jiyeon',
    gender: 'Female',
    age: '13-19',
    date: 'Jan 6, 2018'
  },
  {
    name: 'Casper Sawre',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  },
  {
    name: 'Kung Jiyeo',
    gender: 'Female',
    age: '13-19',
    date: 'Jan 6, 2018'
  },
  {
    name: 'Casper Sarey',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  }
];
