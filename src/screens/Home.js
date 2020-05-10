import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/colors';
import {BigCircle} from '../constants/utils';

const Home = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <BigCircle />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: ${Colors.white};
  align-content: center;
`;

export default Home;
