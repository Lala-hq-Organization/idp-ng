import React from 'react';
import { Box, Button } from 'grommet';
import styled from 'styled-components';

export default function DashCard() {
  return (
    <Box direction="row-responsive" margin="0em 0em 2.8em 0em">
      <Card>
        <Title>total candidates</Title>
        <Subtitle>123,456</Subtitle>
        <Button
          label="View"
          as="a"
          href="#"
          plain={true}
          focusIndicator={false}
          onClick={() => {}}
        />
      </Card>
      <Card>
        <Title>total camps</Title>
        <Subtitle>123,456</Subtitle>
        <Button
          label="View"
          as="a"
          href="#"
          plain={true}
          focusIndicator={false}
          onClick={() => {}}
        />
      </Card>
      <Card>
        <Title>total families</Title>
        <Subtitle>123,456</Subtitle>
        <Button
          label="View"
          as="a"
          href="#"
          plain={true}
          focusIndicator={false}
          onClick={() => {}}
        />
      </Card>
    </Box>
  );
}

const Card = styled.div`
  width: 14em;
  padding: 1rem;
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

  &:last-child {
    margin-right: 0;
  }
`;

const CustomButton = styled(Button)`
  border-radius: 3px;
  background: cornflowerblue;
`;

const Title = styled.h3`
  margin-bottom: 0;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 1.5rem;
`;

const Subtitle = styled.p`
  margin-top: 0.2em;
  margin-bottom: 0.5em;
  font-size: 2.4rem;
  font-weight: 600;
`;
