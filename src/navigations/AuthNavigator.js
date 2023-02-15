  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateProject, CreateProjects, Login, ProjectList, Register, ToDoList} from '../screens';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import CreateTasks from '../screens/home/CreateTasks';

// Importing the createStackNavigator method from @react-navigation/stack library
const Stack = createStackNavigator();

// This function returns the stack navigator that handles the authentication flow
function AuthNavigator() {
  return (
    // Setting the initialRouteName to the Login screen
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      {/* Login Screen */}
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        // Hiding the header for the Login Screen
        options={{headerShown: false}}
      />
      {/* Register Screen */}
      <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown: false}}/>
      {/* Bottom Tab Navigator */}
      <Stack.Screen 
       name={ROUTES.HOME}
       component={BottomTabNavigator}
       // Hiding the header for the Bottom Tab Navigator
       options={{headerShown: false}}
      />
      {/* ToDoList Screen */}
      <Stack.Screen
      name={ROUTES.TODOLIST}
      component={ToDoList}
      // Setting dynamic title and header style based on the route parameters
      options={({route}) => {
      const title = route.params.title;
      const color = route.params.color
       return({
      title: title,
      headerStyle: {
        backgroundColor: color,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      });
      }}
       />  
      {/* CreateTasks Screen */}
       <Stack.Screen 
       name={ROUTES.CREATETASKS}
       component={CreateTasks}
       // Hiding the header for the CreateTasks Screen
       options={{headerShown: false}}
        />
      {/* ProjectList Screen */}
        <Stack.Screen 
       name={ROUTES.PROJECTLIST}
       component={ProjectList}
       // Showing the header for the ProjectList Screen
       options={{headerShown: true}}
        />
      {/* CreateProject Screen */}
         <Stack.Screen 
       name={ROUTES.CREATEPROJECT}
       component={CreateProject}
       // Showing the header for the CreateProject Screen
       options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
