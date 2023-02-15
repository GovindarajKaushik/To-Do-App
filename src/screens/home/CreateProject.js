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


  const CreateProject = () => {
    // state hook for project name
    const [projectName, setProjectName] = useState("title" || "");
    // state hook for project date
    const [date, setDate] = useState("16 Jan, 2023 at 5:00 pm");
    // state hook for project description
    const [projectDescription, setProjectDescription] = useState("Fill in the description" || "");
    // state hook for project container color
    const [containerColor, setContainerColor] = useState("#94F578")
    // hook for projects array and setProjects function from the global context
    const { projects, setProjects } = useGlobalContext();
    // hook for navigation from React Navigation library
    const navigation = useNavigation();
  
    // function to add new project to projects array
    const addProject = () => {
      let newProject = {
        containerColor: containerColor,
        projectName: projectName,
        projectDescription: projectDescription,
        date: date,
      };
      // add new project to existing projects array
      setProjects([...projects, newProject]);
      // navigate to HOME route
      navigation.navigate(ROUTES.HOME);
    };

    return (
      // main container view
      <View style={styles.container}>
        <View style={styles.blacktop}>
          {/* title for create project screen */}
          <Text style={styles.title}>Create a new Project</Text>
          {/* label for project name */}
          <Text style={styles.name}>Project Name</Text>
          {/* input field for project name */}
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
          {/* label for project date */}
          <Text style={styles.name}>Date</Text>
          {/* input field for project date */}
          <TextInput
            underlineColorAndroid={"transparent"}
            selectionColor={"transparent"}
            value={date}
            onChangeText={setDate}
            placeholder={"Date"}
            maxLength={30}
            style={[styles.input, { outline: "none" }]}
          />
          {/* label for project color */}
          <Text style={[styles.colorWheel, {color: '#000'}]}>Task Color</Text>
          {/* color picker component to select project color */}
          <ColorPicker
          style={{marginTop: -20, marginLeft: 30}}
            onColorChangeComplete={setContainerColor}
            thumbSize={90}
            sliderSize={40}
            noSnap={true}
            row={false}
            swatches={false}
            sliderHidden={true}
          />
          {/* button to add project */}
          <TouchableOpacity onPress={addProject} style={styles.createBtn}>
          <Text style={styles.createText}>Create</Text>
        </TouchableOpacity>
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
      colorWheel: {
        color: "white",
        fontSize: 22,
        marginLeft: 30,
        marginTop: 90,
        fontWeight: "200",
      },
      createBtn: {
        marginTop: 280,
        marginLeft: 90,
        backgroundColor: 'black',
        width: 170,
        height: 50,
        borderRadius: 30,
      },
      createText: {
        color: 'white',
        marginLeft: 55,
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 22,
      }
})

export default CreateProject;