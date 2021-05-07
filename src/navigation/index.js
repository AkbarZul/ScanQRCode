import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '../screens/Main';
import LoginScreen from "../screens/Login";
import Scan from "../screens/Scan";
import Generate from "../screens/Generate";

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Scan"
        component={Scan}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Generate"
        component={Generate}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const MainNavigation = () => {
    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    )
}
