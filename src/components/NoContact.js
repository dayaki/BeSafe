import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {
  connectActionSheet,
  useActionSheet,
} from '@expo/react-native-action-sheet';
import {Dimensions} from 'react-native';
import {Colors} from '../constants/colors';
import {BottomSheet} from './BottomSheet';
import {PhoneOffIcon} from '../../assets/icons';

const NoContact = () => {
  const symptomsModal = useRef();
  const learnmoreModal = useRef();
  const {showActionSheetWithOptions} = useActionSheet();

  const showActionSheet = () => {
    showActionSheetWithOptions(
      {
        options: [
          'Pause for 2 hours',
          'Pause for 8 hours',
          'Turn off',
          'Cancel',
        ],
        title: 'Turn off contact tracing',
        tintColor: '#2F80ED',
        cancelButtonIndex: 3,
      },
      buttonIndex => {
        console.log(buttonIndex);
      },
    );
  };

  const RenderSymptoms = () => {
    return (
      <Text>
        Based on your data, you have not been nearby someone who tested positive
        for COVID-19.
      </Text>
    );
  };

  return (
    <Container>
      <BottomSheet
        openRef={symptomsModal}
        height={Dimensions.get('screen').height - 200}
        render={<RenderSymptoms />}
      />

      {/* <Title>No contact detected</Title>
      <Text>
        Based on your data, you have not been nearby someone who tested positive
        for COVID-19.
      </Text> */}
      <InfoBox>
        <InfoTitle>
          <PhoneOffIcon width={20} height={20} /> Contact tracing off
        </InfoTitle>
        <InfoText>
          You will not be notified if you have been nearby someone who tested
          positive for COVID-19.
        </InfoText>
        <InfoBtn>
          <InfoBtnText>Turn on</InfoBtnText>
        </InfoBtn>
      </InfoBox>
      <Button activeOpacity={0.8} onPress={() => symptomsModal.current.open()}>
        <ButtonText>Check for symptoms</ButtonText>
      </Button>
      <Button activeOpacity={0.8}>
        <ButtonText>Learn more</ButtonText>
      </Button>
      <LinkBtn activeOpacity={0.8} onPress={() => showActionSheet()}>
        <LinkText>Turn off contact tracing</LinkText>
      </LinkBtn>
    </Container>
  );
};

const InfoBox = styled.View`
  width: 280px;
  height: 230px;
  background: ${Colors.black};
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
const InfoTitle = styled.Text`
  color: ${Colors.white};
  font-family: 'Avenir-Black';
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
`;
const InfoText = styled.Text`
  font-family: 'Avenir-Book';
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${Colors.white};
  margin-top: 10px;
`;
const InfoBtn = styled.TouchableOpacity`
  width: 248px;
  height: 44px;
  background: ${Colors.white};
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  margin: 15px 0px;
`;
const InfoBtnText = styled.Text``;
const Container = styled.View`
  width: 264px;
  align-self: center;
`;
const Title = styled.Text`
  font-family: 'Avenir-Black';
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: ${Colors.black};
`;
const Text = styled.Text`
  font-family: 'Avenir-Book';
  font-weight: normal;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: ${Colors.black};
  margin: 20px 0px 30px;
`;
const Button = styled.TouchableOpacity`
  width: 203px;
  height: 44px;
  background: ${Colors.lightgray};
  border-radius: 40px;
  justify-content: center;
  align-self: center;
  margin-top: 15px;
`;
const ButtonText = styled.Text`
  font-family: 'Avenir-Book';
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  text-align: center;
  color: ${Colors.black};
`;
const LinkBtn = styled.TouchableOpacity`
  margin-top: 30px;
`;
const LinkText = styled.Text`
  font-family: 'Avenir-Book';
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: #696969;
`;
const Content = styled.View`
  padding-top: 20px;
`;

const ConnectedApp = connectActionSheet(NoContact);

export default ConnectedApp;
