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


const CreateProject = () => {
    const [projectName, setProjectName] = useState("title" || "");
    const [date, setDate] = useState("00:00");
    const [projectDescription, setProjectDescription] = useState("Fill in the description" || "");
    const [containerColor, setContainerColor] = useState("#94F578")
    const { projects, setProjects } = useGlobalContext();
    const navigation = useNavigation();
  
    
    const addProject = () => {
      let newProject = {
        containerColor: containerColor,
        projectName: projectName,
        projectDescription: projectDescription,
        date: date,
      };
      setProjects([...projects, newProject]);
      navigation.navigate(ROUTES.HOME);
    };

    // containerColor: "#3BECF7", projectName: "MAD assignment", projectDescription: "Make a site map that has 6 UI screens", date: "16 Jan, 2023 at 5:00 pm"
  return (
    <View style={styles.container}>
      {/* <BlackTop height={'52%'} /> */}
      <View style={styles.blacktop}>
        <Text style={styles.title}>Create a new Project</Text>
        <Text style={styles.name}>Project Name</Text>
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          autoFocus={true}
          value={projectName}
          onChangeText={setProjectName}
          placeholder={"New Project name"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
        <Text style={styles.name}>Time</Text>
        <TextInput
          underlineColorAndroid={"transparent"}
          selectionColor={"transparent"}
          value={date}
          onChangeText={setDate}
          placeholder={"Date"}
          maxLength={30}
          style={[styles.input, { outline: "none" }]}
        />
        <Text style={[styles.name, {color: '#000'}]}>Task Color</Text>
        <ColorPicker
					onColorChangeComplete={setContainerColor}
					thumbSize={40}
					sliderSize={40}
					noSnap={true}
					row={false}
          swatches={false}
          sliderHidden={true}
				/>
        <View>
          <Button onPress={addProject} title="Add" />
        </View>
      </View>
    </View>
  )
}


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
})

export default CreateProject;