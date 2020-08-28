import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Image, Easing, Animated, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const navigation = <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{
        headerShown: false
      }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  </NavigationContainer>

  return navigation;
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    card: '#00A2E8',
    text: 'rgb(28, 28, 30)',
  },
};

export default AppNavigator;
