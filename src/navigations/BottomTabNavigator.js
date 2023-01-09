import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ROUTES} from '../constants';
import { Home, Achievements, Calender, Settings} from '../screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={ROUTES.HOME} component={Home}  options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.ACHIEVEMENTS} component={Achievements}  options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.CALENDER} component={Calender}  options={{headerShown: false}} />
      <Tab.Screen name={ROUTES.SETTINGS} component={Settings}  options={{headerShown: false}} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;