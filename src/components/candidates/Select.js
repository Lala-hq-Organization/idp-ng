import React, { useState } from 'react';
import { Box, Select } from 'grommet';

const App = props => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <Box>
      <Select
        id="select"
        name="select"
        placeholder={props.placeholder}
        value={value}
        options={options}
        onChange={({ option }) => setValue(option)}
      />
    </Box>
  );
};

export default App;
