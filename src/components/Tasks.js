import { View, Text, Touchable, StyleSheet } from 'react-native'
import React from 'react'

const Tasks = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.taskTitle}>Making bread</Text>
      <Text style={styles.taskTime}>10:00 pm</Text>
      <View style={[styles.importance, {backgroundColor: props.taskColor}]}></View>
    </View>
  )
}

export default Tasks

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        width: 350,
        height: 90,
        borderRadius: 10,
        margin: 5,
        marginTop: 10,
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
    }
})


// colors for importance :
// high: #FFC0CB
// Medium: #FFC4A1
//Low: #94F578