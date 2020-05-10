import React from 'react';
import styled from 'styled-components/native';
import {Colors} from './colors';

export const BigCircle = () => (
  <Container>
    <OuterCircle>
      <OuterrCircle>
        <OuterrrCircle>
          <OuterRing>
            <OuterrRing />
          </OuterRing>
        </OuterrrCircle>
      </OuterrCircle>
    </OuterCircle>
  </Container>
);

const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 10px;
`;
const OuterCircle = styled.View`
  width: 400px;
  height: 400px;
  border-radius: 200px;
  border: 1px solid rgba(47, 128, 237, 0.04);
  justify-content: center;
  align-items: center;
  align-self: center;
`;
const OuterrCircle = styled(OuterCircle)`
  width: 264px;
  height: 264px;
  border-radius: 132px;
  border: 1px solid rgba(47, 128, 237, 0.08);
`;
const OuterrrCircle = styled(OuterCircle)`
  width: 160px;
  height: 160px;
  border-radius: 80px;
  border: 1px solid rgba(47, 128, 237, 0.12);
`;
const OuterRing = styled(OuterCircle)`
  width: 56px;
  height: 56px;
  border-radius: 26px;
  background: rgba(47, 128, 237, 0.1);
`;
const OuterrRing = styled(OuterRing)`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 4px solid ${Colors.white};
  background: ${Colors.blue};
  box-shadow: 0px 0px 8px rgba(47, 128, 237, 0.35);
`;
const Dot = styled.View`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #2f80ed;
`;
