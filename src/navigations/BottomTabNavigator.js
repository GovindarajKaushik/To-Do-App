import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import {ROUTES} from '../constants';
import { Home, Achievements, Calender, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = AnimatedTabBarNavigator ();


function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        // inactiveTintColor: "white",
        activeBackgroundColor: "white",
        tabStyle: styles.tabStyle,
      }}
      appearance={{
        floating: true,
        shadow: true,
        whenInactiveShow: 'icon-only'
      }}
      animationEnabled = {true}
      swipeEnabled = {true}
    >     

     <Tab.Screen
      name={ROUTES.HOME}
      component={Home}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name='ios-home'
                size={24}
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    <Tab.Screen
      name={ROUTES.CALENDER}
      component={Calender}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name='ios-calendar'
                size={24}
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    <Tab.Screen
      name={ROUTES.ACHIEVEMENTS}
      component={Achievements}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name='ios-trophy'
                size={24}
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    <Tab.Screen
      name={ROUTES.SETTINGS}
      component={Settings}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name='ios-settings'
                size={24}
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: '#171717',
  },
});
