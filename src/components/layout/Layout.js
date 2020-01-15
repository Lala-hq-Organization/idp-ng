import React from "react";

import { Grommet, Box, Grid, Text } from "grommet";
import { grommet } from "grommet/themes";
import { Notification, StatusUnknown } from "grommet-icons";

import styles from "./styles";
import Sider from "./Sider";

const App = props => {
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
          pad={{ horizontal: "medium", vertical: "medium" }}
          background="#F7F4FF"
          style={styles.header}
        >
          <Box>
            <Text>Header Name</Text>
          </Box>

          <Box>
            <Text>Header Name</Text>
          </Box>

          <Box direction="row">
            <Notification color="plain" />
            <Box width="xxsmall"></Box>
            <StatusUnknown color="plain" />
            <Box width="xxsmall"></Box>
            <Text>Logout</Text>
          </Box>
        </Box>

        <Sider />
        <Box gridArea="main" justify="center" align="center">
          {props.children}
        </Box>
      </Grid>
    </Grommet>
  );
};

export default App;
