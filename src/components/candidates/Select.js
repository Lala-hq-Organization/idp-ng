import React from 'react';
import { Box, Select } from 'grommet';

const App = props => {
  const handleOptionChange = ({ option, target }) => {
    const { name } = target;
    props.setValues({ ...props.values, [name]: option });
  };

  return (
    <Box>
      <Select
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        options={props.options}
        onChange={id => handleOptionChange(id)}
      />
    </Box>
  );
};

export default App;

///candidates/filter
//{
//   gender: string;
//   date_added: 'string; only the date part';
//   state: string;
//   family: number;
// }
