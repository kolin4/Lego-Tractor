import React from 'react';
import styled from 'styled-components';
import Aside from '../aside/index';
import Speedmeter from '../Speedmeter';
import Movement from '../Movement';

const Container = styled.div`
  display:flex;
  min-height: 90vh;
`;

const MainBox = styled.div`
  width:100%;
  min-height:100%;
  display:flex;
  flex-direction:column;
  `;
const Main = () => (
  <Container>
    <MainBox>
      <Speedmeter />
      <Movement />
    </MainBox>
    <Aside />
  </Container>
);

export default Main;
