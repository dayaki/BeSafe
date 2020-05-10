import React, {useRef} from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Colors} from '../constants/colors';
import {InfoIcon, BackIcon} from '../../assets/icons';
// import {wp, hp} from '../constants/utils';

const Intro = ({navigation}) => {
  const slider = useRef();

  const slides = [
    {
      key: '1',
      icon: require('../../assets/images/intro-1.png'),
      text:
        'This app anonymously tracks if you have been nearby someone who tested positive for COVID-19.',
    },
    {
      key: '2',
      icon: require('../../assets/images/intro-2.png'),
      text:
        'Your phone shares a unique number with phones around you. This happens anonymously.',
    },
    {
      key: '3',
      icon: require('../../assets/images/intro-3.png'),
      text:
        'You also receive unique numbers from phones around you. They are stored securely.',
    },
    {
      key: '4',
      icon: require('../../assets/images/intro-3.png'),
      text:
        'If someone tests positive for COVID-19, their unique number is shared with all phones in your country.',
    },
    {
      key: '5',
      icon: require('../../assets/images/intro-3.png'),
      text:
        'Every phone that has been nearby this phone in the last 14 days will receive a notification.',
    },
    {
      key: '6',
      icon: require('../../assets/images/intro-3.png'),
      text:
        'All data is anonymously shared, securely stored, and can’t be traced back to your identity.',
    },
  ];

  const handleContinue = () => {
    navigation.navigate('SetBluetooth');
  };

  const changeSlide = (type, index) => {
    if (type === 'next') {
      slider.current.goToSlide(index + 1);
    } else {
      slider.current.goToSlide(index - 1);
    }
  };

  const renderPagination = index => (
    <Pagination>
      <BackBtn
        activeOpacity={0.8}
        onPress={index > 0 ? () => changeSlide('prev', index) : null}>
        <BackIcon width={7.41} height={12} />
      </BackBtn>
      <NextBtn
        activeOpacity={0.8}
        onPress={
          index < 5 ? () => changeSlide('next', index) : () => handleContinue()
        }>
        <NextText>{index < 5 ? 'Next' : 'Continue'}</NextText>
      </NextBtn>
    </Pagination>
  );

  const renderItem = ({item}) => {
    return (
      <Slider>
        <ImageWrapper>
          <Image source={item.icon} resizeMode="cover" />
        </ImageWrapper>
        <TextWrapper>
          <Text>{item.text}</Text>
        </TextWrapper>
      </Slider>
    );
  };

  return (
    <Container>
      <Header>
        <Title>How does it work</Title>
        <Info activeOpacity={0.8}>
          <InfoIcon width={24} height={24} />
        </Info>
      </Header>
      <AppIntroSlider
        ref={slider}
        data={slides}
        renderItem={renderItem}
        showNextButton={false}
        showPrevButton={false}
        renderPagination={renderPagination}
        onSlideChange={index => console.log(index)}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: #fff;
  flex: 1;
  align-items: center;
`;
const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
`;
const Title = styled.Text`
  color: ${Colors.black};
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  font-family: 'Avenir-Book';
`;
const Info = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;
const Slider = styled.View`
  width: 100%;
  height: 100%;
  /* padding: 10px 0px; */
  align-items: center;
`;
const ImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: 315px;
  margin-top: 20px;
  /* margin-top: 70px; */
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const TextWrapper = styled.View`
  align-items: center;
  width: 80%;
  position: absolute;
  bottom: 10px;
`;
const Text = styled.Text`
  font-size: 17px;
  text-align: left;
  line-height: 24px;
  color: ${Colors.black};
  font-family: 'Avenir-Medium';
`;
const Pagination = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 30px;
`;
const BackBtn = styled.TouchableOpacity`
  background: ${Colors.lightgray};
  width: 44px;
  height: 44px;
  border-radius: 22px;
  justify-content: center;
  align-items: center;
`;
const NextBtn = styled.TouchableOpacity`
  width: 102px;
  height: 44px;
  border-radius: 24px;
  background-color: ${Colors.black};
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
`;
const NextText = styled.Text`
  color: ${Colors.white};
  font-weight: 500;
  font-size: 17px;
  line-height: 22px;
  font-family: 'Avenir-Light';
`;

export default Intro;
