import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native'
import React from 'react'
import { ROUTES } from '../constants';
import { useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import { useState } from 'react';


const Tasks = (props) => {
  const [selected, setSelected] = React.useState(false);
  const [iconColor, setIconColor] = React.useState('grey');
  const navigation = useNavigation();

  const onTaskPressed = () => {
    navigation.navigate(ROUTES.TODOLIST, {title: props.title, color: props.color}); // Pass the title of the task to the ToDoList screen});
  }

  const onTrashPressed  = () => {
    setSelected(!selected);
  }
  
  const onTrashPressIn = () => {
    setIconColor('#EB5406');
  }
  
  const onTrashPressOut = () => {
    setIconColor('grey');
  }
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{width: 260}} onPress={onTaskPressed}>
        <Text style={styles.taskTitle}>{props.title}</Text>
        <Text style={styles.taskTime}>{props.time}</Text>
        <View style={[styles.importance, {backgroundColor: props.color}]}></View>
      </TouchableOpacity>
        <Entypo 
          style={styles.icon} 
          name='trash'
          size={23} 
          color={iconColor}
          activeOpacity={1}
        onPressIn={onTrashPressIn}
        onPressOut={onTrashPressOut}
        onPress={onTrashPressed}/>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
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
        // flex: 1,
        // flexDirection: 'row',
        marginLeft: 300,
        marginTop: 30,
    },
})


// colors for importance :
// high: #FFC0CB
// Medium: #FFC4A1
//Low: #94F578