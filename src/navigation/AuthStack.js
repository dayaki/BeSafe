import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Intro from '../screens/Intro';
import BluetoothScreen from '../screens/SetBluetooth';
import Notification from '../screens/SetNotification';
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Intro" component={Intro} />
    <Stack.Screen name="SetBluetooth" component={BluetoothScreen} />
    <Stack.Screen name="SetNotification" component={Notification} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AuthStack;
