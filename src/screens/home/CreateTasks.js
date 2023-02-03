  // Name: Govindaraj Kaushik
  // Class: DIT/FT/1B/02
  // admin NO. 2227621


import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { useGlobalContext } from "../../context";
import ColorPicker from 'react-native-wheel-color-picker';
//   import BlackTop from "../../components/BlackTop";

const CreateTasks = () => {
  // State to hold the title of the task
  const [title, setTitle] = useState("title" || "");
  // State to hold the time for the task
  const [time, setTime] = useState("00:00");
  // State to hold the color of the task
  const [color, setColor] = useState("#94F578")
  // Get the tasks from the global context and a setTasks function to update the tasks
  const { tasks, setTasks } = useGlobalContext();
  // Get the navigation object to navigate between screens
  const navigation = useNavigation();

  
  // Function to add a new task
  const addTask = () => {
    // Create a new task object with the current title, time, and color
    let newTask = {
      title: title,
      time: time,
      color: color,
    };
    // Update the tasks in the global context by adding the new task
    setTasks([...tasks, newTask]);
    // Navigate back to the home screen
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      {/* The main container for the create task screen */}
      <View style={styles.blacktop}>
        {/* Title for the create task screen */}
        <Text style={styles.title}>Create a new Task</Text>
        {/* Label for the task name input */}
        <Text style={styles.name}>Task Name</Text>
        {/* Input for the task name */}
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={title}
          onChangeText={setTitle}
          placeholder={"New Task name"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
        {/* Label for the task time input */}
        <Text style={styles.name}>Time</Text>
        {/* Input for the task time */}
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          value={time}
          onChangeText={setTime}
          placeholder={"Time"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
        {/* Label for the task color picker */}
        <Text style={[styles.name, {color: '#000'}]}>Task Color</Text>
        {/* Color picker for selecting the task color */}
        <ColorPicker
					onColorChangeComplete={setColor}
					thumbSize={40}
					sliderSize={40}
					noSnap={true}
					row={false}
          swatches={false}
          sliderHidden={true}
				/>
        {/* Button to add the task */}
        <View>
          <Button onPress={addTask} title="Add" />
        </View>
      </View>
    </View>
  );
};

// Styles for the create task screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    marginTop: 50,
    marginLeft: 30,
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  name: {
    color: "white",
    fontSize: 22,
    marginLeft: 30,
    marginTop: 50,
    fontWeight: "200",
  },
  input: {
    color: "white",
    fontWeight: "600",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: 5,
    padding: 3,
    height: 40,
    fontSize: 24,
    marginLeft: 30,
  },
  blacktop: {
    backgroundColor: COLORS.black,
    height: Dimensions.get("window").height * 0.5,
    width: Dimensions.get("window").width,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});
export default CreateTasks;
