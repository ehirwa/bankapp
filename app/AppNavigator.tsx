import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import LoginScreen from './tabs/LoginScreen';
import FlagScreen from './tabs/FlagScreen';

type RootStackParamList = {
  Login: undefined;
  Flag: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Flag" component={FlagScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
