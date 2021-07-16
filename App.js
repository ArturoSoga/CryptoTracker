import React from 'react';
import {} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import CryptoTrackerNavigationStack from './src/Components/CryptoTrackerNavigationStack.js';



const App = () =>{
  return(
    <NavigationContainer>
    <CryptoTrackerNavigationStack />
    </NavigationContainer>
  )
}

export default App;