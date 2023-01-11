import react from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ROUTES, COLORS} from '../constants';
import { Home, Achievements, Calender, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.HOME) {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === ROUTES.ACHIEVEMENTS) {
            iconName = focused ? 'ios-trophy' : 'ios-trophy';
          } else if (route.name === ROUTES.CALENDER) {
            iconName = focused ? 'ios-calendar' : 'ios-calendar';
          } else if (route.name === ROUTES.SETTINGS) {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: styles.tabBarStyle
      })}
      animationEnabled = {true}
      swipeEnabled = {true}
    >
      <Tab.Screen name={ROUTES.HOME} component={Home}  options={{headerShown: true}} />
      <Tab.Screen name={ROUTES.ACHIEVEMENTS} component={Achievements}  options={{headerShown: true}} />
      <Tab.Screen name={ROUTES.CALENDER} component={Calender}  options={{headerShown: true}} />
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
      bottom: 15,
      right: 10,
      left: 10,
      borderRadius: 50,
    },
  });
