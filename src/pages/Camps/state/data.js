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
export const familyColumns = [
  {
    property: 'name',
    header: <Text size="small">Family name</Text>
  },
  {
    property: 'total',
    header: <Text size="small">Total number</Text>
  },
  {
    property: 'children',
    header: <Text size="small">Children</Text>
  },
  {
    property: 'date',
    header: <Text size="small">Date Added</Text>
  }
];

export const DATA = [
  {
    id: 1,
    name: 'Casper Sawrey',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  },
  {
    id: 2,
    name: 'Kung Jiyeon',
    gender: 'Female',
    age: '13-19',
    date: 'Jan 6, 2018'
  },
  {
    id: 3,
    name: 'Casper Sawre',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  },
  {
    id: 4,
    name: 'Kung Jiyeo',
    gender: 'Female',
    age: '13-19',
    date: 'Jan 6, 2018'
  },
  {
    id: 5,
    name: 'Casper Sarey',
    gender: 'Male',
    age: '0-12',
    date: 'Jan 6, 2018'
  }
];

export const FAMILYDATA = [
  {
    id: 6,
    name: 'Casper Sawrey',
    total: '7',
    children: 'N/A',
    date: 'Jan 6, 2018'
  },
  {
    id: 7,
    name: 'Kung Jiyeon',
    total: '9',
    children: '1',
    date: 'Jan 6, 2018'
  },
  {
    id: 8,
    name: 'Casper Sawre',
    total: '3',
    children: '3',
    date: 'Jan 6, 2018'
  },
  {
    id: 9,
    name: 'Kung Jiyeo',
    total: '6',
    children: 'N/A',
    date: 'Jan 6, 2018'
  },
  {
    id: 10,
    name: 'Casper Sarey',
    total: '6',
    children: '4',
    date: 'Jan 6, 2018'
  }
];
