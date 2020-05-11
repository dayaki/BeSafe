import React, {useState, useEffect} from 'react';
import {Platform, Linking} from 'react-native';
import styled from 'styled-components/native';
import {
  useBluetoothStatus,
  BluetoothStatus,
} from 'react-native-bluetooth-status';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {BluetoothIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const SetBluetooth = ({navigation}) => {
  const [btState, setBtState] = useState(false);
  const [btStatus] = useBluetoothStatus();

  useEffect(() => {
    getBluetoothState();
  });

  const getBluetoothState = async () => {
    const isEnabled = await BluetoothStatus.state();
    setBtState(isEnabled);
    if (!isEnabled && Platform.OS === 'ios') {
      checkPermission();
    }
  };

  const checkPermission = () => {
    check(PERMISSIONS.IOS.BLUETOOTH_PERIPHERAL)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('error', error);
      });
  };

  const activateBluetooth = () => {
    if (Platform.OS === 'android') {
      BluetoothStatus.enable();
    } else {
      Linking.openSettings();
    }
  };

  const nextStep = () => {
    navigation.navigate('SetNotification');
  };

  return (
    <Container>
      {!btState && !btStatus ? (
        <>
          <BlueTooth>
            <BluetoothIcon width={24} height={24} />
          </BlueTooth>
          <Title>Please enable Bluetooth</Title>
          <SubText>
            This app needs Bluetooth to start {'\n'}anonymous contact tracing.
          </SubText>
          <Text>This might slightly impact battery life.</Text>
          <ActionBtn activeOpacity={0.8} onPress={activateBluetooth}>
            <ActionText>
              {Platform.OS === 'android' ? 'Enable Bluetooth' : 'Settings'}
            </ActionText>
          </ActionBtn>
        </>
      ) : (
        <>
          <BluetoothWrapper>
            <OuterCircle>
              <OuterrCircle>
                <Circle>
                  <BluetoothIcon width={24} height={24} fill="#fff" />
                </Circle>
              </OuterrCircle>
            </OuterCircle>
          </BluetoothWrapper>
          <Title>Bluetooth enabled</Title>
          <SubText>
            This app uses Bluetooth for anonymous {'\n'} contact tracing.
          </SubText>
          <Text>This might slightly impact battery life.</Text>
          <ActionBtn activeOpacity={0.8} onPress={nextStep}>
            <ActionText>Continue</ActionText>
          </ActionBtn>
        </>
      )}
    </Container>
  );
};

const BluetoothWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 120px;
`;
const OuterCircle = styled.View`
  width: 112px;
  height: 112px;
  border-radius: 56px;
  /* border: 1px solid #2f80ed; */
  border: 1px solid rgba(47, 128, 237, 0.12);
  justify-content: center;
  align-items: center;
`;
const OuterrCircle = styled(OuterCircle)`
  width: 72px;
  height: 72px;
  border-radius: 36px;
  /* opacity: 0.12; */
  border: 1px solid rgba(47, 128, 237, 0.12);
`;
const Circle = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 26px;
  background: ${Colors.blue};
  justify-content: center;
  align-items: center;
`;
const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0px 20px;
  margin-top: -20px;
`;
const BlueTooth = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  background: ${Colors.lightgray};
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-family: 'Avenir-Heavy';
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  color: ${Colors.black};
  margin-top: 50px;
`;
const SubText = styled.Text`
  font-family: 'Avenir-Book';
  font-size: 15px;
  line-height: 20px;
  color: ${Colors.black};
  text-align: center;
  margin-top: 12px;
`;
const Text = styled.Text`
  font-family: 'Avenir-Light';
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  margin-top: 20px;
  color: #696969;
`;
const ActionBtn = styled.TouchableOpacity`
  background: ${Colors.black};
  border-radius: 24px;
  width: 272px;
  height: 44px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
`;
const ActionText = styled.Text`
  color: ${Colors.white};
  font-family: 'Avenir-Medium';
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
`;

export default SetBluetooth;
