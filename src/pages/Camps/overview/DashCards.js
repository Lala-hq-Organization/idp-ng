import React from 'react';
import styled from 'styled-components';

import { styles } from './styles';

export default function DashCard({ campData }) {
  campData = campData.data || [];

  return (
    // <Box direction="row-responsive" margin="0em 0em 2.8em 0em">
    <>
      {campData.map(camp => {
        return (
          <Card key={camp}>
            <Title>{camp}</Title>
            <Subtitle>lorem ipsum dolor</Subtitle>
            <a className="btn" href="#" style={styles.viewBtn}>
              View
            </a>
          </Card>
        );
      })}
    </>
    // </Box>
  );
}

const Card = styled.div`
  padding: 1em;
  background: rgb(4, 202, 251);
  background: linear-gradient(
    150deg,
    rgba(4, 202, 251, 1) 0%,
    rgba(54, 128, 215, 1) 90%
  );
  color: #fff;
  box-shadow: 0 1px 3px 0 cornflowerblue, 0 0 0 1px cornflowerblue;
  border-radius: 14px;
  margin-right: 2em;
  margin-top: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 0;
  margin-top: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
`;

const Subtitle = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  font-size: 1.5rem;
`;
