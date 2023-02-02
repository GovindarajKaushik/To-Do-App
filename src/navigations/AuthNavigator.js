import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CreateProject, CreateProjects, Login, ProjectList, Register, ToDoList} from '../screens';
import {ROUTES} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import CreateTasks from '../screens/home/CreateTasks';


const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen
        name={ROUTES.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
       <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown: false}}/>
      <Stack.Screen 
       name={ROUTES.HOME}
       component={BottomTabNavigator}
       options={{headerShown: false}}
      />
      <Stack.Screen
      name={ROUTES.TODOLIST}
      component={ToDoList}
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
       <Stack.Screen 
       name={ROUTES.CREATETASKS}
       component={CreateTasks}
       options={{headerShown: false}}
        />
        <Stack.Screen 
       name={ROUTES.PROJECTLIST}
       component={ProjectList}
       options={{headerShown: true}}
        />
         <Stack.Screen 
       name={ROUTES.CREATEPROJECT}
       component={CreateProject}
       options={{headerShown: true}}
        />
    </Stack.Navigator>
  );
}

export default AuthNavigator;