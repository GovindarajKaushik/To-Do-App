// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './src/navigations/AuthNavigator';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <AuthNavigator /> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  }
})
export default App;