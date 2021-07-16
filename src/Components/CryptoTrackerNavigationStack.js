import React from 'react';
import {} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import CoinsScreen from './CoinsScreen.js';
import CoinDetailsScreen from './CoinDetailsScreen.js';

import Colors from './Colors.js';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

const CryptoTrackerNavigationStack = () => 
{
    return(
    <Stack.Navigator
     screenOptions={{
         headerStyle:{
             backgroundColor: Colors.blackPearl,
             shadowColor: color.blackPearl
         },
         headerTintColor: Colors.white
     }} >
        <Stack.Screen name="CoinsScreen" component={CoinsScreen} />
        <Stack.Screen name="CoinDetailsScreen" component={CoinDetailsScreen} /> 
    </Stack.Navigator>
    )
}

export default CryptoTrackerNavigationStack;