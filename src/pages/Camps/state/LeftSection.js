import React from 'react';
import { Box, Image } from 'grommet';
import { useParams } from 'react-router-dom';

import { styles } from '../styles';
import thumbnail from '../../../assets/cute-774909@2x.png';

export default function LeftSection() {
  let { state } = useParams();

  return (
    <Box style={styles.firstBox}>
      <Box direction="row">
        <Box height="xxsmall" width="xxsmall">
          <Image
            fit="cover"
            fill
            src={thumbnail}
            width="100%"
            style={styles.image}
          />
        </Box>
        <Box margin="0em 0em 0em 1em">
          <h2 style={styles.firstBoxTitle}>{state} camp</h2>
          <p style={styles.firstBoxSubtitle}>IDP/YOBE/001</p>
        </Box>
      </Box>
      <hr width="100%" style={{ border: '0.5px solid #eee' }} />
      <Box>
        <p style={styles.dataRow}>
          <span style={{ color: '#818F90' }}>Number in Camp:</span>
          <span style={{ color: '#000' }}>123,332,312</span>
        </p>
        <p style={styles.dataRow}>
          <span style={{ color: '#818F90' }}>Number of Families:</span>
          <span style={{ color: '#000' }}>123,312</span>
        </p>
        <p style={styles.dataRow}>
          <span style={{ color: '#818F90' }}>Number of Children:</span>
          <span style={{ color: '#000' }}>123,441</span>
        </p>
        <p style={styles.dataRow}>
          <span style={{ color: '#818F90' }}>State:</span>
          <span style={{ color: '#000' }}>Yobe</span>
        </p>
        <p style={styles.dataRow}>
          <span style={{ color: '#818F90' }}>LGA:</span>
          <span style={{ color: '#000' }}>Yobe South</span>
        </p>
      </Box>
    </Box>
  );
}
