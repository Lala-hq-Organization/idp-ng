import React from "react";
import { Box, Button, Text } from "grommet";

import styles from "./styles";
import logo from "../../images/logo.png";

const App = () => (
  <>
    <Box
      gridArea="sidebar"
      background="#9D52CC"
      width="small"
      style={styles.sider}
    >
      <Box style={styles.logobox}>
        <Box style={styles.logo}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", objectFit: "none" }}
          />
        </Box>
      </Box>
      {["Dashboard", "Candidates", "Camps"].map(name => (
        <Button key={name} href="#" hoverIndicator>
          <Box pad={{ horizontal: "medium", vertical: "small" }}>
            <Text>{name}</Text>
          </Box>
        </Button>
      ))}
    </Box>
  </>
);

export default App;
