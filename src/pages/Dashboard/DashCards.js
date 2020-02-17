import React from 'react';
import styled from 'styled-components';
import { LineChart, BarChart } from 'grommet-icons';

export default function DashCard(props) {
  const { dashboard } = props;

  return (
    <CardBox>
      <Card background="linear-gradient(150deg, rgba(4, 202, 251, 1) 0%, rgba(54, 128, 215, 1) 90%)">
        <div>
          <Title>total candidates</Title>
          <Count>
            {dashboard.length > 0 ? dashboard[1].candidates : 'Loading'}
          </Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card background="linear-gradient(162deg, rgba(24,139,101,1) 7%, rgba(42,198,146,1) 45%)">
        {' '}
        <div>
          <Title>total camps</Title>
          <Count>{dashboard.length > 0 ? dashboard[0].camps : 'Loading'}</Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card background="linear-gradient(150deg, rgba(4, 202, 251, 1) 0%, rgba(54, 128, 215, 1) 90%)">
        <div>
          <Title>total families</Title>
          <Count>
            {dashboard.length > 0 ? dashboard[2].families : 'Loading'}
          </Count>
        </div>
        <IconContainer>
          <LineChart />
        </IconContainer>
      </Card>
      <Card background="linear-gradient(162deg, rgba(24,139,101,1) 7%, rgba(42,198,146,1) 45%)">
        <div>
          <Title>total children</Title>
          <Count>
            {dashboard.length > 0 ? dashboard[3].children : 'Loading'}
          </Count>
        </div>
        <IconContainer>
          <BarChart />
        </IconContainer>
      </Card>
    </CardBox>
  );
}

const CardBox = styled.div`
  display: grid;
  align-items: center;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(12em, 1fr));
  margin-bottom: 3em;
`;

const Card = styled.div`
  flex: 1 1 100%;
  padding: 1em 1.22em;
  background: rgb(4, 202, 251);
  background: ${props => props.background};
  color: #fff;
  border-radius: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background: #683687;
  }
`;

const Title = styled.h3`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.25rem;
`;

const Count = styled.p`
  margin-top: 0.2em;
  font-size: 2rem;
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
