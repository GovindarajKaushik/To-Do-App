  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621


  import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
  import React from 'react'
  import { ROUTES } from '../constants';
  import { useNavigation } from '@react-navigation/native';
  import Entypo from 'react-native-vector-icons/Entypo';
  import { useState } from 'react';
  import { useGlobalContext } from "../context";

  // Tasks component for rendering task items
  const Tasks = (props) => {
    // State for keeping track of whether the task is selected or not
    const [selected, setSelected] = React.useState(false);

    // State for changing color of trash icon based on press/press out
    const [iconColor, setIconColor] = React.useState('grey');

    // Hook for navigation
    const navigation = useNavigation();

    // Hook for getting the global tasks context
    const { tasks, setTasks, tasksDone, setTasksDone } = useGlobalContext();

    const onTaskPressed = () => {
      deleteTask(props.index);
      }
    

    // Function to delete task
    const deleteTask = (deleteIndex) => {
      // Filter the tasks and delete the one at the specified index
      setTasks(tasks.filter((value, index) => index != deleteIndex))
    }

    // Function to handle task press
    // const onTaskPressed = () => {
    //   // Navigate to the ToDoList screen and pass the task title and color as props
    //   navigation.navigate(ROUTES.TODOLIST, {title: props.title, color: props.color}); 
    // }

    // Function to handle trash press
    const onTrashPressed  = () => {
      setSelected(!selected);
    }
    
    // Function to handle press in on trash icon
    const onTrashPressIn = () => {
      setIconColor('#EB5406');
    }
    
    // Function to handle press out on trash icon
    const onTrashPressOut = () => {
      setIconColor('grey');
      deleteTask(props.index)
    }
    
    
    return (
      <View style={styles.container}>
        {/* Wrapped the task title and time in a TouchableOpacity with width 260 to make it touchable */}
        <TouchableOpacity style={{width: 260}} onPress={onTaskPressed}>
          <Text style={styles.taskTitle}>{props.title}</Text>
          <Text style={styles.taskTime}>{props.time}</Text>
          {/* The importance view with a background color defined by the props */}
          <View style={[styles.importance, {backgroundColor: props.color}]}></View>
        </TouchableOpacity>
        {/* The trash icon from Entypo library */}
        <Entypo 
          style={styles.icon} 
          name='trash'
          size={23} 
          color={iconColor}
          activeOpacity={1}
          //  Triggers for press in, press out, and press events 
          onPressIn={onTrashPressIn}
          onPressOut={onTrashPressOut}
          onPress={onTrashPressed}
        />
      </View>
    )

  }


    // Exporting the Tasks component
    export default Tasks
    
    // Styles for the Tasks component
    const styles = StyleSheet.create({
      container: {
        // Background color of the container
        backgroundColor: '#1E1E1E',
        width: 350,
        height: 90,
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 5,
      },
    
      taskTitle: {
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 17,
        fontWeight: 'bold',
      },
      taskTime: {
        color: 'grey',
        marginLeft: 15,
        padding: 5,
      },
      importance: {
        height: 90,
        width: 10,
        position: 'absolute',
        borderRadius: 20,
      },
      icon: {
        position: 'absolute',
        marginLeft: 300,
        marginTop: 30,
      },
    })
    
    // Colors for importance:
    // high: #FFC0CB
    // Medium: #FFC4A1
    // Low: #94F578
    