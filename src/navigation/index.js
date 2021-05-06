import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Main from '../screens/Main';

const Stack = createStackNavigator();

const StackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        initialRouteName="Splash"
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: 'false'}}
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
