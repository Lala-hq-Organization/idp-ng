import React from "react";

import { Grommet, Box, Button, Grid, Text } from "grommet";
import { grommet } from "grommet/themes";

import styles from "./styles";

const App = () => {
  return (
    <Grommet full theme={grommet}>
      <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "sidebar", start: [0, 1], end: [0, 1] },
          { name: "main", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          background="dark-2"
          style={styles.header}
        >
          <Text>my@email</Text>
        </Box>

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
        <Box gridArea="main" justify="center" align="center">
          <Text>main</Text>
        </Box>
      </Grid>
    </Grommet>
  );
};

export default App;
