import React from 'react';
import styled from 'styled-components/native';
import RBSheet from 'react-native-raw-bottom-sheet';

export const BottomSheet = ({render, height, openRef}) => (
  <RBSheet
    ref={openRef}
    closeOnDragDown={true}
    closeOnPressMask={false}
    animationType={'fade'}
    height={height || '740'}
    customStyles={{
      wrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
      },
      container: {
        paddingHorizontal: 30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
      },
      draggableIcon: {
        backgroundColor: '#000',
      },
    }}>
    <Content showsVerticalScrollIndicator={false}>{render}</Content>
  </RBSheet>
);

const Content = styled.ScrollView`
  padding-top: 20px;
`;
