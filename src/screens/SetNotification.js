import React, {useEffect, useState} from 'react';
import {Platform, Linking} from 'react-native';
import styled from 'styled-components/native';
import {useBluetoothStatus} from 'react-native-bluetooth-status';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {BellIcon, BellOffIcon} from '../../assets/icons';
import {Colors} from '../constants/colors';

const SetNotification = ({navigation}) => {
  const [ntState, setNtState] = useState(1);
  const [btStatus, isPending, setBluetooth] = useBluetoothStatus();

  useEffect(() => {
    // console.log(btStatus, isPending);
    // checkPermission();
  }, []);

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

  const activateNotification = () => {
    if (Platform.OS === 'android') {
      setBluetooth();
    } else {
      // open settings
    }
  };

  const openSettings = () => {
    Linking.openSettings();
  };

  const nextStep = () => {
    navigation.navigate('Home');
  };

  return (
    <Container>
      {ntState === 0 ? (
        <>
          <BlueTooth>
            <BellIcon width={24} height={24} />
            <Circle>
              <CircleText>1</CircleText>
            </Circle>
          </BlueTooth>
          <Title>Enable notifications</Title>
          <SubText>
            In order to receive important updates, {'\n'}you’ll need to enable
            notifications.
          </SubText>
          <ActionBtn activeOpacity={0.8} onPress={activateNotification}>
            <ActionText>Enable Notification</ActionText>
          </ActionBtn>
        </>
      ) : (
        <>
          <BluetoothAlt>
            <BellOffIcon width={24} height={24} />
          </BluetoothAlt>
          <Title>Please enable notifications</Title>
          <SubText>
            In order to receive important updates, {'\n'}you’ll need to enable
            notifications.
          </SubText>
          <Text> Notifications can be configured in Settings.</Text>
          <LinkBtn activeOpacity={0.8} onPress={openSettings}>
            <LinkText>Open Settings</LinkText>
          </LinkBtn>
          <ActionBtn activeOpacity={0.8} onPress={nextStep}>
            <ActionText>Continue</ActionText>
          </ActionBtn>
        </>
      )}
    </Container>
  );
};

const BluetoothAlt = styled.View`
  width: 56px;
  height: 56px;
  border-radius: 26px;
  justify-content: center;
  align-items: center;
  background: ${Colors.lightgray};
`;
const LinkBtn = styled.TouchableOpacity`
  padding-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: ${Colors.blue};
  margin-top: 40px;
`;
const LinkText = styled.Text`
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: ${Colors.blue};
`;
const Container = styled.View`
  flex: 1;
  background: ${Colors.white};
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
  background: ${Colors.black};
  justify-content: center;
  align-items: center;
`;
const Circle = styled.View`
  justify-content: center;
  align-items: center;
  background: ${Colors.red};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: 0px;
`;
const CircleText = styled.Text`
  font-family: 'Avenir-Light';
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  color: ${Colors.white};
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

export default SetNotification;
