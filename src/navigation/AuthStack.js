import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Intro from '../screens/Intro';
// import Landing from '../screens/Landing';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Intro" component={Intro} />
    {/* <Stack.Screen name="Landing" component={Landing} /> */}
  </Stack.Navigator>
);

export default AuthStack;
