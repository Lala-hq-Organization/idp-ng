import React from "react";
import { Box, Button, Text } from "grommet";

import styles from "./styles";

const App = () => (
  <Box
    gridArea="sidebar"
    background="#9D52CC"
    width="small"
    style={styles.sider}
  >
    {["Dashboard", "Candidates", "Camps"].map(name => (
      <Button key={name} href="#" hoverIndicator>
        <Box pad={{ horizontal: "medium", vertical: "small" }}>
          <Text>{name}</Text>
        </Box>
      </Button>
    ))}
  </Box>
);

export default App;
