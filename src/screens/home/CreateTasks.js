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
  const [title, setTitle] = useState("title" || "");
  const [time, setTime] = useState("00:00");
  const [color, setColor] = useState("#94F578")
  const { tasks, setTasks } = useGlobalContext();
  const navigation = useNavigation();

  
  const addTask = () => {
    let newTask = {
      title: title,
      time: time,
      color: color,
    };
    setTasks([...tasks, newTask]);
    navigation.navigate(ROUTES.HOME);
  };

  return (
    <View style={styles.container}>
      {/* <BlackTop height={'52%'} /> */}
      <View style={styles.blacktop}>
        <Text style={styles.title}>Create a new Task</Text>
        <Text style={styles.name}>Task Name</Text>
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
        <Text style={styles.name}>Time</Text>
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          value={time}
          onChangeText={setTime}
          placeholder={"Time"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
        <Text style={[styles.name, {color: '#000'}]}>Task Color</Text>
        <ColorPicker
					onColorChangeComplete={setColor}
					thumbSize={40}
					sliderSize={40}
					noSnap={true}
					row={false}
          swatches={false}
          sliderHidden={true}
				/>
        <View>
          <Button onPress={addTask} title="Add" />
        </View>
      </View>
    </View>
  );
};

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
