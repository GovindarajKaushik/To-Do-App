import react from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import {ROUTES, COLORS} from '../constants';
import { Home, Achievements, Calender, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = AnimatedTabBarNavigator();


function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}
      // screenOptions={({ route }) => ({
      //   tabBarIcon: ({ focused, color, size }) => {
      //     let iconName;

      //     if (route.name === ROUTES.HOME) {
      //       iconName = focused ? 'ios-home' : 'ios-home';
      //     } else if (route.name === ROUTES.ACHIEVEMENTS) {
      //       iconName = focused ? 'ios-trophy' : 'ios-trophy';
      //     } else if (route.name === ROUTES.CALENDER) {
      //       iconName = focused ? 'ios-calendar' : 'ios-calendar';
      //     } else if (route.name === ROUTES.SETTINGS) {
      //       iconName = focused ? 'ios-settings' : 'ios-settings';
      //     }

      //     // You can return any component that you like here!
      //     return <Icon name={iconName} size={25} color={color} />;
      //   },
      //   tabBarStyle: styles.tabBarStyle
      // })}
      // animationEnabled = {true}
      // swipeEnabled = {true}
    >      <Tab.Screen name={ROUTES.HOME} component={Home}  options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.CALENDER} component={Calender}  options={{headerShown: true}} />
      <Tab.Screen name={ROUTES.ACHIEVEMENTS} component={Achievements}  options={{headerShown: true}} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings}  options={{headerShown: true}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: '#171717',
    borderTopWidth: 0,
    bottom: '5%',
    // paddingTop: 20,
    alignSelf: 'center',
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  }
  ,
});
