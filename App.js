import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './screens/home'
import ISSLocationScreen from './screens/ISSlocation'
import MeteorScreen from './screens/meteor'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()
export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator initalRouteName = 'Home' screenOptions = {{
     headerShown: false
   }}>
   <Stack.Screen name = 'Home' component = {HomeScreen}/>
   <Stack.Screen name = 'ISSLocation' component = {ISSLocationScreen}/>
   <Stack.Screen name = 'Meteor' component = {MeteorScreen}/>
   </Stack.Navigator>
   </NavigationContainer>
  );
}