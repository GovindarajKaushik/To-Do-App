  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621

import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import {ROUTES} from '../constants';
import { Home, Achievements, Calender, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

// Import the AnimatedTabBarNavigator component from the library
const Tab = AnimatedTabBarNavigator ();

// Function component for the bottom tab navigator
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      // Options for the tab bar
      tabBarOptions={{
        // Color of the active tab
        activeTintColor: "black",
        // Color of the inactive tabs
        // inactiveTintColor: "white",
        // Background color of the active tab
        activeBackgroundColor: "white",
        // Style for the tab bar
        tabStyle: styles.tabStyle,
      }}
      // Appearance options for the tab bar
      appearance={{
        // Enable floating mode for the tab bar
        floating: true,
        // Enable shadow for the tab bar
        shadow: true,
        // Only show the icon when the tab is inactive
        whenInactiveShow: 'icon-only'
      }}
      // Enable animation for tab bar transitions
      animationEnabled = {true}
      // Enable swipe gestures for tab bar transitions
      swipeEnabled = {true}
    >     

     <Tab.Screen
      // Route name for the Home screen
      name={ROUTES.HOME}
      // Component for the Home screen
      component={Home}
      // Options for the Home tab
      options={{
        // Icon for the Home tab
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
    {/* <Tab.Screen
      // Route name for the Calender screen
      name={ROUTES.CALENDER}
      // Component for the Calender screen
      component={Calender}
      // Options for the Calender tab
      options={{
        // Icon for the Calender tab
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                name='ios-calendar'
                size={24}
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    /> */}
   <Tab.Screen
   // Route name for the Achievements screen
      name={ROUTES.ACHIEVEMENTS}
    // Component for the Achievements screen
      component={Achievements}
    // Options for the Achievements tab
      options={{
        // Define the appearance of the tab bar icon for the Achievements screen
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                // The icon name
                name='ios-trophy'
                // The size of the icon
                size={24}
                // The color of the icon, it changes based on the focus state of the tab
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    <Tab.Screen
    // Route name for the Settings screen
      name={ROUTES.SETTINGS}
    // Component for the Settings screen
      component={Settings}
    // Options for the Settings tab
      options={{
        // Define the appearance of the tab bar icon for the Settings screen
        tabBarIcon: ({ focused, color, size }) => (
            <Icon
                // The icon name
                name='ios-settings'
                // The size of the icon
                size={24}
                // The color of the icon, it changes based on the focus state of the tab
                color={focused ? '#171717' : 'white'}
                focused={focused}
            />
        )
      }}
    />
    </Tab.Navigator>
  );
}

// Export the BottomTabNavigator component
export default BottomTabNavigator;

// Define the styles for the tab navigator
const styles = StyleSheet.create({
  tabStyle: {
    // Set the background color of the tab navigator
    backgroundColor: '#171717',
  },
});
