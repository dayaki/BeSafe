import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import SplashScreen from 'react-native-splash-screen';
import Navigation from './src/navigation';

const App = () => {
  // SplashScreen.hide();
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
