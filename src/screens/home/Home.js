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
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../../constants";
import { ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import BlackTop from "../../components/BlackTop";
import SearchBar from "../../components/SearchBar";
import Projects from "../../components/Projects";
import Tasks from "../../components/Tasks";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGlobalContext } from "../../context";

const userData = {
  name: "James",
  email: "James@gmail.com",
  password: "P@ssword",
};

const Home = (props) => {
  // State to hold the input value of the search bar
  const [term, setTerm] = useState("");
  // Destructuring tasks and projects from the global context
  const { tasks, projects, projectsDone, setProjectsDone } = useGlobalContext();
  // Navigation object from react-navigation
  const navigation = useNavigation();


  // Function to navigate to the Create Tasks screen
  const onTaskPressed = () => {
    navigation.navigate(ROUTES.CREATETASKS); // Navigate to the Create Tasks screen
  };

  // Function to navigate to the Project List screen

  // Function to navigate to the Create Project screen
  const createProjectPressed = () => {
    navigation.navigate(ROUTES.CREATEPROJECT); // Navigate to the Create Project screen
  };



  return (
    // Main container for the home screen
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* The black top container */}
      <BlackTop height={"25%"}>
        {/* The header container */}
        <View style={styles.header}>
          {/* The welcome text */}
          <Text style={styles.welcome}>
            Hello {userData.name} <Text style={styles.emoji}>👋</Text>
          </Text>
          {/* The number of projects text */}
          <Text style={styles.numOfProject}>
            You have a total of {projects.length} projects to complete today
          </Text>
        </View>
        {/* The user image */}
        <Image source={require("../../assets/User2.png")} style={styles.user} />
        <SearchBar onChange={setTerm} term={term} />
      </BlackTop>

      <View style={styles.headerContainer}>

        <Text style={styles.projectsHeader}>Projects</Text>
        {/* <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
        <TouchableOpacity>
          <AntDesign
            onPress={createProjectPressed}
            style={styles.createIcon}
            name="pluscircle"
            size={39}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlatList
        horizontal={true}
        data={projects}
        renderItem={({item, index }) => {
          return <Projects containerColor={item.containerColor} projectName={item.projectName} projectDescription={item.projectDescription} date={item.date} index={index} />;
        }}
        />
      {/* {containerColor: "#3BECF7", projectName: "MAD assignment", projectDescription: "Make a site map that has 6 UI screens", date: "16 Jan, 2023 at 5:00 pm"}, */}
      </ScrollView>
      {/* The tasks header container */}
      <View style={styles.tasksHeaderContainer}>
        {/* The tasks header text */}
        <Text style={styles.tasksHeader}>Today's Tasks</Text>
        {/* The create task icon */}
        <TouchableOpacity onPress={onTaskPressed}>
          <AntDesign
            style={styles.createIcon}
            name="pluscircle"
            size={39}
            color="white"
          />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity> */}
      </View>
      {/* The tasks list */}
      <FlatList
        style={styles.Tasks}
        data={tasks}
        renderItem={({ item: { title, time, color }, index }) => {
          return <Tasks title={title} time={time} color={color} index={index} />;
        }}
      />
    </ScrollView>
  );
};

export default Home;

// Styles for the home screen
const styles = StyleSheet.create({
  welcome: {
    color: "white",
    width: 230,
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 15,
  },
  emoji: {
    fontSize: 30,
  },
  header: {
    marginRight: 90,
    marginTop: 120,
    height: 100,
  },
  numOfProject: {
    color: "white",
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 17,
    lineHeight: 25,
  },
  user: {
    position: "relative",
    bottom: 90,
    right: 25,
    height: 70,
    width: 70,
    marginLeft: 300,
    borderRadius: 50,
  },
  projectsHeader: {
    fontWeight: "900",
    fontSize: 22,
    width: 90,
    color: 'white',
    marginLeft: 20,
    paddingBottom: 3,
  },
  seeAll: {
    marginRight: 10,
    color: "grey",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 15,
    marginTop: 20,
    backgroundColor: "black",
    width: 150,
    height: 40,
    borderRadius: 30,
  },
  tasksHeaderContainer: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 540,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderRadius: 30,
    width: 190,
    height: 40,
  },
  tasksHeader: {
    color: "white",
    fontWeight: "900",
    fontSize: 22,
    // padding: 10,
    paddingLeft: 15,
  },
  createIcon: {
    // padding: 10,
  },
  container: {
    flex: 1,
  },
});
