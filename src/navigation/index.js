import React from 'react';
import {ActionSheetProvider} from '@expo/react-native-action-sheet';
import AuthStack from './AuthStack';
// import BottomTab from './BottomTabs';

export default () => (
  <ActionSheetProvider>
    <AuthStack />
  </ActionSheetProvider>
);
