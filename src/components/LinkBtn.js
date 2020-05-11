import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '../constants/colors';

export const LinkBtn = ({text, onPress, noline = null, color, styles}) => {
  return noline ? (
    <Link activeOpacity={0.8} onPress={onPress} style={styles}>
      <LinkText color={color}>{text}</LinkText>
    </Link>
  ) : (
    <UnderLink
      activeOpacity={0.8}
      onPress={onPress}
      color={color}
      style={styles}>
      <LinkText color={color}>{text}</LinkText>
    </UnderLink>
  );
};

const Link = styled.TouchableOpacity`
  margin-top: 30px;
`;
const LinkText = styled.Text`
  font-family: 'Avenir-Book';
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  color: ${props => props.color || '#696969'};
`;

const UnderLink = styled.TouchableOpacity`
  padding-bottom: 1px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.color || Colors.blue};
`;
