import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Home from '../screens/Home';

const Stack = createStackNavigator();

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AppStack;
