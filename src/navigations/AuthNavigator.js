import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, ForgotPassword, Register} from '../screens';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';


const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen 
       name={ROUTES.HOME}
       component={BottomTabNavigator}
       options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;