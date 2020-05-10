import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/colors';
import {BigCircle} from '../constants/utils';
import NoContact from '../components/NoContact';

const Home = () => {
  return (
    <Container showsVerticalScrollIndicator={false}>
      <BigCircle />
      <NoContact />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: ${Colors.white};
  align-content: center;
  justify-content: center;
`;

export default Home;
