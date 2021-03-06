import React from 'react';
import { Box, Select } from 'grommet';

const App = props => {
  const handleOptionChange = ({ option, target }) => {
    const { name } = target;
    if (option === 'None') {
      props.setValues({ ...props.values, [name]: '' });
      return;
    }
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
