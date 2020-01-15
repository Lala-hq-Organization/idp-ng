import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';
import { LineChart, BarChart } from 'grommet-icons';

export default function DashCard() {
  return (
    <Box direction="row-responsive">
      <Card>
        <div>
          <Title>total candidates</Title>
          <Count>123,456</Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card>
        {' '}
        <div>
          <Title>total camps</Title>
          <Count>123,456</Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card>
        <div>
          <Title>total families</Title>
          <Count>123,456</Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card>
        <div>
          <Title>total children</Title>
          <Count>123,456</Count>
        </div>
        <IconContainer>
          <BarChart />
        </IconContainer>
      </Card>
    </Box>
  );
}

const Card = styled.div`
  width: 14em;
  height: 7em;
  padding: 1rem;
  background: cornflowerblue;
  color: #fff;
  box-shadow: 0 1px 3px 0 cornflowerblue, 0 0 0 1px cornflowerblue;
  border-radius: 14px;
  margin-right: 2em;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }
`;

const Title = styled.h3`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
`;

const Count = styled.p`
  margin-top: 0.2em;
  font-size: 2.4rem;
  font-weight: 600;
`;

const IconContainer = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 56px;
  height: 57px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
