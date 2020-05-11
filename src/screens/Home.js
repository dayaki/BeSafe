import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {
  useBluetoothStatus,
  BluetoothStatus,
} from 'react-native-bluetooth-status';
import {Colors} from '../constants/colors';
import {BigCircle} from '../constants/utils';
import NoContact from '../components/NoContact';

const Home = () => {
  const [btState, setBtState] = useState(true);
  const [traceActive, setTraceActive] = useState(true);
  const [btStatus] = useBluetoothStatus();

  useEffect(() => {
    getBluetoothState();
  }, [btStatus]);

  const getBluetoothState = async () => {
    const isEnabled = await BluetoothStatus.state();
    setBtState(isEnabled);
  };

  return (
    <Container showsVerticalScrollIndicator={false}>
      <BigCircle />
      <NoContact btState={btState} trState={traceActive} />
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
